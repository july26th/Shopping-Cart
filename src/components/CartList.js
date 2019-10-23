import React, { Component } from "react";
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
class CartList extends Component {

  render() {
    const { clearCart } = this.props.value;
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
          <Link to="/">
            <p className="text-title mt-2 text-right" onClick={() => clearCart()}>Clear Cart</p>
          </Link>
        </div>

      </div>
    );

  }
}
export default CartList;
