import React from 'react';
import './Table.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import StaffTableRow from './StaffTableRow';
import 'bootstrap/dist/css/bootstrap.min.css';
class ListTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/staff/')
      .then((res) => {
        this.setState({
          staff: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.staff.map((res, i) => {
      return <StaffTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="container">
        <h1>LIST TABLES </h1>
        <hr />
        <nav aria-label="breadcrumb"><a class="btn btn-social-icon-text btn-linkedin" href="/admin"><i class="fas fa-backward"></i>&nbsp; Back</a></nav>
        <div className="row">
          <div className="col-3">

            <div className="input-group-prepend">
              <span className="input-group-text">Display</span>
            </div>
            <select className="form-control form-control-sm btn btn-primary">
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="500">500</option>
            </select>

          </div>
          <div className="col-3">
            <div className="input-group-left" >
              <div className="input-group-prepend">
                <span className="input-group-text">Sort By</span>
              </div>
              <select className="form-control form-control-sm btn btn-success">
                <option value="created_at">Created</option>
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="progress">Progress</option>
                <option value="net">Net</option>
              </select>
            </div>
          </div>
          <div className="col-5" >
            <div className="input-group">
              <input type="search" className="form-control form-control-sm" placeholder="Search Here" />
              <div className="input-group-append">
                <button className="btn btn-sm btn-gradient-primary" type="submit">Search</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h4 className="nameTable">
              <Link to="/admin/listTable/StaffTable">Add Staff</Link>
            </h4>
            <div className="table-wrapper">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Job</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{this.DataTable()}</tbody>
              </Table>
            </div>
          </div>
        </div>
        {/* ----------------------------------------- */}
        <div className="row">
          <div className="col-md-12">
            <h4 className="nameTable">
              <Link to="/admin/listTable/commentsTable">Comments Table</Link>
            </h4>
            <table className="table table-bordered">
              <thead>
                <tr className="table-warning">
                  <th>ID</th>
                  <th>User</th>
                  <th>Story</th>
                  <th>Content</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
        {/* --------------------------------------------- */}
        <div className="row">
          <div className="col-md-12">
            <h4 className="nameTable">
              <Link to="/admin/listTable/usersTable">Users Table</Link>
            </h4>
            <table className="table table-bordered">
              <thead>
                <tr className="table-warning">
                  <th>ID</th>
                  <th>Avatar</th>
                  <th>Full name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTable;
