import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from "../logo.svg";
import styled from 'styled-components';
import { ProductConsumer } from '../context';
class Cart extends Component {

  render() {

    return (
      <ProductConsumer>
        {value => { return (
        <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
          <div className="left-nav ">
            <Link to="/">
              <img width="90" height="70" src={logo} alt="shop" className="navbar-brand" />
            </Link>
            <Link to="/">
            <span className="nav-link" onClick={() => value.onFilter('')}>Home</span>
            </Link>
          </div>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <i className="fa fa-shopping-cart" /> My Cart
                 </ButtonContainer>
          </Link>
        </NavWrapper>
        )}}
      </ProductConsumer>
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
const NavWrapper = styled.nav`
  background: var(--mainBlue) !important;
  .nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
  }
`