import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Navbar';
class Details extends Component {

  render() {

    return (
      <ProductConsumer>
        {value => {
          const { id, type, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-col-10 mx-auto text-center text-blue my-3">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-col-10 col-md-5 col-md-3 mx-auto my-3">
                  <img src={img} className="img-fluid" alt={title} />
                </div>
                <div className="col-col-10 col-md-7 col-md-3 mx-auto my-3">
                  <h2>Model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Type: <span>{type}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Price: <span>${price}</span>
                    </strong>
                  </h4>
                  <p className="font-weight-bold mt-3 mb-0">
                    Some Info About Product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/Shopping-Cart">
                      <ButtonContainer>
                        Back To Products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer cart disabled={inCart ? true: false} 
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                    >
                      {inCart ? "In Cart" : "Add To Cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );

  }
}
export default Details;
