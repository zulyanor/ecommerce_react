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
                                src="https://designkollective-production.imgix.net/iu_store/zJdNlFxiS5UdlI2EoIFFdDq35yCldH6HrbvwYxCilj?fit=fill&fm=auto%2Cpjpg&auto=compress%2Cformat&pad=20&bg=fff&trim=color&w=1280&h=1280"
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
                                src="https://www.gdbobalcons-shop.com/Files/19849/Img/02/bonsai-ficus-en-coupe-18024b-lou.jpg"
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
                                src="https://www.fleursdelasagesse.com/crud/assets/uploads/files/images/items/cd7b5-412.jpg"
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
