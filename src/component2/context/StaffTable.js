import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Table.css';
class Table extends React.Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeStaffName = this.onChangeStaffName.bind(this);
    this.onChangeStaffAddress = this.onChangeStaffAddress.bind(this);
    this.onChangeStaffEmail = this.onChangeStaffEmail.bind(this);
    this.onChangeStaffPhone = this.onChangeStaffPhone.bind(this);
    this.onChangeStaffGender = this.onChangeStaffGender.bind(this);
    this.onChangeStaffJob_position = this.onChangeStaffJob_position.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      address: '',
      email: '',
      phone: '',
      gender: '',
      job_position: '',
    };
  }

  onChangeStaffName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeStaffAddress(e) {
    this.setState({ address: e.target.value });
  }

  onChangeStaffEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeStaffPhone(e) {
    this.setState({ phone: e.target.value });
  }

  onChangeStaffGender(e) {
    this.setState({ gender: e.target.value });
  }

  onChangeStaffJob_position(e) {
    this.setState({ job_position: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const staff = {
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      phone: this.state.phone,
      gender: this.state.gender,
      job_position: this.state.job_position,
    };
    axios
      .post('http://localhost:8000/api/staff/', staff)
      .then((res) => console.log(res.data));
    // console.log(`Expense successfully created!`);
    // console.log(`Name: ${this.state.name}`);
    // console.log(`Amount: ${this.state.amount}`);
    // console.log(`Description: ${this.state.description}`);
    Swal.fire('Good job!', 'Expense Added Successfully', 'success');

    this.setState({
      name: '',
      address: '',
      email: '',
      phone: '',
      gender: '',
      job_position: '',
    });
  }

  render() {
    return (
      <div className="form-wrapper">
        <div className="container">
        
               
                  
               
          
          <Form onSubmit={this.onSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="Name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.name}
                    onChange={this.onChangeStaffName}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="Address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.address}
                    onChange={this.onChangeStaffAddress}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="Email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.email}
                    onChange={this.onChangeStaffEmail}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="Phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="number"
                    value={this.state.phone}
                    onChange={this.onChangeStaffPhone}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="Gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.gender}
                    onChange={this.onChangeStaffGender}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="Job_position">
                  <Form.Label>Job_position</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.job_position}
                    onChange={this.onChangeStaffJob_position}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" size="lg" block="block" type="submit">
              Add Staff
            </Button>
          </Form>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}

export default Table;
