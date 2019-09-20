import React, { Component } from "react";
import CartItem from './CartItem';
import { ProductConsumer } from '../context';
class CartList extends Component {

  render() {
    return (
      <div className="container-fluid text-center">
        <ProductConsumer>
          {value => {
            return value.cart.map(item => {
              return <CartItem key={item.id} item={item} value={value} />
            })
          }}

        </ProductConsumer>
        <div className="float-right border-top mt-3 w-100">
          <p className="text-title mt-2 text-right">Clear Cart</p>
        </div>
      </div>
    );

  }
}
export default CartList;
