import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from 'sweetalert2';
export default class Edit_staff extends Component {
  constructor(props) {
    super(props);

    this.onChangeStaffName = this.onChangeStaffName.bind(this);
    this.onChangeStaffAddress = this.onChangeStaffAddress.bind(this);
    this.onChangeStaffEmail = this.onChangeStaffEmail.bind(this);
    this.onChangeStaffPhone = this.onChangeStaffPhone.bind(this);
    this.onChangeStaffGender = this.onChangeStaffGender.bind(this);
    this.onChangeStaffJob_position = this.onChangeStaffJob_position.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      id: '',
      name: '',
      address: '',
      email: '',
      phone: '',
      gender: '',
      job_position: '',
    };
  }

  async componentDidMount() {
    let id = parseInt(window.location.pathname.split('/').pop());
    axios
      .get('http://localhost:8000/api/staff/')
      .then((res) => {
        let staff = res.data.find((staff) => staff.id == id);
        if (staff) {
          this.setState({
            name: staff.name,
            address: staff.address,
            email: staff.email,
            phone: staff.phone,
            gender: staff.gender,
            job_position: staff.job_position,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
    const staffObject = {
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      phone: this.state.phone,
      gender: this.state.gender,
      job_position: this.state.job_position,
    };
    console.log(staffObject);
    let id = parseInt(window.location.pathname.split('/').pop());
    axios
      .put('http://localhost:8000/api/staff/' + id, staffObject)
      .then((res) => {
        console.log(res.data);
        console.log('Staff successfully updated');
        Swal.fire('Good job!', 'Expense Added Successfully', 'success');
      })
      .catch((error) => {
        console.log(error);
      });
    // Redirect to Expense List
    // this.props.history.replace('/StaffTable');
  }

  render() {
    return (
      <div className="form-wrapper">
        <div className="container">
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={this.state.name}
                onChange={this.onChangeStaffName}
              />
            </Form.Group>

            <Form.Group controlId="Address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={this.state.address}
                onChange={this.onChangeStaffAddress}
              />
            </Form.Group>

            <Form.Group controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={this.state.email}
                onChange={this.onChangeStaffEmail}
              />
            </Form.Group>

            <Form.Group controlId="Phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                value={this.state.phone}
                onChange={this.onChangeStaffPhone}
              />
            </Form.Group>

            <Form.Group controlId="Gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                value={this.state.gender}
                onChange={this.onChangeStaffGender}
              />
            </Form.Group>

            <Form.Group controlId="Job_position">
              <Form.Label>Job_position</Form.Label>
              <Form.Control
                type="text"
                value={this.state.job_position}
                onChange={this.onChangeStaffJob_position}
              />
            </Form.Group>

            <Button variant="danger" size="lg" block="block" type="submit">
              Update staff
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
