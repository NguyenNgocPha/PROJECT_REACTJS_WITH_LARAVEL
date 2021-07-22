import React, { Component } from "react";
import Chart from 'react-apexcharts';

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        }
      },
      series: [
        {
          name: "story",
          data: [0,0,0,0,0,0,0,0,0,0,0,0]
        }
      ]
    };

    this.getData();
  }

  getData(){
    fetch("http://localhost:8000/api/line-donater")
    .then(response => {
            response.json().then((data1) =>  {
            this.updateUI(data1);
        });
    });
    }
    updateUI(data1){
      this.setState({
        series: [
          {
            name: "total stories",
            data: data1
          }
        ]
      })
  }  

  render() {
    return (
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            width="500"  
            height="400"        
  />
    );
  }
}

export default LineChart;