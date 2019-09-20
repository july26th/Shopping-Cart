import React, { Component } from "react";
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotal from './CartTotal';
import { ProductConsumer } from '../context';
class Cart extends Component {

  render() {
    return (
      <section className="cart">
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                   <img alt="" src="img/cartbanner.png" className="w-100"/>
                  <div className="container mt-4 pt-4">
                    <div className="row">
                      <div className="col-lg-8">
                        <CartColumns />
                        <CartList />
                      </div>
                      <div className="col-lg-4">
                        <CartTotal value={value} />
                      </div>
                    </div>
                  </div>

                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                <img alt="" src="img/cartbanner.png" className="w-100"/>
                <h3 className="text-title text-center py-3">Your Cart Is Empty</h3>
                </React.Fragment>
              )
            }
          }}
        </ProductConsumer>

      </section>
    );

  }
}
export default Cart;
