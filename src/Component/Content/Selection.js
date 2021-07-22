import React, { Component } from "react";
import axios from "axios";

export default class Selection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: [],
      name: "",
      age: "",
      phone: "",
      address: "",
      school: "",
      email: "",
      errors: {
        name: [""],
        age: [""],
        phone: [""],
        address: [""],
        school: [""],
        email: [""],
      },
    };
  }

  componentDidMount() {
    axios
      .get(`http://127.0.0.1:8000/api/selection`)
      .then((res) => {
        const selection = res.data;
        this.setState({ selection });
      })
      .catch((error) => console.log(error));
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeAge = (e) => {
    this.setState({ age: e.target.value });
  };

  onChangeSchool = (e) => {
    this.setState({ school: e.target.value });
  };

  onChangeAddress = (e) => {
    this.setState({ address: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangePhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  handleAddSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("name", this.state.name);
    formData.append("phone", this.state.phone);
    formData.append("age", this.state.age);
    formData.append("address", this.state.address);
    formData.append("school", this.state.school);

    axios({
      method: "POST",
      data: formData,
      url: "http://127.0.0.1:8000/api/selection",
    }).then((response) => {
      if (response.status === 200) {
        alert("Bạn đã đăng ký thành công");
      }
    });
    console.log();
  };
  render() {
    return (
      <div>
        <section id="selection" className="testimonial-area">
          <div className="container">
            <div className="section-title pb-50">
              <h3 className="title text-center">
                <strong>SELECTION</strong>
              </h3>
              <div className="col-lg-12">
                <div className="pb-10">
                  Each year, from January to August, Passerelles numériques
                  Vietnam’s selection team completes a rigorous, four-step process
                  to select talented and motivated underprivileged youths from
                  seven provinces in Central Vietnam: Quảng Bình, Quảng Trị, Đà
                  Nẵng, Quảng Nam, Quảng Ngãi, Kon Tum, Bình Định.
                </div>

                <div className="pb-10">
                  PN Vietnam collaborates with Study Promotion Associations (SPAs)
                  from each province, who introduce us to local high schools, and
                  facilitate the process in accordance with local laws and
                  customs.
                </div>

                <div className="pb-10">
                  A special effort is made to include at least 50% young women in
                  each class. Beyond that, priority is given to the poorest
                  students irrespective of sex or gender identity.
                </div>
              </div>

              <div  className="training">
                <div className="col-md-6">
                  <h3>Training and education program</h3>
                  <p>A solid technical and practical 3-year training in Software Development & Testing</p>
                  <p>A general training in professional skills</p>
                  <p>Social and educational development</p>
                </div>

                <div id="curricula" className="col-md-6">
                  <h3>The full curricula include:</h3>
                  <ul className="ul-training" style={{listStyleType: 'disc'}}>
                    <li>50% IT theory & practice</li>
                    <li>25% English</li>
                    <li>25% Soft skills</li>
                    <li>Two internships</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container-selection">
              <div className="col-md-6">
                <div className="form_selection">
                  <center><h3>Please complete the form to apply for selection online</h3></center><br />
                  <form onSubmit={this.handleAddSubmit} encType="multipart/form-data" method="post">
                    <div className="form-group">
                      <label htmlFor="name">Full Name:</label>
                      <input
                        type="name"
                        className="form-control"
                        id="name"
                        placeholder="Enter full name"
                        name="name"
                        onChange={this.onChangeName}
                      />
                    </div>
                    <div className="phone-age">
                      <div className="col-md-6">
                        <label className="age" htmlFor="age">Birthday:</label>
                        <input
                          type="age"
                          className="form-control"
                          id="age"
                          placeholder="Enter your birthday"
                          name="age"
                          onChange={this.onChangeAge}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="phone" htmlFor="phone">Phone:</label>
                        <input
                          type="phone"
                          className="form-control"
                          id="phone"
                          placeholder="Enter phone"
                          name="phone"
                          onChange={this.onChangePhone}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="school">School name:</label>
                      <input
                        type="school"
                        className="form-control"
                        id="school"
                        placeholder="Enter school name"
                        name="school"
                        onChange={this.onChangeSchool}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address:</label>
                      <input
                        type="address"
                        className="form-control"
                        id="address"
                        placeholder="Enter address"
                        name="address"
                        onChange={this.onChangeAddress}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={this.onChangeEmail}
                      />
                    </div><br />
                    <div className="phone-age">
                      <div className="col-md-6 form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                          />{" "}
                          Remember me
                        </label>
                      </div> <br />
                      <div className="btnSelection"><button type="submit" className="btn btn-primary">
                        Submit
                      </button></div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-selection">
                  <img src="assets/images/Selection/selection_online.png"></img>
                </div>
              </div>
            </div>

            {/* <div className="head">
                <div className="w3-padding w3-yellow w3-text-black w3-circle w3-center ">
                  <h6>Trust</h6>
                </div>
              </div>
              <div className="valueCenter">
                <div className="left">
                  <div className="w3-padding w3-green w3-text-black w3-circle w3-center">
                    <h6>Responsibility</h6>
                  </div>
                </div>
                <div className="article">
                  <div className="w3-padding-32 w3-blue w3-circle w3-center">
                    <h2>Our</h2>
                    <h2>Values</h2>
                  </div>
                </div>
                <div className="right">
                  <div className="w3-padding w3-orange w3-text-black w3-circle w3-center">
                    <h6>Solidarity</h6>
                  </div>
                </div>
              </div>
              <div className="foote">
                <div className="foot">
                  <nav>
                    <div className="w3-padding w3-purple w3-text-black w3-circle w3-center">
                      <h6>Respect</h6>
                    </div>
                  </nav>

                  <nav>
                    <div className="w3-padding w3-pink w3-text-black w3-circle w3-center">
                      <h6>Demanding approach</h6>
                    </div>
                  </nav>
                </div>
              </div> */}
          </div>
        </section>
      </div>
    );
  }
}
