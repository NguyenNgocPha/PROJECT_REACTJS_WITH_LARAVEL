import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListEvent from './ListEvent';
class ShowEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/event/')
      .then((res) => {
        this.setState({
          event: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.event.map((res, i) => {
      return <ListEvent obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="container">
        <h1>LIST Event</h1>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <h4 className="nameTable">
              <Link to="/admin/showEvent/add">Add Event</Link>
            </h4>
            <div className="table-wrapper">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Describe</th>
                    <th>Year</th>
                    <th>Action</th>
                   
                  </tr>
                </thead>
                <tbody>{this.DataTable()}</tbody>
              </Table>
            </div>
          </div>
        </div>
        {/* ----------------------------------------- */}
        </div>
    );
  }
}

export default ShowEvent;