import React, { Component } from 'react';
import './Profile.css';
class Profile extends Component {
  render() {

    return (

      <div className="container">
      <a className="btn" href="/indexAdmin"> Go Back </a>
        <h1>YOUR PROFILE </h1>
        <hr />
        <div className="row">
          <div className="col-lg-5 col-sm-6">
            <div className="card hovercard">
              <div className="cardheader"></div>
              <div className="avatar">
                <img
                  alt=""
                  src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                />
              </div>
              <div className="info">
                <div className="title">
                  <b>Lê Ngọc Vĩ</b>
                </div>
                <br />
                <div className="desc">
                  <p>Administrator</p>
                </div>
                <br />
                <div className="desc">
                  <i>
                    "I like the way you work it <br />
                    No diggity
                    <br />I wanna bag it up"
                  </i>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-sm-6"></div>
          <div className="col-lg-6 col-sm-6">
            <h3>Edit Profile </h3>
            <form action="/action_page.php">
              <div className="form-group">
                <label for="name">Name:</label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label for="email" className="labelPro">
                  Email:
                </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>
              <div className="form-group">
                <label for="avatar">Avartar:</label>
                <br />
                <input
                  type="file"
                  className="form-control"
                  id="avatar"
                  placeholder="Enter your avatar"
                  name="avatar"
                />
              </div>
              <button type="submit" className="btn btn-warning">
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
