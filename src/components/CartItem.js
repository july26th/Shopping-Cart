import React, { Component } from "react";
class CartItem extends Component {

  render() {
    const { id, title, img, price, count, total } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;
    return (
      <div className="row my-2 text-center">
        <div className="col-1 cart-item">
          <div className="cart-icon" onClick={() => removeItem(id)}><i class="fas fa-times"></i>
          </div>
        </div>
        <div className="col-2 cart-item">
          <img src={img} className="cart-img img-fluid" alt={title} />
        </div>
        <div className="col-3 cart-item">
           {title}
        </div>
        <div className="col-2 cart-item">
           ${price}
        </div>
        <div className="col-2 cart-item">
          <div className="d-flex justify-content-center">
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
          </div>
        </div>

        <div className="col-2 cart-item font-weight-bold">
          ${total}
        </div>
      </div>
    );

  }
}
export default CartItem;
