import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import AddLeader from "./AddLeader";
import { Link } from "react-router-dom";

class ListLeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leaders: [],
            noDataFound: [],
            newModalLeader: false,
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/leader`)
            .then(res => {
                const leaders = res.data;
                this.setState({ leaders });
            })
            .catch(error => console.log(error));

    }

    getLeader = () => {
        axios.get(`http://localhost:8000/api/leader`)
            .then(res => {
                const leaders = res.data;
                this.setState({ leaders });
            })
            .catch(error => console.log(error));
    };
    componentDidMount() {
        this.getLeader();
    }

    handleAddSubmit = (leader) => {
        console.log();
        const { leaders } = this.state;
        leaders.push(leader);
        this.setState({ leaders: leaders });
    };
    toogleAddModal = () => {
        this.setState({ newModalLeader: !this.state.newModalLeader });
    };
    onCloseFormAdd = () => {
        this.setState({ newModalLeader: false });
    };

    deleteLeader = (id) => {
        axios
            .delete(`http://localhost:8000/api/leader/` + id) //tham số truyền vào là id
            .then((res) => {
                console.log("Leader removed deleted");
                this.getShLeader();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    render() {
        const { leaders, newModalLeader } = this.state;
        return (
            <div style={{background:'url(https://st.quantrimang.com/photos/image/2018/01/31/hinh-nen-Powerpoint-35.jpg)'}}>
                <div className="form-wrapper">
                    <div className="container">
                        <h2 className="w3-sans-serif" style={{textAlign:'center', color:'#0000FF'}}>List of Leader</h2>
                        <AddLeader
                            newModalLeader={newModalLeader}
                            toogleAddModal={this.toogleAddModal}
                            onCloseForm={this.onCloseForm}
                            handleAddSubmit={this.handleAddSubmit}
                        />
                        <div className="row" style={{ marginLeft: '86%', fontSize: '30px',marginBotoom:'20px' }}>
                            <a href="/indexAdmin" style={{ background: 'red' }}>
                                <i class="fas fa-arrow-alt-circle-left"></i>Go Back
                            </a>
                        </div>
                       
                        <Table>
                            <thead>
                                <tr className="text-primary" style={{fontSize:'20px'}}>
                                    <th>ID</th>
                                    <th>Name </th>
                                    <th>Job</th>
                                    <th>Image</th>
                                    <th>Action</th>

                                </tr>
                            </thead>

                            <tbody>
                                {this.state.leaders.map(leader =>
                                    <tr key={leader.id}>
                                        <td>{leader.id}</td>
                                        <td>{leader.name}</td>
                                        <td>{leader.job}</td>
                                        <td>
                                            <img
                                                src={"assets/images/My teacher/" + leader.image}
                                                width="200px"
                                                height="150px"
                                            ></img>
                                        </td>

                                        <td className="display=flex">
                                            <Link
                                                to={"/leader/" + leader.id + "/edit"}
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
                                                        this.deleteLeader(leader.id);
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

export default ListLeader;
