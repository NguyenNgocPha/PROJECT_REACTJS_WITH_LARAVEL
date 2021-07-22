import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import AddSharing from "./AddSharing";
import { Link } from "react-router-dom";

class ListSharing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sharings: [],
            noDataFound: [],
            newModalSharing: false,
        };
    }

    // componentDidMount() {
    //     axios.get(`http://localhost:8000/api/sharing`)
    //         .then(res => {
    //             const sharings = res.data;
    //             this.setState({ sharings });
    //         })
    //         .catch(error => console.log(error));

    // }
    getSharing = () => {
        axios.get(`http://localhost:8000/api/sharing`)
            .then(res => {
                const sharings = res.data;
                this.setState({ sharings });
            })
            .catch(error => console.log(error));
    };
    componentDidMount() {
        this.getSharing();
    }
  
    handleAddSubmit = (sharing) => {
        console.log();
        const { sharings } = this.state;
        sharings.push(sharing);
        this.setState({ sharings: sharings });
    };
    toogleAddModal = () => {
        this.setState({ newModalSharing: !this.state.newModalSharing });
    };
    onCloseFormAdd = () => {
        this.setState({ newModalSharing: false });
    };

    deleteSharing = (id) => {
        axios
            .delete(`http://localhost:8000/api/sharing/` + id) //tham số truyền vào là id
            .then((res) => {
                console.log("Sharing removed deleted");
                this.getSharing();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    render() {
        const {  sharings, newModalSharing } = this.state;
        return (
            
            <div>
                <div className="form-wrapper">
                    <div className="container">
                        <h2>List of Sharing</h2>
                        <AddSharing
                            newModalSharing={newModalSharing}
                            toogleAddModal={this.toogleAddModal}
                            onCloseForm={this.onCloseForm}
                            handleAddSubmit={this.handleAddSubmit}
                        />
                        <a className="btn" href="/indexAdmin"> Go Back </a>
                        <Table>
                            <thead>
                                <tr className="text-primary">
                                    <th>ID</th>
                                    <th>Name </th>
                                    <th>Job</th>
                                    <th>Share</th>
                                    <th>Image</th>
                                    <th>Action</th>

                                </tr>
                            </thead>

                            <tbody>
                                {this.state.sharings.map(sharing =>
                                    <tr key={sharing.id}>
                                        <td>{sharing.id}</td>
                                        <td>{sharing.name}</td>
                                        <td>{sharing.job}</td>
                                      
                                        <td>{sharing.share}</td>
                                        <td>
                                            <img
                                                src={"assets/images/Students/" + sharing.image} 
                                                width="200px"
                                                height="150px"
                                            ></img>
                                        </td>

                                        <td className="display=flex">
                                            <Link
                                                to={"/sharing/" + sharing.id + "/edit"}
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
                                                        this.deleteSharing(sharing.id);
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

export default ListSharing;
