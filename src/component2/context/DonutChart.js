import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [],
      labels: []
    }
    this.getData();
  }

  getData(){
    fetch("https://whispering-hollows-85804.herokuapp.com/api/admin/story-pie-chart")
    .then(response => {
            response.json().then((data1) =>  {
            this.updateUI(data1);
        });
    });
    }
    updateUI(data1){
    let story=[];
    let quantity=[];
    for(var i=0; i< data1.length;i++){
      story.push(data1[i].story_name);
      quantity.push(data1[i].total_quantity);
    }
      this.setState({
        series: quantity,
        labels: story
      })
  }  

  render() {

    return (
      <div className="donut">
        <h2>Stories In Wishlist</h2>
        <Chart options={this.state.options} series={this.state.series} type="donut" width="400" />
      </div>
    );
  }
}

export default Donut;
