import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

class Modal extends Component {

  render() {

    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          }
          else {
            return (
              <div className="modal-box">
                <div className="container product-modal">
                  <div className="row">
                    <div id="modal" className="col-8 col-md-6 col-lg-5 mx-auto text-center p-4">
                      <h5 className="text-title font-weight-bold border-bottom"> Added To Cart Successfully</h5>
                      <img src={`/${img}`} className="img-fluid" alt={title} style={{ height: "auto", width: "45%" }} />
                      <div className="my-2">
                        <span className="mb-0 pr-4 d-inline-block text-title">{title}</span>
                        <span className="mb-0 font-italic text-title ">${price}</span>
                      </div>
                      <Link to="/">
                        <button type="button" onClick={() => closeModal()} className="btn btn-dark">Go To Home</button>
                      </Link>
                      <Link to="/cart">
                        <button type="button" cart onClick={() => closeModal()} className="btn btn-danger">Go To Cart</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          };
        }
        }
      </ProductConsumer>
    );

  }
}

export default Modal;
