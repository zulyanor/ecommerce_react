import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import Swal from "sweetalert2";
import plant from "../assets/img/plant.png";
import { actions } from "../store/store";

export class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            is_login: 0
        };
    }

    setUsername = event => {
        event.preventDefault();
        this.setState({ username: event.target.value });
    };

    setPassword = event => {
        event.preventDefault();
        this.setState({ password: event.target.value });
    };

    doLogin = async e => {
        e.preventDefault();
        const self = this;
        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 2000
        });
        await axios
            .post("https://api.zulyano.xyz/login", {
                username: self.state.username,
                password: self.state.password
            })
            .then(response => {
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
                console.log("props login", this.props.is_login);
                Toast.fire({
                    type: "success",
                    title: "You have been signed in!"
                });
                self.props.history.replace("/store");
            })
            .catch(error => {
                console.log(error);
            });
    };
    render() {
        console.log(this.state);
        return (
            <div className="sign-in-content w-100">
                <div className="container">
                    <div className=" row justify-content-center">
                        <div className="col-md-4 col-sm-12 m-auto text-center animated fadeInDownBig">
                            <form>
                                <div className="row justify-content-center text-center">
                                    <h1 className="">Sign In</h1>
                                </div>
                                <div className=" row justify-content-center text-center">
                                    <label for="username" className="">
                                        Username
                                    </label>
                                </div>

                                <div className="row justify-content-center text-center">
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="username"
                                        className="input-username"
                                        onChange={this.setUsername}
                                    />
                                </div>
                                <div className="row justify-content-center text-center">
                                    <label for="password" className="">
                                        Password
                                    </label>
                                </div>

                                <div className="row justify-content-center text-center">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        className="input-password"
                                        onChange={this.setPassword}
                                    />
                                </div>
                                <div className=" row justify-content-center text-center">
                                    <button
                                        type="submit"
                                        className="btn sign-in-click"
                                        onClick={this.doLogin}
                                    >
                                        Sign In
                                    </button>
                                    <button type="reset" className="btn">
                                        Reset
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-8 col-sm-12 m-0 text-right right-pic">
                            <img src={plant} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    "username, password, is_login, token",
    actions
)(withRouter(SignIn));
