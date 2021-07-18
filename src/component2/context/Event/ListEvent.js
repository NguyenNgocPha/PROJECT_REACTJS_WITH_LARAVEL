import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class ListEvent extends Component {
  constructor(props) {
    super(props);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  deleteEvent(e, id) {
    console.log(id);
    axios
      .delete('http://localhost:8000/api/event/' + id)
      .then((res) => {
        console.log('Event removed deleted!');
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
        <td>{this.props.obj.describe}</td>
        <td>{this.props.obj.year}</td>

        <td>
          <Link
            className="edit-link"
            to={'/admin/showEvent/editEvent/' + this.props.obj.id}
          >
            <Button size="sm" variant="info">
              Edit
            </Button>
          </Link>
          <Button
            onClick={(e) => this.deleteEvent(e, this.props.obj.id)}
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