import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import logo from "../assets/img/logo.png";
import cart from "../assets/img/cart.png";

function Header(props) {
    return (
        <div className="header">
            <header>
                <div className="container-fluid ">
                    <div className="row shadow-sm justify-content-center">
                        <div className="col-md-4">
                            <ul className="menu px-0">
                                <li className="logo">
                                    <img
                                        src={logo}
                                        height="50px"
                                        width="50px"
                                    />
                                </li>
                                <li>
                                    <Link
                                        to="/store"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title="Go to main store page"
                                    >
                                        STORE
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/sell"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title="Sell your item here!"
                                    >
                                        SELL
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/profile"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title="See your awesome profile!"
                                    >
                                        PROFILE
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 text-center store-name">
                            <h1>GREEN HOUSE</h1>
                        </div>
                        <div className="col-md-4 menu-right text-right">
                            <ul>
                                <Link to="/cart">
                                    <img
                                        src={cart}
                                        height="50px"
                                        width="50px"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title="Done shopping? Checkout here!"
                                    />
                                </Link>
                                <Link
                                    to="/"
                                    style={{
                                        textDecoration: "none",
                                        color: "black"
                                    }}
                                    onClick={() => {
                                        localStorage.removeItem("token");
                                        props.logOut();
                                    }}
                                >
                                    <li
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title=":("
                                    >
                                        SIGN OUT
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default connect(
    "isLogin, token",
    actions
)(Header);
