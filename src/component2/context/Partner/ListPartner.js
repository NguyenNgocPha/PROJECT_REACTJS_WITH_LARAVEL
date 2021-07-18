import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import AddPartner from "./AddPartner";
import { Link } from "react-router-dom";
class ListPartner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: [],
            noDataFound: [],
            newModalPartner: false,
        };
    }

    componentDidMount() {
        this.getPartner();
    }

    getPartner = () => {
        axios
            .get("http://localhost:8000/api/partner")
            .then((response) => {
                console.log(response.data.data);
                if (response.status === 200) {
                    this.setState({
                        partners: response.data.data ? response.data.data : [],
                    });
                }
                if (
                    response.data.status === "failed" &&
                    response.data.success === "false"
                ) {
                    this.setState({ noDataFound: response.data.message });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    handleAddSubmit = (partner) => {
        console.log();
        const { partners } = this.state;
        partners.push(partner);
        this.setState({ partners: partners });
    };
    toogleAddModal = () => {
        this.setState({ newModalPartner: !this.state.newModalPartner });
    };
    onCloseFormAdd = () => {
        this.setState({ newModalPartner: false });
    };

    deletePartner = (id) => {
        axios
            .delete(`http://localhost:8000/api/partner/` + id) //tham số truyền vào là id
            .then((res) => {
                console.log("Partner removed deleted");
                this.getPartner();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    render() {
        const { partners, noDataFound, newModalPartner } = this.state;
        var partnerDetail = [];
        if (partners.length) {
            partnerDetail = partners.map((partner, index) => {
                return (
                    <tr key={partner.id}>
                        <td>{partner.id}</td>
                        <td>{partner.name}</td>
                        <td>
                            <img
                                src={"/images/" + partner.image}
                                width="200px"
                                height="150px"
                            ></img>
                        </td>
                        
                        <td className="display=flex">
                            <Link
                                to={"/partner/" + partner.id + "/edit"}
                                className="edit-link"
                            >
                                <Button
                                    color="success"
                                    className="mr-3"
                                    size="sm"
                                >
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                color="danger"
                                size="sm"
                                onClick={(e) => {
                                    if (
                                        window.confirm(
                                            "Bạn có thật sự muốn xóa?"
                                        )
                                    )
                                        this.deletePartner(partner.id);
                                }}
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                );
            });
        }
        return (
            <div>
                 <div className="form-wrapper">
                 <div className="container">
                <h2>List of Partner</h2>
                <AddPartner
                    newModalPartner={newModalPartner}
                    toogleAddModal={this.toogleAddModal}
                    onCloseForm={this.onCloseForm}
                    handleAddSubmit={this.handleAddSubmit}
                />
                <Table>
                    <thead>
                        <tr className="text-primary">
                            <th>ID</th>
                            <th>Name </th>
                            <th>Image</th>                       
                            <th>Action</th>
                        </tr>
                    </thead>
                    {partners.length === 0 ? (
                        <tbody>
                            <tr>
                                <td>
                                    <h2></h2>
                                </td>
                            </tr>
                        </tbody>
                    ) : (
                        <tbody>{partnerDetail}</tbody>
                    )}
                </Table>
            </div>
            </div>
            </div>
        );
    }
}

export default ListPartner;
