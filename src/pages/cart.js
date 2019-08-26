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
        console.log("pay", this.state.paymentMethod);
    };

    handleDelete = async id => {
        let config = {
            method: "delete",
            url: "http://0.0.0.0:5000/cart/" + String(id),
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        let response = await axios(config).catch(error => {
            console.log(error);
        });
        Swal.fire("Good job!", "Transaction has been processed", "success");
        this.props.history.push("/store");
        console.log(response.data);
    };

    componentDidMount = async () => {
        const self = this;
        await axios
            .get("http://0.0.0.0:5000/cart", {
                params: {},
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            .then(response => {
                console.log("get cart", response.data);
                console.log(this.state.paymentMethod);
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
                "http://0.0.0.0:5000/transaction",
                { payment_method: self.state.paymentMethod },
                config
            )
            .then(response => {
                console.log(response.data);
                Swal.fire(
                    "Good job!",
                    "Transaction has been processed",
                    "success"
                );
                console.log(this.props);
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
                    <div className="row">
                        {this.state.listCart.map((item, index) => {
                            console.log("item", item);
                            return (
                                <div className="col-md-12 col-sm-6 col-12 border shadow">
                                    <h3>product id: {item.product_id}</h3>
                                    <h3>product name: {item.product_name}</h3>
                                    <h3>quantity: {item.qty}</h3>
                                    <h3>total price: {item.price}</h3>
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
                    <div className="payment-method">
                        <select
                            className="browser-default custom-select"
                            onChange={this.handleChange}
                        >
                            <option selected value="COD">
                                Cash on Delivery
                            </option>
                            <option value="ATM">ATM Transfer</option>
                            <option value="Mbanking">Mobile Banking</option>
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
        );
    }
}

export default Cart;
