import React, { Component } from "react";
import { Link } from 'react-router-dom';
class CartTotal extends Component {

  render() {
    const { cartTotal, clearCart } = this.props.value;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right text-capitalize">
              
              <h5>
                <span className="text-title">
                  Total: 
                </span>
                <strong>${cartTotal}</strong>
              </h5>
              <Link to="/Shopping-Cart">
                <button className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                type="button" onClick={() => clearCart()}>
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );

  }
}
export default CartTotal;
