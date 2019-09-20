import React, { Component } from "react";
class CartColumns extends Component {

  render() {

      return (
          <div className="row cart-column text-center">
          <div className="col-1 mx-auto">
              <p className="text-uppercase"></p>
            </div>
            <div className="col-2 mx-auto">
              <p className="text-uppercase">Image</p>
            </div>
            <div className="col-3 mx-auto">
              <p className="text-uppercase">Product</p>
            </div>
            <div className="col-2 mx-auto">
              <p className="text-uppercase">Price</p>
            </div>
            <div className="col-2 mx-auto">
              <p className="text-uppercase">Quantity</p>
            </div>
            <div className="col-2 mx-auto">
              <p className="text-uppercase">Total</p>
            </div>
          </div>
      );
              
}
}
export default CartColumns;
