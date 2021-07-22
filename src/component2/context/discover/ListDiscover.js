import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
// import AddPartner from "./AddPartner";
import { Link } from "react-router-dom";
import AddDiscover from "./AddDiscover";

class ListDiscover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            discovers: [],
            noDataFound: [],
            newModalDiscover: false,
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/discover`)
            .then(res => {
                const discovers = res.data;
                this.setState({ discovers });
            })
            .catch(error => console.log(error));

    }

    
    getDiscover = () => {
        axios.get(`http://localhost:8000/api/discover`)
            .then(res => {
                const discovers = res.data;
                this.setState({ discovers });
            })
            .catch(error => console.log(error));
    };
    componentDidMount() {
        this.getDiscover();
    }
  
    handleAddSubmit = (discover) => {
        console.log();
        const { discovers } = this.state;
        discovers.push(discover);
        this.setState({ discovers: discovers });
    };
    toogleAddModal = () => {
        this.setState({ newModalDiscover: !this.state.newModalDiscover });
    };
    onCloseFormAdd = () => {
        this.setState({ newModalDiscover: false });
    };

    deleteDiscover = (id) => {
        axios
            .delete(`http://localhost:8000/api/discover/` + id) //tham số truyền vào là id
            .then((res) => {
                console.log("Discover removed deleted");
                this.getDiscover();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    render() {
        const {  discovers, newModalDiscover } = this.state;
        return (

            <div>
                <div className="form-wrapper">
                    <div className="container">
                        <h2>List of Discover</h2>
                        <AddDiscover
                            newModalDiscover={newModalDiscover}
                            toogleAddModal={this.toogleAddModal}
                            onCloseForm={this.onCloseForm}
                            handleAddSubmit={this.handleAddSubmit}  
                            
                        />
                        <a className="btn" href="/indexAdmin"> Go Back </a>
                        <Table>
                            <thead>
                                <tr className="text-primary">
                                    <th>ID</th>
                                    <th>Title </th>
                                    <th>Day</th>
                                    <th>Image</th>
                                    <th>Content</th>

                                </tr>
                            </thead>

                            <tbody>
                                {this.state.discovers.map(discover =>
                                    <tr key={discover.id}>
                                        <td>{discover.id}</td>
                                        <td>{discover.title}</td>
                                        <td>{discover.day}</td>
                                        <td>
                                            <img
                                                src={"assets/images/Students/" + discover.image} 
                                                width="200px"
                                                height="150px"
                                            ></img>
                                        </td>
                                        <td>{discover.content}</td>
                                        <td className="display=flex">
                                            <Link
                                                to={"/discover/" + discover.id + "/edit"}
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
                                                        this.deleteDiscover(discover.id);
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

export default ListDiscover;