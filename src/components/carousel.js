import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselHome() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i2.wp.com/galveston.agrilife.org/files/2017/02/Bonsai-March-11-2017.jpg?fit=1000%2C801&ssl=1"
                                alt="First slide"
                                height="400px"
                            />
                            <Carousel.Caption>
                                <h3></h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://matalan-content.imgix.net/uploads/asset_file/asset_file/201106/1543833184.6458428-S2703945_C211_Alt1.jpg?ixlib=rails-2.1.4&auto=format%2Ccompress&cs=tinysrgb&s=7fcc8318bebbe38309b342336e93962e"
                                alt="Third slide"
                                height="400px"
                            />

                            <Carousel.Caption>
                                <h3></h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://image.dhgate.com/0x0/f2/albu/g8/M00/BF/9F/rBVaVFwgqJOAVJ6nAAxn6KCLUeM437.jpg"
                                alt="Third slide"
                                height="400px"
                            />

                            <Carousel.Caption>
                                <h3></h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default CarouselHome;
