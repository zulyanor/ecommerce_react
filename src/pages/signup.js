import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            email: null
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

    setEmail = event => {
        event.preventDefault();
        this.setState({ email: event.target.value });
    };

    setUserId = event => {
        event.preventDefault();
        this.setState({ user_id: event.target.value });
    };

    setFullName = event => {
        event.preventDefault();
        this.setState({ full_name: event.target.value });
    };

    setAddress = event => {
        event.preventDefault();
        this.setState({ address: event.target.value });
    };

    setSex = event => {
        event.preventDefault();
        this.setState({ sex: event.target.value });
    };

    setPhone = event => {
        event.preventDefault();
        this.setState({ phone: event.target.value });
    };

    doRegister = async event => {
        event.preventDefault();
        const self = this;
        const dataUser = {
            username: self.state.username,
            password: self.state.password,
            email: self.state.email,
            full_name: self.state.full_name,
            address: self.state.address,
            sex: self.state.sex,
            phone: self.state.phone,
            deleted: false
        };
        await axios
            .post("https://api.zulyano.xyz/register", dataUser)
            .then(response => {
                self.props.history.push("/signin");
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="sign-up-content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center sign-up-form animated fadeInDown">
                            <form className="register-form">
                                <div className="row justify-content-center text-center">
                                    <h1>Register</h1>
                                </div>
                                <div className="row justify-content-center text-center">
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
                                        required
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
                                        required
                                    />
                                </div>
                                <div className="row justify-content-center text-center">
                                    <label for="email" className="">
                                        Email
                                    </label>
                                </div>

                                <div className="row justify-content-center text-center">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        className="input-email"
                                        onChange={this.setEmail}
                                        required
                                    />
                                </div>
                                <div className="row justify-content-center text-center">
                                    <label for="full_name" className="">
                                        Full Name
                                    </label>
                                </div>
                                <div className="row justify-content-center text-center">
                                    <input
                                        type="text"
                                        name="full_name"
                                        placeholder="full_name"
                                        className="input-full_name"
                                        onChange={this.setFullName}
                                        required
                                    />
                                </div>
                                <div className="row justify-content-center text-center">
                                    <label for="address" className="">
                                        Address
                                    </label>
                                </div>

                                <div className="row justify-content-center text-center">
                                    <input
                                        type="address"
                                        name="address"
                                        placeholder="address"
                                        className="input-address"
                                        onChange={this.setAddress}
                                        required
                                    />
                                </div>
                                <div className="row justify-content-center text-center">
                                    <label for="sex" className="">
                                        Sex
                                    </label>
                                </div>
                                <div className="row justify-content-center text-center">
                                    <input
                                        type="sex"
                                        name="sex"
                                        placeholder="sex"
                                        className="input-sex"
                                        onChange={this.setSex}
                                        required
                                    />
                                </div>
                                <div className="row justify-content-center text-center">
                                    <label for="phone" className="">
                                        Phone Number
                                    </label>
                                </div>
                                <div className="row justify-content-center text-center">
                                    <input
                                        type="phone"
                                        name="phone"
                                        placeholder="phone"
                                        className="input-phone"
                                        onChange={this.setPhone}
                                        required
                                    />
                                </div>
                                <div className=" row justify-content-center text-center">
                                    <Link to="/post-detail">
                                        <button
                                            className="btn register-click"
                                            onClick={e => {
                                                this.doRegister(e);
                                            }}
                                        >
                                            Register Now!
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
