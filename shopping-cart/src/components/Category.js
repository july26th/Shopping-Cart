import React, { Component } from "react";
import Title from './Title';
import { ProductConsumer } from '../context';
class Category extends Component {

  render() {

    return (
      <ProductConsumer>
        {value => {
          return (
            <div className="menu menu-prospero">
              <Title name="Category" />
              <ul className="nav flex-column menu-list">
              <li className={value.filterName === ''? " menu-item menu-item-current" : " menu-item"}>
                  <p className="nav-link text-title menu-link" onClick = {() => {
                    value.onFilter('');
                  
                    }}>All Types</p>
                </li>
                <li className={value.filterName === 'T-shirt'? " menu-item menu-item-current" : " menu-item"}>
                  <p className="nav-link text-title menu-link" onClick = {() => {
                    value.onFilter('T-shirt');
                  
                    }}>T-shirt</p>
                </li>
                <li className={value.filterName === 'Jeans'? " menu-item menu-item-current" : " menu-item"}>
                  <p className="nav-link text-title menu-link" onClick = {() => value.onFilter('Jeans')}>Jeans</p>
                </li>
                <li className={value.filterName === 'Jacket'? " menu-item menu-item-current" : " menu-item"}>
                  <p className="nav-link text-title menu-link" onClick = {() => value.onFilter('Jacket')}>Jacket</p>
                </li>
              </ul>
            </div>

          )
        }}
      </ProductConsumer>
    );

  }
}
export default Category;
