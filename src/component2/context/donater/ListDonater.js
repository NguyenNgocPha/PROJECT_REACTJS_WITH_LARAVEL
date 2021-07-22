import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
// import AddPartner from "./AddPartner";
import { Link } from "react-router-dom";

class ListDonater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donaters: [],
            noDataFound: [],
            newModalPartner: false,
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/donater`)
            .then(res => {
                const donaters = res.data;
                this.setState({ donaters });
            })
            .catch(error => console.log(error));

    }

  
    // handleAddSubmit = (sharings) => {
    //     console.log();
    //     const { sharings } = this.state;
    //     sharings.push(sharing);
    //     this.setState({ sharings: sharings });
    // };
    // toogleAddModal = () => {
    //     this.setState({ newModalSharing: !this.state.newModalSharing });
    // };
    // onCloseFormAdd = () => {
    //     this.setState({ newModalSharing: false });
    // };

    // deleteSharing = (id) => {
    //     axios
    //         .delete(`http://localhost:8000/api/sharing/` + id) //tham số truyền vào là id
    //         .then((res) => {
    //             console.log("Sharing removed deleted");
    //             this.getSharing();
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };
    render() {
        return (
            <div style={{background:'url(https://st.quantrimang.com/photos/image/2018/01/31/hinh-nen-Powerpoint-35.jpg)'}}>
                <div className="form-wrapper">
                    <div className="container">
                        <h2 className="w3-sans-serif" style={{textAlign:'center', color:'#0000FF'}}>List of Donater</h2>
                        {/* <AddPartner
                            // newModalPartner={newModalPartner}
                            // toogleAddModal={this.toogleAddModal}
                            // onCloseForm={this.onCloseForm}
                            // handleAddSubmit={this.handleAddSubmit}
                        /> */}
                        <div className="row" style={{ marginLeft: '86%', fontSize: '30px',marginBotoom:'20px' }}>
                            <a href="/indexAdmin" style={{ background: 'red' }}>
                                <i class="fas fa-arrow-alt-circle-left"></i>Go Back
                            </a>
                        </div>
                        <Table>
                            <thead>
                                <tr className="text-primary" style={{fontSize:'20px'}}>
                                    <th>ID</th>
                                    <th>Title </th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>

                                </tr>
                            </thead>

                            <tbody>
                                {this.state.donaters.map(donater =>
                                    <tr key={donater.id}>
                                        <td>{donater.id}</td>
                                        <td>{donater.name}</td>
                                        <td>{donater.email}</td>
                                      
                                        <td>{donater.phone}</td>
                                        <td className="display=flex">
                                            {/* <Link
                                                to={"/sharing/" + sharing.id + "/edit"}
                                                className="edit-link"
                                            > */}
                                                <Button
                                                    color="success"
                                                    className="mr-3"
                                                    size="sm"
                                                >
                                                    Edit
                                                </Button>
                                            {/* </Link> */}
                                            <Button
                                                color="danger"
                                                size="sm"
                                                // onClick={(e) => {
                                                //     if (
                                                //         window.confirm(
                                                //             "Bạn có thật sự muốn xóa?"
                                                //         )
                                                //     )
                                                //         this.deleteSharing(sharing.id);
                                                // }}
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListDonater;
