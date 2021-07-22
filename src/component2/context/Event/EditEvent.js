import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from 'sweetalert2';
export default class Edit_staff extends Component {
  constructor(props) {
    super(props);

    this.onChangeEventName = this.onChangeEventName.bind(this);
    this.onChangeEventDescribe = this.onChangeEventDescribe.bind(this);
    this.onChangeEventYear = this.onChangeEventYear.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      describe: '',
      year: '',
     
    };
  }

  async componentDidMount() {
    let id = parseInt(window.location.pathname.split('/').pop());
    axios
      .get('http://localhost:8000/api/event/')
      .then((res) => {
        let event = res.data.find((event) => event.id == id);
        if (event) {
          this.setState({
            name: event.name,
            describe: event.describe,
            year: event.year,
           
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

  onChangeEventDescribe(e) {
    this.setState({ describe: e.target.value });
  }

  onChangeEventYear(e) {
    this.setState({ year: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const eventObject = {
      name: this.state.name,
      describe: this.state.describe,
      year: this.state.year,
    
    };
    console.log(eventObject);
    let id = parseInt(window.location.pathname.split('/').pop());
    axios
      .put('http://localhost:8000/api/event/' + id, eventObject)
      .then((res) => {
        console.log(res.data);
        console.log('Event successfully updated');
        Swal.fire('Good job!', 'Event Added Successfully', 'success');
      })
      .catch((error) => {
        console.log(error);
      });
    // Redirect to Expense List
    // this.props.history.replace('/StaffTable');
  }

  render() {
    return (
      <form className="new-lead-form border" onSubmit={this.onSubmit}>
      <div className="form-group">
        <ul className="nav nav-tabs nav-pills c--nav-pills nav-justified">
          <li className="nav-item">
            <span className="nav-link btn btn-gradient-primary btn-block active">NEW EVENT</span>
          </li>
        </ul>
      </div>
      <div className="form-group">
        <label>Name Event</label>
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text bg-gradient-success text-white">
              <i className="mdi mdi-account"></i>
            </span>
          </div>
          <input type="text" className="form-control form-control-sm" id="name" name="name" placeholder="Name"
            value={this.state.name}  onChange={this.onChangeEventName} />
        </div>
      </div>
      <div className="form-group">
        <label>Describe</label>
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text bg-gradient-success text-white">
              <i className="mdi mdi-email"></i>
            </span>
          </div>
          <input type="text" className="form-control form-control-sm" id="describe" name="describe" placeholder="Describe" value={this.state.describe} onChange={this.onChangeEventDescribe} />
        </div>  
      </div>
      <div className="form-group">
        <label>Year</label>
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text bg-gradient-success text-white">
              <i className="mdi mdi-phone"></i>
            </span>
          </div>
          <input type="number" className="form-control form-control-sm" id="year" name="year" placeholder="Year" value={this.state.year} onChange={this.onChangeEventYear} />
        </div>
      </div>
      {/* <div className="form-group">
        <label>Address</label>
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text bg-gradient-success text-white">
              <i className="mdi mdi-home"></i>
            </span>
          </div>
          <input type="text" className="form-control form-control-sm" id="address" name="address" placeholder="Address" value={state.address} onChange={onChangeHandle} />
        </div>
      </div>
      <div className="form-group">
        <label>Description</label>
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text bg-gradient-success text-white">
              <i className="mdi mdi-pencil"></i>
            </span>
          </div>
          <textarea className="form-control form-control-sm" id="description" name="description" placeholder="Description" value={state.description} onChange={onChangeHandle}></textarea>
        </div>
      </div>
      <div className="form-group">
        <hr />
      </div>
      <div className="form-group"> 
        <label>Progress</label>
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text bg-gradient-success text-white">
              <i className="mdi mdi-music-note-whole"></i>
            </span>
          </div>
          <input type="range" min="0" max="100" className="custom-range form-control form-control-sm" id="progress" name="progress" value={state.progress} onChange={onChangeHandle} />
        </div>
      </div>*/}
      <div className="form-group text-center">
        <button type="submit" className="btn btn-gradient-primary btn-md mr-2">Save</button>
        {/* <Link to='' className="btn btn-inverse-secondary btn-md">Cancel</Link> */}
      </div>
    </form>
       
    );
  }
}
