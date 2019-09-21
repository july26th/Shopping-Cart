import React, { Component } from "react";
class Slider extends Component {

    render() {

        return (
            <React.Fragment>
                <div id="carouselId" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselId" data-slide-to={0} className="active" />
                        <li data-target="#carouselId" data-slide-to={1} />
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img alt="" src="img/slider-3.jpg" className="w-100" />
                        </div>
                        <div className="carousel-item">
                            <img alt="" src="img/slider-4.jpg" className="w-100" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="container promotion my-4">
                    <div className="row">
                       <div className="col-md-4">
                            <div className="promo-item">
                                <div className="layout"><div></div></div>
                                <p>Woman Clothing</p>
                                <img src="img/promotion-1.jpg" alt="" />
                            </div>
                       </div>
                       <div className="col-md-4">
                            <div className="promo-item">
                                <div className="layout"><div></div></div>
                                <p>Accessories</p>
                                <img src="img/promotion-2.jpg" alt="" />
                            </div>
                       </div>
                       <div className="col-md-4">
                            <div className="promo-item">
                                <div className="layout"><div></div></div>
                                <p>Man Clothing</p>
                                <img src="img/promotion-3.jpg" alt="" />
                            </div>
                       </div>
                    </div>
                </div>
            </React.Fragment>
        );

    }
}
export default Slider;
