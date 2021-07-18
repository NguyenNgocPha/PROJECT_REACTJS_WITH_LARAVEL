import React, { Component } from 'react';
import './Dashboard.css';
import { BrowserRouter as Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>DASHBOARD OF PNV</h1>
        <div className="w3-quarter">
          <div className="w3-container w3-padding-16">
            <div
              className="well"
              style={{ background: '#DC143C', color: 'white' }}
            >
              <div className="well-data">
                <h3>
                  <i className="fas fa-users"></i> Total Users
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w3-quarter">
          <div className="w3-container w3-padding-16">
            <div
              className="well"
              style={{ background: '#1E90FF', color: 'white' }}
            >
              <div>
                <h3>
                  <i className="fas fa-newspaper"></i> Total Staff
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w3-quarter">
          <div className="w3-container w3-padding-16">
            <div
              className="well"
              style={{ background: '#3CB371', color: 'white' }}
            >
              <div>
                <h3>
                  <i className="fas fa-comments"></i> Total Student
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w3-quarter">
          <div className="w3-container w3-padding-16">
            <div
              className="well"
              style={{ background: '#FF8C00', color: 'white' }}
            >
              <div>
                <h3>
                  <i className="fas fa-list"></i> Total comments
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <a href="/indexAdmin">
            <i className="fas fa-tachometer-alt"></i>Go Back
          </a>
        </div>
      </div>
    );
  }
}
export default Dashboard;
