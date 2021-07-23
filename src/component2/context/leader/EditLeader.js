import React, { Component } from "react";
import axios from "axios";


export default class EditLeader extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeJob = this.onChangeJob.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            errors: null,
            file: null,
            name: '',
            job: '',
          
            image: ''
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;  //lay id tu trinh duyet (đc truyền từ app.js trong thẻ Route)
        console.log(id);
        axios.get(`http://localhost:8000/api/leader/` + id)
            .then(res => {
                this.setState({
                    name: res.data.data.name,
                    job: res.data.data.job,
               
                    image: res.data.data.image
                });
                console.log(res.data.data);
            })
            .catch((error) => {
                //console.log(error);
            })
    }

    onChangeName = (e) => {
        this.setState({ name: e.target.value });
    };
    onChangeJob = (e) => {
        this.setState({ job: e.target.value });
    };
 
    onChangeImage = (e) => {
        this.setState({ file: URL.createObjectURL(e.target.files[0]) });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const fileInput = document.querySelector("#fileupload");
        const formData = new FormData();
        console.log(this.state.file);
        formData.append('image', fileInput ? fileInput.files[0] : this.state.image);
        formData.append('name', this.state.name);
        formData.append('job', this.state.job);
        
        formData.append('_method', "put");

        axios
            .post(`http://localhost:8000/api/leader/` + this.props.match.params.id, formData)
            .then((res) => {
                console.log(res.data);
                if (res.data.status === "error") {
                    console.log(res.data.errors);
                }
                else {
                    console.log('Leader updated!');
                    window.location.href = "/leader";
                }
            })
            .catch((err) => {
                console.log('Update car Error');
            });
    }
    render() {
        return (
            <div className="w3-card-6 w3-border w3-center w3-text-yellow" style={{ width: '60%', margin:'auto' }}>
                <div class="w3-container w3-orange w3-text-blue ">
                    <h2 className="w3-serif w3-text-black">Edit new Leader</h2>
                </div>
                <form
                    onSubmit={this.onSubmit}
                    encType="multipart/form-data"
                    method="put"
                >
                    {/* <legend className="w3-container">Edit new Partner</legend> */}
                    {/* <h2>Edit new Partner</h2> */}
                    <div class="w3-container">
                        <label className="w3-serif" style={{fontSize:'25px'}}> <i class="fas fa-signature"></i>Name</label>
                        <input className="w3-input w3-serif" style={{fontSize:'20px'}}
                            type="text"
                            name="name"
                            onChange={this.onChangeName}
                            value={this.state.name}
                        />
                    </div>
                    <div class="w3-container">
                        <label className="w3-serif" style={{fontSize:'25px'}}> <i class="fas fa-signature"></i>Job</label>
                        <input className="w3-input w3-serif" style={{fontSize:'20px'}}
                            type="text"
                            name="job"
                            onChange={this.onChangeJob}
                            value={this.state.job}
                        />
                    </div>
                  
                    <div class="w3-container">
                    <label className="w3-serif" style={{fontSize:'25px'}}><i class="far fa-images"></i>Image</label>
                        <input className="w3-input w3-serif" style={{fontSize:'20px'}}
                            id="fileupload"
                            type="file"
                            name="image"
                            onChange={this.onChangeImage}
                        />
                    </div>
                    <div class="w3-container">
                        <img src={"/images/" + this.state.image} width="200px" height="150px"></img>
                    </div>
                    <button type="submit" className="w3-button w3-red w3-border w3-border-red w3-round-large">Update</button>
                </form>
            </div>
        );
    }
}
