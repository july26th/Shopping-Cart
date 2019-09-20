import React, { Component } from "react";
class Footer extends Component {

    render() {

        return (
              <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 text-center">
                            <div><img alt="" src="img/logo.png" className="logo" /></div>
                            <p>Why I say old chap that is sping lavatory chip shop gosh off his, smashing boot are you taking.!!</p>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <p className="title">Our Stores</p>
                            <div className="content">
                                <p>New York</p>
                                <p>Los Angeles</p>
                                <p>London</p>
                                <p>Vietnam</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <p className="title">Information</p>
                            <div className="content">
                                <p>My Account</p>
                                <p>Gift Cards</p>
                                <p>Return Policy</p>
                                <p>Your Orders</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <p className="title">Follow Us</p>
                            <div className="content">
                                <a href="" class="hover-fb"><i class="fab fa-facebook-f"></i></a>
                                <a href="" class="hover-twitter"><i class="fab fa-twitter"></i></a>
                                <a href="" class="hover-pinterest"><i class="fab fa-pinterest"></i></a>
                                <a href="" class="hover-linkedin"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                            <p className="title">Opened Time</p>
                            <div className="content">
                                <span>Sat – Fri: 9am – 10pm</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right text-center pt-3">
                © 2019 Novas. All Rights Reserved
            </div>
            </footer>
        );

    }
}
export default Footer;
