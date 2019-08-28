import React from "react";
import { Link } from "react-router-dom";

function TransactionDisplay(props) {
    return (
        <div className="row justify-content-center shadow border transaction">
            <div className="col-12 text-center p-4">
                <span># {props.index + 1}</span>
                <br></br>
                Transaction ID: {props.transID}
                <br></br>
                Payment Method: {props.paymentMethod}
                <br></br>
                Total Price:$ {props.totalPrice}
                <br></br>
            </div>
        </div>
    );
}

export default TransactionDisplay;
