import React, { Component } from "react";
class CartColumns extends Component {

  render() {

      return (
        <div className="container-fluid text-center d-none d-lg-block">
          <div className="row">
            <div className="col-10 col-lg-2 mx-auto">
              <p className="text-uppercase font-weight-bold">Products</p>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
              <p className="text-uppercase font-weight-bold">Name Of Product</p>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
              <p className="text-uppercase font-weight-bold">Price</p>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
              <p className="text-uppercase font-weight-bold">Quantity</p>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
              <p className="text-uppercase font-weight-bold">Remove</p>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
              <p className="text-uppercase font-weight-bold">Total</p>
            </div>
          </div>
        </div>
      );
              
}
}
export default CartColumns;
