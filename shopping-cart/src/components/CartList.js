import React, { Component } from "react";
import CartItem from './CartItem';
import { ProductConsumer } from '../context';
class CartList extends Component {

  render() {
    // const {value} = this.props;
    // console.log(value.cart);
    return (
      <div className="container-fluid text-center">
      <ProductConsumer>
       {value => { return value.cart.map(item => {
                 return <CartItem key={item.id} item={item} value={value} />
               })}}
      </ProductConsumer>
      </div>
    );

  }
}
export default CartList;
