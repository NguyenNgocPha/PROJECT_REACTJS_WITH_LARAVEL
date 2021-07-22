import React, { Component } from "react";
import axios from "axios";


export default class EditPartner extends Component {
    constructor(props) {
        super(props);
        this.onChangeNameCompany = this.onChangeNameCompany.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            errors: null,
            file: null,
            namecompany: '',
            image: ''
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;  //lay id tu trinh duyet (đc truyền từ app.js trong thẻ Route)
        console.log(id);
        axios.get(`http://localhost:8000/api/partner/` + id)
            .then(res => {
                this.setState({
                    namecompany: res.data.data.namecompany,
                    image: res.data.data.image
                });
                console.log(res.data.data);
            })
            .catch((error) => {
                //console.log(error);
            })
    }

    onChangeNameCompany = (e) => {
        this.setState({ namecompany: e.target.value });
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
        formData.append('namecompany', this.state.namecompany);
        formData.append('_method', "put");

        axios
            .post(`http://localhost:8000/api/partner/` + this.props.match.params.id, formData)
            .then((res) => {
                console.log(res.data);
                if (res.data.status === "error") {
                    console.log(res.data.errors);
                }
                else {
                    console.log('Partner updated!');
                    window.location.href="/partner";
                }
            })
            .catch((err) => {
                console.log('Update car Error');
            });
    }
    render() {
        return (
            <div>
                <form 
                    onSubmit={this.onSubmit}
                    encType="multipart/form-data"
                    method="put"
                >
                    <legend>Edit new Partner</legend>
                    <div className="form-group">
                        <label>Name Company</label>
                        <input
                            type="text"
                            name="namecompany"
                            onChange={this.onChangeNameCompany}
                            value={this.state.namecompany}
                        />
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input
                            id="fileupload"
                            type="file"
                            name="image"
                            onChange={this.onChangeImage}
                        />
                    </div>
                    <div className="form-group">
                        <img src={"/images/"+this.state.image} width= "200px"  height="150px"></img>
                    </div>                  
                    <button type="submit" className="btn-success">Update</button>
                </form>
            </div>
        );
    }
}
