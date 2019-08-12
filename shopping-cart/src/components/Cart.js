import React, { Component } from "react";
import Title from "./Title";
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotal from './CartTotal';
import { ProductConsumer } from '../context';
class Cart extends Component {

  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                <Title name="Your" title="Cart" />
                <CartColumns />
                <CartList />
                <CartTotal value={value} />
                </React.Fragment>
                );
            } else {
              return (
                <Title name="Your Cart Is Currently Empty" />
              )
            }
          }}
        </ProductConsumer>

      </section>
    );

  }
}
export default Cart;
