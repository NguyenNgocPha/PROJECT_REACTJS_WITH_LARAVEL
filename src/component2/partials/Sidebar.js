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
                  <a href="/dashboard">
                    <i className="fas fa-tachometer-alt"></i>Dashboard
                  </a>
                </div>
                <hr />
              </li>
              <li>
                <div className="w3-bar-block">
                  <a href="/partner">
                  <i className="fas fa-building"></i>List Partner
                  </a>
                </div>
                <hr />
              </li>
              <li>
                <div className="w3-bar-block">
                  <a href="/sharing">
                    <i className="fas fa-user"></i>List Sharing
                  </a>
                </div>
                <hr />
              </li>
              <li>
                <div className="w3-bar-block">
                  <a href="/leader">
                  <i className="fas fa-chalkboard-teacher"></i>List Leader
                  </a>
                </div>
                <hr />
              </li>
              <li>
                <div className="w3-bar-block">
                  <a href="/discover">
                  <i class="fab fa-cc-discover"></i>List Discovers
                  </a>
                </div>
                <hr />
              </li>
              <li>
                <div className="w3-bar-block">
                  <a href="/campaign">
                  <i class="fas fa-play"></i>List Campaign
                  </a>
                </div>
                <hr />
              </li>
           
              <li>
                <div className="w3-bar-block">
                  <a href="/donater">
                  <i class="fas fa-donate"></i>List Donater
                  </a>
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
