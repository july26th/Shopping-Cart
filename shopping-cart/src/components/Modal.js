import React, { Component } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Navbar';

class Modal extends Component {

  render() {

      return (
        <ProductConsumer>
            { (value) =>{
              const { modalOpen, closeModal } = value;
              const { img, title, price } = value.modalProduct;
              if(!modalOpen) {
                return null;
              }
              else { return (
                <ModalContainer>
                  <div className="container">
                    <div className="row">
                      <div id="modal" className="col-8 col-md-6 col-lg-5 mx-auto text-center p-4">
                        <h5 className="text-title font-weight-bold border-bottom"> Added To Cart Successfully</h5>
                        <img src={img} className="img-fluid" alt={title} style={{height:"360px", width:"70%"}} />
                        <h5>{title}</h5>
                        <h5 className="text-mutede">Price: ${price}</h5>
                        <Link to="/">
                          <ButtonContainer onClick={() => closeModal()}>
                            Countinue Shopping
                          </ButtonContainer>
                        </Link>
                        <Link to="/cart">
                          <ButtonContainer cart onClick={() => closeModal()}>
                            Go To Cart
                          </ButtonContainer>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ModalContainer>
              )};
            }
            }
        </ProductConsumer>
      );
              
}
}

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.3);
display: flex;
align-items: center;
justify-content: center;
#modal {
  background: var(--mainWhite);
}
`

export default Modal;
