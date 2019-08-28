import React from "react";
import keranjang from "../assets/img/cart.png";
import scrollToComponent from "react-scroll-to-component";
import { Link } from "react-router-dom";

export class Home extends React.Component {
    render() {
        return (
            <div className="home-page w-100">
                <div className="container">
                    <div className="row justify-content-center welcome-section">
                        <div className="col-md-8 col-sm-12 text-center">
                            <h1 className="welcome-text animated delay-1s fadeInDownBig">
                                Welcome to Green House
                            </h1>
                            <img
                                src={keranjang}
                                alt=""
                                className="animated fadeInDownBig delay-2s cart-img"
                                height="120px"
                                width="120px"
                            />
                            <br />
                            <button
                                type="button"
                                className="btn btn-lg animated fadeInDownBig delay-3s whats-this"
                                onClick={() =>
                                    scrollToComponent(this.Desc, {
                                        offset: 0,
                                        align: "top",
                                        duration: 1000
                                    })
                                }
                            >
                                <h3>What's this?</h3>
                            </button>
                        </div>
                    </div>
                    <div
                        className="row justify-content-center site-desc"
                        ref={section => {
                            this.Desc = section;
                        }}
                    >
                        <div className="col-md-6 col-sm-12 text-center left-side">
                            <div className="d-flex align-items-center">
                                <h1>The Best Place to Sell or Buy Plants</h1>
                            </div>
                            <br />
                            <div className="to-sign-up-cont">
                                <button
                                    type="button"
                                    className="btn btn-lg to-sign-up"
                                    onClick={() =>
                                        scrollToComponent(this.Signup, {
                                            offset: 0,
                                            align: "top",
                                            duration: 1000
                                        })
                                    }
                                >
                                    <h3>I am interested!</h3>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 text-center img-home-one w-100">
                            <img
                                src="https://image.flaticon.com/sprites/new_packs/226663-ecology.png"
                                width="100%"
                            />
                        </div>
                    </div>
                    <div
                        className="row justify-content-center sign-up"
                        ref={section => {
                            this.Signup = section;
                        }}
                    >
                        <div className="col-md-6 col-sm-12 img-home-two w-100">
                            <img
                                src="https://image.flaticon.com/sprites/new_packs/628264-house-plants.png"
                                width="100%"
                            />
                        </div>
                        <div className="col-md-6 text-center right-side">
                            <div className="">
                                <h1>Join Us Now!</h1>
                                <Link to="/signup">
                                    <button
                                        type="button"
                                        className="btn btn-lg animated bounce infinite delay-2s push-sign-up"
                                    >
                                        <h3>Sign Up!</h3>
                                    </button>
                                </Link>
                                <br />
                                <Link to="/signin">
                                    <small>
                                        Already have an account? Sign In here
                                    </small>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
