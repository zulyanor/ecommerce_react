import React from "react";

function ProductDisplay(props) {
    return (
        <div className="product-desc-content">
            <div className="row justify-content-center shadow border mx-1 my-4 py-4 product-desc">
                <div className="col-12 text-center p-4">
                    <img
                        className="product-img w-100"
                        src={props.picture}
                        alt="picture"
                        height="292px"
                    />
                </div>
                <div className="col-12 text-center">
                    <h3 className="font-weight-bold">{props.name}</h3>
                </div>
                <div className="col-12 text-center">
                    <h6>Price: ${props.price}</h6>
                    <h6>Stock Available: {props.stock}pcs</h6>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
