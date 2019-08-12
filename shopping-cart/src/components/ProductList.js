import React, { Component } from "react";
import Title from './Title';
import Product from './Product';
import Category from './Category';
import { ProductConsumer } from '../context';
class ProductList extends Component {

  render() {

    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <Title name="Our" title="Products" />
            <div className="col-lg-3">
              <Category />
            </div>
            <div className="col-lg-9">
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
