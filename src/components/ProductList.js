import React, { Component } from "react";
import Product from './Product';
import Category from './Category';
import Slider from './Slider';
import { ProductConsumer } from '../context';
class ProductList extends Component {

  render() {

    return (
      <React.Fragment>
        <Slider />
        <div className="container px-0">
          <div className="row">
            <h4 className="text-center text-title font-weight-bold w-100 mt-4">NEW ARRIVAL</h4>
            <div className="col-lg-12">
              <Category />
            </div>
            <div className="col-lg-12">
              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      return <Product key={product.id} product={product} />
                    })
                  }}
                </ProductConsumer>
              </div>
            </div>

          </div>
        </div>
      </React.Fragment>
    );

  }
}
export default ProductList;
