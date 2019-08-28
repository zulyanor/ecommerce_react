import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../components/header";

export class Sell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            stock: null,
            price: null,
            image: null,
            description: null,
            location: null,
            weight: null
        };
    }

    setName = event => {
        event.preventDefault();
        console.log("name", event.target.value);
        this.setState({ name: event.target.value });
    };

    setStock = event => {
        event.preventDefault();
        console.log("stock", event.target.value);
        this.setState({ stock: event.target.value });
    };

    setPrice = event => {
        event.preventDefault();
        console.log("price", event.target.value);
        this.setState({ price: event.target.value });
    };

    setImage = event => {
        event.preventDefault();
        console.log("img", event.target.value);
        this.setState({ image: event.target.value });
    };

    setLocation = event => {
        event.preventDefault();
        console.log("img", event.target.value);
        this.setState({ location: event.target.value });
    };

    setDescription = event => {
        event.preventDefault();
        console.log("desc", event.target.value);
        this.setState({ description: event.target.value });
    };

    setWeight = event => {
        event.preventDefault();
        console.log("img", event.target.value);
        this.setState({ weight: event.target.value });
    };

    doSell = async event => {
        event.preventDefault();
        const self = this;
        const dataItem = {
            product_name: self.state.name,
            product_stock: self.state.stock,
            product_price: self.state.price,
            product_img_url: self.state.image,
            description: self.state.description,
            location: self.state.location,
            weight: self.state.weight
        };
        var config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        await axios
            .post("https://api.zulyano.xyz/product", dataItem, config)
            .then(response => {
                console.log(response.data);
                Swal.fire("Good job!", "Product(s) added to store!", "success");
                this.props.history.push("/store");
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="post-product">
                <Header />
                <div className="post-product-content">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 text-center post-product-form animated fadeInDown">
                                <form className="sell-form">
                                    <div className="row justify-content-center text-center">
                                        <h1>Sell your plant now!</h1>
                                    </div>
                                    <div className="row justify-content-center text-center">
                                        <label for="name">
                                            Your product name
                                        </label>
                                    </div>
                                    <div className="row justify-content-center text-center">
                                        <input
                                            type="text"
                                            name="product-name"
                                            placeholder="product name"
                                            className="input-name"
                                            onChange={this.setName}
                                            required
                                        />
                                    </div>
                                    <div className="row justify-content-center text-center">
                                        <label for="stock">Product Stock</label>
                                    </div>
                                    <div className="row justify-content-center text-center">
                                        <input
                                            type="number"
                                            name="product-stock"
                                            placeholder="product stock"
                                            className="input-stock"
                                            onChange={this.setStock}
                                            required
                                        />
                                    </div>
                                    <div className="row justify-content-center text-center">
                                        <label for="name">
                                            Your product price
                                        </label>
                                    </div>
                                    <div className="row justify-content-center text-center">
                                        <input
                                            type="number"
                                            name="product-price"
                                            placeholder="product price"
                                            className="input-price"
                                            onChange={this.setPrice}
                                            required
                                        />
                                    </div>
                                    <div className="row justify-content-center text-center">
                                        <label for="name">Location</label>
                                    </div>
                                    <div className="row justify-content-center text-center">
                                        <input
                                            type="text"
                                            name="product-loc"
                                            placeholder="location"
                                            className="input-loc"
                                            onChange={this.setLocation}
                                            required
                                        />
                                    </div>
                                    <div className="row justify-content-center text-center">
                                        <label for="name">
                                            Your product weight
                                        </label>
                                    </div>
                                    <div className="row justify-content-center text-center">
                                        <input
                                            type="number"
                                            name="product-weight"
                                            placeholder="product weight"
                                            className="input-weight"
                                            onChange={this.setWeight}
                                            required
                                        />
                                    </div>
                                    <div className="row justify-content-center text-center">
                                        <label for="name">
                                            Your product image url
                                        </label>
                                    </div>
                                    <div className="row justify-content-center text-center">
                                        <input
                                            type="text"
                                            name="product-img"
                                            placeholder="product image"
                                            className="input-img"
                                            onChange={this.setImage}
                                            required
                                        />
                                    </div>
                                    <div className="row justify-content-center text-center">
                                        <label for="name">
                                            Your product description
                                        </label>
                                    </div>
                                    <div className="row justify-content-center text-center">
                                        <input
                                            type="text"
                                            name="description"
                                            placeholder="product description"
                                            className="input-img"
                                            onChange={this.setDescription}
                                            required
                                        />
                                    </div>
                                    <div className=" row justify-content-center text-center">
                                        <Link to="">
                                            <button
                                                className="btn sell-click"
                                                onClick={e => {
                                                    this.doSell(e);
                                                }}
                                            >
                                                Sell Now!
                                            </button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sell;
