import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import Header from "../components/header";

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: 0,
            productName: "",
            productPrice: "",
            productStock: "",
            productImage: "",
            description: "",
            location: "",
            weight: "",
            quantity: 0
        };
    }

    addToCart = async e => {
        e.preventDefault();
        const self = this;
        var config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        await axios
            .post(
                "http://0.0.0.0:5000/cart",
                {
                    product_id: this.state.productId,
                    qty: this.state.quantity
                },
                config
            )
            .then(response => {
                console.log(response);
                Swal.fire("Good job!", "Product(s) added to cart!", "success");
                self.props.history.push("/store");
            })
            .catch(error => {
                console.log(error);
            });
    };

    setQty = event => {
        event.preventDefault();
        this.setState({ quantity: event.target.value });
    };

    componentDidMount = async () => {
        const self = this;
        console.log("token store di detil", this.props.token);
        await axios
            .get(
                "http://0.0.0.0:5000/product_details/" +
                    String(self.props.match.params.id)
            )
            .then(response => {
                console.log("get product", response.data);
                this.setState({
                    description: response.data.description,
                    location: response.data.location,
                    weight: response.data.weight
                });
            })
            .catch(error => {
                console.log("error product", error);
            });
        await axios
            .get(
                "http://0.0.0.0:5000/product/" +
                    String(self.props.match.params.id)
            )
            .then(response => {
                this.setState({
                    productId: response.data.product_id,
                    productName: response.data.product_name,
                    productStock: response.data.product_stock,
                    productPrice: response.data.product_price,
                    productImage: response.data.product_img_url
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <Header />
                <div className="container px-0 product-details">
                    <div className="row justify-content-center text-center product-detail-content">
                        <div className="col-md-3 col-sm-12 py-3 text-center">
                            <img src={this.state.productImage} class="w-100" />
                        </div>
                        <div className="col-md-9 col-sm-12 contain p-4 border shadow">
                            <h2 class="font-weight-bold">
                                {this.state.productName.toUpperCase()}
                            </h2>
                            <h5>Price: {this.state.productPrice}</h5>
                            <br />
                            <h5>Stock: {this.state.productStock}</h5>
                            <br />
                            <br />
                            <h6>{this.state.description}</h6>
                            <br />
                            <br />
                            <br />
                            <div class="row">
                                <div class="col-6">
                                    <h4 class="font-weight-bold">Quantity</h4>
                                    <input
                                        type="number"
                                        name="quantity"
                                        placeholder="quantity"
                                        className="input-quantity"
                                        onChange={this.setQty}
                                    />
                                </div>
                                <div class="col-6">
                                    <h4 class="font-weight-bold">
                                        Total Price
                                    </h4>
                                    <h5>
                                        {this.state.quantity *
                                            this.state.productPrice}
                                    </h5>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h4 class="font-weight-bold">Add to your cart!</h4>
                            <Link to="/store">
                                <button
                                    type="submit"
                                    className="btn add-cart-click"
                                    onClick={this.addToCart}
                                >
                                    Add
                                </button>
                            </Link>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// export default ProductDetail;

export default connect(
    "listProduct, productName, productPrice, productStock, productImage",
    actions
)(ProductDetail);
