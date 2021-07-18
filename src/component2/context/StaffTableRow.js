import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class StaffTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteStaff = this.deleteStaff.bind(this);
  }

  deleteStaff(e, id) {
    console.log(id);
    axios
      .delete('http://localhost:8000/api/staff/' + id)
      .then((res) => {
        console.log('Expense removed deleted!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.id}</td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.address}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.phone}</td>
        <td>{this.props.obj.gender}</td>
        <td>{this.props.obj.job_position}</td>

        <td>
          <Link
            className="edit-link"
            to={'/admin/listTable/edit_staff/' + this.props.obj.id}
          >
            <Button size="sm" variant="info">
              Edit
            </Button>
          </Link>
          <Button
            onClick={(e) => this.deleteStaff(e, this.props.obj.id)}
            size="sm"
            variant="danger"
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
