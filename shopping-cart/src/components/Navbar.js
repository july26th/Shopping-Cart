import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
class Cart extends Component {

  render() {

    return (
      <ProductConsumer>
        {value => {
          return (

            <nav>
              <div className="container nav-bar">
                <div className="left-nav">
                  <Link to="/">
                    <img src="img/logo.png" alt="" />
                  </Link>
                </div>
                <div className="center-nav">
                  <Link to="/"><p>Home</p></Link>
                  <Link to="/"><p>Pages</p></Link>
                  <Link to="/"><p>Shop</p></Link>
                  <Link to="/"><p>Blog</p></Link>
                  <Link to="/"><p>Portfolio</p></Link>
                  <Link to="/"><p>Elements</p></Link>
                  {/* <Link to="/"> 
            <span className="nav-link" onClick={() => value.onFilter('')}>Home</span>
            </Link> */}
                </div>
                <div className="right-nav">
                  <Link to="/"><i class="fas fa-search    "></i></Link>
                  <Link to="/cart"><i class="fas fa-shopping-cart"></i></Link>
                  <Link to="/"><i class="fas fa-bars    "></i></Link>
                </div>
                {/* <Link to="/cart" className="ml-auto"> */}
                {/* <ButtonContainer>
              <i className="fa fa-shopping-cart" /> My Cart
                 </ButtonContainer> */}
                {/* </Link> */}
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

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  border-radius: 0.5rem;
  padding: 0.4rem;
  cursor: pointer;
  margin: 0.3rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`
// const NavWrapper = styled.nav`
//   background: var(--mainWhite) !important;
//   .nav-link{
//     color: var(--mainWhite) !important;
//     font-size: 1.3rem;
//   }
// `