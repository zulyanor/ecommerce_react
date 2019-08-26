import React from "react";
import axios from "axios";
import Header from "../components/header";

class TransDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailList: []
        };
    }

    componentDidMount = async () => {
        const self = this;
        await axios
            .get(
                "http://0.0.0.0:5000/transaction_details/" +
                    String(self.props.match.params.id),
                {
                    params: {},
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                }
            )
            .then(response => {
                console.log("detail trans", response.data);
                self.setState({
                    detailList: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="trans-detail-content">
                <Header />
                <div className="trans-detail container">
                    <div className="row justify-content-center">
                        {this.state.detailList.map(
                            (transactionDetail, index) => {
                                return (
                                    <div className="col-md-12 col-sm-6 col-12 border shadow text-center trans-list">
                                        <div>
                                            transaction ID:{" "}
                                            {transactionDetail.transaction_id}
                                        </div>
                                        <div>
                                            product ID:{" "}
                                            {transactionDetail.product_id}
                                        </div>
                                        <div>
                                            product name:{" "}
                                            {transactionDetail.product_name}
                                        </div>
                                        <div>
                                            quantity:{" "}
                                            {transactionDetail.quantity}
                                        </div>
                                        <div>
                                            price:{" "}
                                            {transactionDetail.total_price}
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default TransDetail;
