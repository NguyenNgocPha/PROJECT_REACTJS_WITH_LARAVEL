import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
// import AddPartner from "./AddPartner";
import { Link } from "react-router-dom";

class ListCampaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaigns: [],
            noDataFound: [],
            newModalCampaign: false,
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/campaign`)
            .then(res => {
                const campaigns = res.data;
                this.setState({ campaigns });
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
            <div>
                <div className="form-wrapper">
                    <div className="container">
                        <h2>List of Campaigns</h2>
                        {/* <AddPartner
                            // newModalPartner={newModalPartner}
                            // toogleAddModal={this.toogleAddModal}
                            // onCloseForm={this.onCloseForm}
                            // handleAddSubmit={this.handleAddSubmit}
                        /> */}
                        <a className="btn" href="/indexAdmin"> Go Back </a>
                        <Table>
                            <thead>
                                <tr className="text-primary">
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Content</th>
                                    <th>Action</th>

                                </tr>
                            </thead>

                            <tbody>
                                {this.state.campaigns.map(campaign =>
                                    <tr key={campaign.id}>
                                        <td>{campaign.id}</td>

                                        <td>{campaign.name}</td>
                                        <td>{campaign.content}</td>
                                       
                                        
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

export default ListCampaign;
