import React from "react";
import Header from "../components/header";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { actions } from "../store/store";
import { connect } from "unistore/react";
import scrollToComponent from "react-scroll-to-component";
import Carousel from "../components/carousel";
import ProductDisplay from "../components/productdisplay";

export class MainStore extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {
        const self = this;
        await axios
            .get("https://api.zulyano.xyz/product/all")
            .then(response => {
                self.props.setListProduct(response.data);
            })
            .catch(error => {
                console.log("error product", error);
            });
    };

    render() {
        if (0 === 1) {
            return <Redirect to={{ pathname: "/signin" }} />;
        } else {
            return (
                <div className="main-store">
                    <Header />
                    <div className="main-store-carousel">
                        <div className="container">
                            <div className="row">
                                <div className="col-5 justify-content-center left-side">
                                    <button
                                        type="button"
                                        className="btn btn-lg shop-now animated fadeInDown"
                                        onClick={() =>
                                            scrollToComponent(this.Store, {
                                                offset: 0,
                                                align: "top",
                                                duration: 1000
                                            })
                                        }
                                    >
                                        <h1>SHOP NOW</h1>
                                    </button>
                                </div>
                                <div className="col-7 text-center">
                                    <h1>Today's Highlight Product</h1>
                                    <br />
                                    <Carousel />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container home">
                        <div
                            className="row"
                            ref={section => {
                                this.Store = section;
                            }}
                        >
                            {this.props.listProduct.map((item, index) => {
                                return (
                                    <div className="col-md-4 col-sm-6 col-12">
                                        <Link
                                            to={"/product/" + item.product_id}
                                            style={{
                                                textDecoration: "none",
                                                color: "black"
                                            }}
                                            className="link"
                                        >
                                            <ProductDisplay
                                                name={item.product_name}
                                                picture={item.product_img_url}
                                                price={item.product_price}
                                                stock={item.product_stock}
                                                id={index + 1}
                                            />
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default connect(
    "isLogin, listProduct, listCart, token",
    actions
)(MainStore);
