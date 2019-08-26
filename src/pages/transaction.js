import React from "react";
import axios from "axios";
import Header from "../components/header";

class Transaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            totalPrice: 0
        };
    }

    componentDidMount = async e => {
        e.preventDefault();
        const self = this;
        var config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        };
        await axios
            .post("http://0.0.0.0:5000/transaction", {}, config)
            .then(response => {
                console.log(response.data);
                self.setState({
                    userId: response.data.user_id,
                    totalPrice: response.data.total_price
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="transaction">
                <Header />
                <div>
                    <h1>{this.state.userId}</h1>
                </div>
                <div>
                    <h1>{this.state.totalPrice}</h1>
                </div>
            </div>
        );
    }
}

export default Transaction;
