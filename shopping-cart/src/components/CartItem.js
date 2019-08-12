import React, { Component } from "react";
class CartItem extends Component {

  render() {
    const { id, title, img, price, count, total } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;
    return (
      <div className="row my-2 text-center">
        <div className="col-10 col-lg-2 cart-item">
          <img src={img} className="cart-img img-fluid" alt={title} />
        </div>
        <div className="col-10 col-lg-2 cart-item">
          <span className="d-lg-none">Product:</span>  {title}
        </div>
        <div className="col-10 col-lg-2 cart-item">
          <span className="d-lg-none">Price: </span> ${price}
        </div>
        <div className="col-10 col-lg-2 cart-item">
          <div className="d-flex justify-content-center">
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
          </div>
        </div>
        <div className="col-10 col-lg-2 cart-item">
          <div className="cart-icon" onClick={() => removeItem(id)}><i className="fa fa-trash-o" aria-hidden="true"></i>
          </div>
        </div>
        <div className="col-10 col-lg-2 cart-item">
          <strong  className="d-lg-none">Item Total:</strong>  ${total}
        </div>
      </div>
    );

  }
}
export default CartItem;
