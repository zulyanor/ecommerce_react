import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import logo from "../assets/img/logo.png";
import cart from "../assets/img/cart.png";

export default connect(
    "isLogin, token",
    actions
)(Header);
