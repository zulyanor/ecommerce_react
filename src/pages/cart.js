import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Header from "../components/header";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listCart: [],
            productId: 0,
            userId: 0,
            productName: "",
            quantity: 0,
            price: 0,
            totalPrice: 0,
            paymentMethod: "COD"
        };
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({ paymentMethod: event.target.value });
    };

    handleDelete = async id => {
        let config = {
            method: "delete",
            url: "https://api.zulyano.xyz/cart/" + String(id),
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        let response = await axios(config).catch(error => {
            console.log(error);
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
        await axios
            .get("https://api.zulyano.xyz/cart", {
                params: {},
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            .then(response => {
                this.setState({
                    listCart: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    doTransaction = async e => {
        e.preventDefault();
        const self = this;
        var config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        await axios
            .post(
                "https://api.zulyano.xyz/transaction",
                { payment_method: self.state.paymentMethod },
                config
            )
            .then(response => {
                Swal.fire(
                    "Good job!",
                    "Transaction has been processed",
                    "success"
                );
                this.props.history.push("/store");
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="cart-content">
                <Header />
                <div className="container cart">
                    <div className="row justify-content-center">
                        {this.state.listCart.map((item, index) => {
                            return (
                                <div className="col-md-12 col-sm-6 col-12 border shadow cart-list">
                                    <p>product id: {item.product_id}</p>
                                    <p>product name: {item.product_name}</p>
                                    <p>quantity: {item.qty}</p>
                                    <p>total price: {item.price}</p>
                                    <button
                                        className="btn remove-cart"
                                        onClick={() =>
                                            this.handleDelete(item.cart_id)
                                        }
                                    >
                                        Remove Item
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                    <div className="row checkout-section justify-content-left">
                        <div className="col-md-3">
                            <div className="payment-method">
                                <select
                                    className="browser-default custom-select"
                                    onChange={this.handleChange}
                                >
                                    <option selected value="COD">
                                        Cash on Delivery
                                    </option>
                                    <option value="ATM">ATM Transfer</option>
                                    <option value="Mbanking">
                                        Mobile Banking
                                    </option>
                                </select>
                            </div>
                            <Link to="/transaction">
                                <button
                                    type="submit"
                                    className="btn checkout-click"
                                    onClick={this.doTransaction}
                                >
                                    Chekout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
