import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import cookie from 'react-cookies';
import Sidebar from '../partials/Sidebar';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }

    }

    onChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    onChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    onLogin = (e) => {
        e.preventDefault();
        let form = new FormData();
        form.append("email", this.state.email);
        form.append("password", this.state.password);
        axios.post("http://127.0.0.1:8000/api/loginAdmin", form).then((reponse) => {
            console.log(reponse.data);
            if (reponse.data.success == 1) {
                cookie.save("user", reponse.data.user);
                alert("Login success!");
                window.location.href = "http://localhost:3000/indexAdmin";
            } else {
                this.setState({
                    err: reponse.data.errors,
                });
            }
        });
    }

    render() {
        return (
            <div className="formLogin">
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img src="./Image/logo.png" id="icon" alt="" />
                        </div>
                        <form onSubmit={this.onLogin} encType="multipart/form-data" method="post">
                            <input type="email" name="email" placeholder="Enter email" onChange={this.onChangeEmail} className="fadeIn second" required />
                            <input type="password" name="password" placeholder="Enter password" onChange={this.onChangePassword} className="fadeIn third" required />
                            <br />
                            <button type="submit" className="btn-login">Log In</button>
                        </form>
                        <div id="formFooter">
                            <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
