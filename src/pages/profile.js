import React from "react";
import axios from "axios";
import { connect } from "unistore/react";
import { Link } from "react-router-dom";
import scrollToComponent from "react-scroll-to-component";
import Avatar from "../assets/img/man.png";
import Header from "../components/header";
import { actions } from "../store/store";
import TransactionDisplay from "../components/transaction";

export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: 0,
            full_name: "",
            address: "",
            sex: "",
            phone: "",
            transactionList: [],
            productList: []
        };
    }

    setFullName = event => {
        event.preventDefault();
        console.log("full_name", event.target.value);
        this.setState({ full_name: event.target.value });
    };

    setAddress = event => {
        event.preventDefault();
        console.log("address", event.target.value);
        this.setState({ address: event.target.value });
    };

    setSex = event => {
        event.preventDefault();
        console.log("sex", event.target.value);
        this.setState({ sex: event.target.value });
    };

    setPhone = event => {
        event.preventDefault();
        console.log("phone", event.target.value);
        this.setState({ phone: event.target.value });
    };

    componentDidMount = async () => {
        const self = this;
        var config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        await axios
            .get("http://0.0.0.0:5000/user_details", config)
            .then(response => {
                console.log("get user_details", response.data);
                this.setState({
                    full_name: response.data.full_name,
                    address: response.data.address,
                    sex: response.data.sex,
                    phone: response.data.phone
                });
            })
            .catch(error => {
                console.log("error user_details", error);
            });

        await axios
            .get("http://0.0.0.0:5000/transaction/list", config)
            .then(response => {
                console.log("trans", response.data);
                this.setState({ transactionList: response.data });
            })
            .catch(error => {
                console.log(error);
            });

        await axios
            .get("http://0.0.0.0:5000/product/user", config)
            .then(response => {
                console.log("product user", response.data);
                this.setState({ productList: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row justify-content-center profile-content">
                        <div className="col-md-8 text-center user-detail">
                            <h3>Welcome, {this.state.full_name}</h3>
                            <div className="avatar-profil mx-3">
                                <img
                                    src={Avatar}
                                    height="200px"
                                    width="200px"
                                />
                            </div>
                            <div className="user-detail text-center">
                                <div className="">
                                    <h4>address:</h4>
                                    <h6>{this.state.address}</h6>
                                </div>
                                <div className="">
                                    <h4>sex:</h4>
                                    <h6>{this.state.sex}</h6>
                                </div>
                                <div className="">
                                    <h4>phone:</h4>
                                    <h6>{this.state.phone}</h6>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row justify-content-center">
                            <div className="transaction-section col-12">
                                <h2>Transaction History</h2>
                                <div>
                                    {this.state.transactionList.map(
                                        (transaction, index) => {
                                            return (
                                                <div className="col-md-12 col-sm-6 col-12 border shadow transaction-user-list">
                                                    <Link
                                                        to={
                                                            "/transaction-details/" +
                                                            transaction.transaction_id
                                                        }
                                                        style={{
                                                            textDecoration:
                                                                "none",
                                                            color: "black"
                                                        }}
                                                    >
                                                        <TransactionDisplay
                                                            paymentMethod={
                                                                transaction.payment_method
                                                            }
                                                            totalPrice={
                                                                transaction.total_price
                                                            }
                                                            transID={
                                                                transaction.transaction_id
                                                            }
                                                            index={index}
                                                        />
                                                    </Link>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                            <div className="product-section col-12">
                                <h2>Your item list</h2>
                                <div>
                                    {this.state.productList.map(
                                        (item, index) => {
                                            return (
                                                <div className="col-md-12 col-sm-6 col-12 border shadow item-user-list text-center">
                                                    <div>
                                                        name:{" "}
                                                        {item.product_name}
                                                    </div>
                                                    <div>
                                                        <img
                                                            src={
                                                                item.product_img_url
                                                            }
                                                            width="150px"
                                                            height="150px"
                                                        ></img>
                                                    </div>
                                                    <div>
                                                        price:{" "}
                                                        {item.product_price}
                                                    </div>
                                                    <div>
                                                        stock:{" "}
                                                        {item.product_stock}
                                                    </div>
                                                    <button>delete</button>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    "token, email",
    actions
)(Profile);
