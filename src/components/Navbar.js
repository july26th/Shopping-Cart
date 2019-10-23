import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
class Cart extends Component {

  render() {
    return (
      <ProductConsumer>
        {value => {
          return (

            <nav>
              <div className="container nav-bar h-100">
                <div className="left-nav">
                  <Link to="/">
                    <img src="img/logo.png" alt="" />
                  </Link>
                </div>
                <div className="center-nav d-lg-flex d-none">
                  <Link to="/" onClick={() => value.onFilter('')}><p>Home</p></Link>
                  <Link to="/" onClick={() => value.onFilter('')}><p>Pages</p></Link>
                  <Link to="/" onClick={() => value.onFilter('')}><p>Shop</p></Link>
                  <Link to="/" onClick={() => value.onFilter('')}><p>Blog</p></Link>
                  <Link to="/" onClick={() => value.onFilter('')}><p>Portfolio</p></Link>
                  <Link to="/" onClick={() => value.onFilter('')}><p>Elements</p></Link>
                </div>
                <div className="right-nav">
                  <Link to="/" onClick={() => value.onFilter('')}><i className="fas fa-search    "></i></Link>
                  <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                  <Link to="/" onClick={() => value.onFilter('')}><i className="fas fa-bars    "></i></Link>
                </div>
              </div>
            </nav>

          )
        }
        }
      </ProductConsumer >
    );

  }
}
export default Cart;

