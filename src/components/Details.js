import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
class Details extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {

    return (
      <ProductConsumer>
        {value => {
          const { id, type, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="container py-5 details">
              <div className="row">
                <div className=" my-4">
                
                </div>
              </div>
              <div className="row my-3">
                <div className="col-col-10 col-md-5 col-md-3 mx-auto my-3">
                  <img src={`/${img}`} className="img-fluid" alt={title} />
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
                    <Link to="/">
                    <button type="button" className="btn btn-dark text-uppercase">Back To Products</button>
                    </Link>
                      <button cart disabled={inCart ? true: false} 
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }} type="button" className="btn btn-danger text-uppercase"> {inCart ? "In Cart" : "Add To Cart"}</button>
                     
                  </div>
                </div>
              </div>
              <div className="row my-4">
                <div className="text-title text-center w-100 font-weight-bold">
                  <h4>Related Products</h4>
                  <div className="col-md-3">

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
