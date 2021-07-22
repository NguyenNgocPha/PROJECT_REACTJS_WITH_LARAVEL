import React, { Component } from 'react';
import './Forgotpassword.css';
class ForgotPass extends Component {
    render() {
       return (
        <div className="container">
            <h4>Please enter your email address. You will receive a link to create a new password via email.</h4>
            <br/>
            <div class="form-group">
                <label for="email">Email*:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
            </div>
            <div class="form-group">
                <button type="button" className="form-control btn btn-warning">Get New Password</button>
            </div>
        </div>
       );
    }
 }
 export default ForgotPass;