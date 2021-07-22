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

    getPartner = () => {
        axios.get(`http://localhost:8000/api/partner`)
            .then(res => {
                const partners = res.data;
                this.setState({ partners });
            })
            .catch(error => console.log(error));
    };

    componentDidMount() {
        this.getPartner();
    }

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
        const {  partners, newModalPartner } = this.state;
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
                        <a className="btn" href="/indexAdmin"> Go Back </a>
                        <Table>
                            <thead>
                                <tr className="text-primary">
                                    <th>ID</th>
                                    <th>Partner </th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.partners.map(partner =>
                                    <tr key={partner.id}>
                                        <td>{partner.id}</td>
                                        <td>{partner.namecompany}</td>
                                        <td>
                                            <img
                                                src={"assets/images/Partners/" + partner.image}
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
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListPartner;
