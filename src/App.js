import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/Footer';
class App extends Component {

  render() {

      return (
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/details/:id" match component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
          <Footer />
          <Modal />
        </React.Fragment>
      );
              
}
}
export default App;
