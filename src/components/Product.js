import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';
class Product extends Component {

  render() {
      const { id, title, img, imgSub, price, inCart } = this.props.product;
      return (
        <div className="col-9 col-md-6 col-lg-3 my-3 product-item">
            <div className="card">
              <ProductConsumer>
            {value => (
              <div className="img-container p-2"
              onClick = {() => value.handleDetail(id)}
              >
                <Link to={`/details/${id}`}>
                  <img src={img} width="200px" height="auto" alt={title} className="card-img-top" />  
                </Link>
                <Link to={`/details/${id}`}>
                  <div className="card-img-sub" >
                  <img src={imgSub} alt={title} />  
                  </div>
                </Link>
                
                <button className="cart-btn" disabled={inCart ? true : false}
                onClick = {() => {
                  value.addToCart(id);
                  value.openModal(id);
                }
                } >
                  {inCart ? (
                    <p className="mb-0" disabled>In cart</p>
                  ) : <i className="fa fa-shopping-cart"> Add to Cart</i>}
                </button>
              </div>
            )}
            </ProductConsumer>
            <div className="card-footer product-info"> 
            <p className="mb-0 text-title">{title}</p>
            <p className="mb-0 font-italic text-title ">${price}</p>
            </div>
            </div>
        </div>
      );
              
}
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

export default Product;
