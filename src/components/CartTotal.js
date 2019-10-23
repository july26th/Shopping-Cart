import React, { Component } from "react";
import { Link } from 'react-router-dom';
class CartTotal extends Component {

  render() {
    const { cartTotal, clearCart } = this.props.value;
    return (
      <React.Fragment>
            <div className="cart-total p-5">
                <p className="text-title">
                  Cart Totals 
                </p>
                <div className="cart-info">
              <span>Subtotal </span>${cartTotal}
              <div  className="d-flex">
                <span>Shipping</span>
              <div>
              <p>Flat Rate: $20.00</p>
              <p>Calculate Shipping</p>
              </div>
              </div>
              </div>
              <hr />
              <span>Subtotal </span>${cartTotal + 20}
            </div>
            <Link to="/">
                <button className="btn btn-dark w-100 mb-3 px-5" 
                type="button" onClick={() => clearCart()}>
                  Proceed To Checkout
                </button>
              </Link>
      </React.Fragment>
    );

  }
}
export default CartTotal;
