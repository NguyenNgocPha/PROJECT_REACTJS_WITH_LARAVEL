import React, { Component } from 'react';
import './Sidebar.css';
import { elastic as Menu } from 'react-burger-menu';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <Menu>
        <Router>
          <nav
            id="sidebar"
            className="w3-sidebar w3-collapse w3-dark w3-animate-left"
          >
            <br></br>
            <ul className="list-unstyled components">
              <li>
                <div className="w3-container w3-row">
                  <div className="w3-container">
                    <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />
                  </div>
                  <div className="w3-container">
                    <h5>Ngọc Vĩ</h5>
                  </div>
                </div>
                <hr />
              </li>
              <li>
                <div className="w3-bar-block">
                  <Link to="/indexAdmin/dashboard">
                    <i className="fas fa-tachometer-alt"></i>Dashboard
                  </Link>
                </div>
                <hr />
              </li>
              <li>
                <div className="w3-bar-block">
                  <Link to="/admin/listTable">
                    <i className="fa fa-list" aria-hidden="true"></i>List Staff
                  </Link>
                </div>
                <hr />
              </li>
              <li>
                <div className="w3-bar-block">
                  <Link to="/admin/profile">
                    <i className="fas fa-user"></i>Profile
                  </Link>
                </div>
                <hr />
              </li>
              <li>
                <div className="w3-bar-block">
                  <Link to="/admin/showEvent">
                    <i className="fas fa-user"></i>Event
                  </Link>
                </div>
                <hr />
              </li>
              <li>
                <div className="w3-bar-block">
                  <Link to="/admin/ListPartner">
                    <i className="fas fa-user"></i>Partner
                  </Link>
                </div>
                <hr />
              </li>
              <li>
                <div className="w3-bar-block">
                  <button data-toggle="modal" data-target=".bs-example-modal-sm">
                    <i className="fas fa-sign-out-alt"></i>Logout
                  </button>
                </div>
                <hr />
              </li>
            </ul>
          </nav>
        </Router>
      </Menu>
    );
  }
}
