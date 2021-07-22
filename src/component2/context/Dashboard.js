import React, { Component } from 'react';
import LineChart from './LineChart';
import DonutChart from './DonutChart';
import BarChart from './BarChart';
import './Dashboard.css';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countdonater: 0,
      countpartner: 0,
      countsharing: 0,
      countleader: 0
    }
    this.getCountData();
  }
  getCountData() {
    fetch("http://localhost:8000/api/countdonater")
      .then(response => {
        response.json().then((data1) => {
          fetch("http://localhost:8000/api/countpartner")
            .then(response => {
              response.json().then((data2) => {
                fetch("http://localhost:8000/api/countsharing")
                  .then(response => {
                    response.json().then((data3) => {
                      fetch("http://localhost:8000/api/countleader")
                        .then(response => {
                          response.json().then((data4) => {
                            this.updateUI(data1, data2, data3, data4);
                          });
                        });
                    });
                  });
              });
            });
        });
      });
  }

  updateUI(data1, data2, data3, data4) {
    this.setState({
      countdonater: data1,
      countpartner: data2,
      countsharing: data3,
      countleader: data4
    })
  }
  render() {
    return (
      <div className="">
        <h1 style={{textAlign:'center', color:'#2b7a7a'}}>DASHBOARD OF PNV </h1>
        <div className="row" style={{marginLeft:'86%',height:'40px', fontSize:'30px'}}>
          <a href="/indexAdmin" style={{background:'red'}}>
          <i class="fas fa-arrow-alt-circle-left"></i>Go Back
          </a>
        </div>
        <div className="w3-quarter">
          <div className="w3-container w3-padding-16">
            <div className="well" style={{ background: '#DC143C', color: 'white' }}>
              <div className="well-data">
                <h3><i className="fas fa-users"></i> Total Donater</h3>
                <h1>{this.state.countdonater}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w3-quarter">
          <div className="w3-container w3-padding-16">
            <div className="well" style={{ background: '#1E90FF', color: 'white' }}>
              <div>
                <h3><i className="fas fa-newspaper"></i> Total Partner</h3>
                <h1>{this.state.countpartner}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w3-quarter">
          <div className="w3-container w3-padding-16">
            <div className="well" style={{ background: '#3CB371', color: 'white' }}>
              <div>
                <h3><i className="fas fa-comments"></i> Total Sharing</h3>
                <h1>{this.state.countsharing}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w3-quarter">
          <div className="w3-container w3-padding-16">
            <div className="well" style={{ background: '#FF8C00', color: 'white' }}>
              <div>
                <h3><i className="fas fa-list"></i> Total Leader</h3>
                <h1>{this.state.countleader}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <LineChart />
          </div>
          <div className="col-sm-4">
            <BarChart />
          </div>
          <div className="col-sm-4">
            <DonutChart />
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;