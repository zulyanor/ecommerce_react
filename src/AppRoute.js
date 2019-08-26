import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "unistore/react";
import { store } from "./store/store";
import "./assets/css/main.css";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import MainStore from "./pages/mainstore";
import Sell from "./pages/sell";
import Profile from "./pages/profile";
import Cart from "./pages/cart";
import ProductDetail from "./pages/productdetail";
import Transaction from "./pages/transaction";
import TransDetail from "./components/transdetail";

function AppRoute() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/store" component={MainStore} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/sell" component={Sell} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/transaction" component={Transaction} />
                    <Route path="/product/:id" component={ProductDetail} />
                    <Route
                        path="/transaction-details/:id"
                        component={TransDetail}
                    />
                </Switch>
            </Router>
        </Provider>
    );
}

export default AppRoute;
