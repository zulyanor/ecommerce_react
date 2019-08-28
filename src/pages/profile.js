import React from "react";
import axios from "axios";
import { connect } from "unistore/react";
import { Link } from "react-router-dom";
import scrollToComponent from "react-scroll-to-component";
import Swal from "sweetalert2";
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

    handleDelete = async id => {
        let config = {
            method: "delete",
            url: "https://api.zulyano.xyz/product/" + String(id),
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        let response = await axios(config).catch(error => {
            console.log("error user_details", error);
        });
        Swal.fire({
            type: "error",
            title: "Success",
            text: "Product deleted"
        });
        this.props.history.push("/store");
    };

    componentDidMount = async () => {
        const self = this;
        var config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        await axios
            .get("https://api.zulyano.xyz/user_details", config)
            .then(response => {
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
            .get("https://api.zulyano.xyz/transaction/list", config)
            .then(response => {
                this.setState({ transactionList: response.data });
            })
            .catch(error => {
                console.log(error);
            });

        await axios
            .get("https://api.zulyano.xyz/product/user", config)
            .then(response => {
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
                        <h3 className="animated fadeInDown">
                            Welcome, {this.state.full_name}
                        </h3>
                        <div className="col-md-12 user-detail animated fadeInDown delay-1s">
                            <div className="row profile-detail">
                                <div className="col-md-3 avatar-profil">
                                    <div className="mx-3">
                                        <img
                                            src={Avatar}
                                            height="200px"
                                            width="200px"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 text-center">
                                    <div className="user-data">
                                        <div className="data-address">
                                            <h4>address:</h4>
                                            <h6>{this.state.address}</h6>
                                        </div>
                                        <div className="data-sex">
                                            <h4>sex:</h4>
                                            <h6>{this.state.sex}</h6>
                                        </div>
                                        <div className="data-phone">
                                            <h4>phone:</h4>
                                            <h6>{this.state.phone}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 profile-button">
                                    <div className="button-transaction">
                                        <button
                                            className="btn"
                                            onClick={() =>
                                                scrollToComponent(
                                                    this.Transection,
                                                    {
                                                        offset: 0,
                                                        align: "top",
                                                        duration: 1000
                                                    }
                                                )
                                            }
                                        >
                                            See my transactions
                                        </button>
                                    </div>
                                    <div className="button-item">
                                        <button
                                            className="btn"
                                            onClick={() =>
                                                scrollToComponent(
                                                    this.Prodsection,
                                                    {
                                                        offset: 0,
                                                        align: "top",
                                                        duration: 1000
                                                    }
                                                )
                                            }
                                        >
                                            See my items
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row justify-content-center">
                            <div
                                className="transaction-section col-12"
                                ref={section => {
                                    this.Transection = section;
                                }}
                            >
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
                            <div
                                className="product-section col-12"
                                ref={section => {
                                    this.Prodsection = section;
                                }}
                            >
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
                                                    <button
                                                        onClick={() =>
                                                            this.handleDelete(
                                                                item.product_id
                                                            )
                                                        }
                                                        className="delete-product btn"
                                                    >
                                                        delete
                                                    </button>
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
