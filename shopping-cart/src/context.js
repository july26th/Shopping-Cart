import React, { Component } from "react";
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartTotal: 0,
    filterName: '',
  };
  componentDidMount() {
    this.setProducts();
  }
  onFilter = (name) => {
    this.setState(() => {
      return {
        filterName: name
      }
    });
    this.setProducts(name.toLowerCase())
  }
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modalOpen: true,
        modalProduct: product
      }
    })
  };
  closeModal = (id) => {
    this.setState(() => {
      return {
        modalOpen: false
      }
    });
  }
  setProducts = (name) => {
    let temp = [];
    if (!name) {
      storeProducts.forEach(item => {
        const singleItem = { ...item };
        temp = [...temp, singleItem];

      });
    } else {
      storeProducts.forEach(item => {
        if (item.type.toLowerCase() === name.toLowerCase()) {
          const singleItem = { ...item };
          temp = [...temp, singleItem];
        }
      });
    }
    this.setState(() => {
      return { products: temp };
    });
  };
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    })
  };
  addToCart = (id) => {
    let temp = [...this.state.products];
    const index = temp.indexOf(this.getItem(id));
    const product = temp[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return {
        products: temp,
        cart: [...this.state.cart, product]
      };
    },
      () => { this.addTotals() }
    );
  };
  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return {
        cart: [...tempCart]
      };
    }, this.addTotals);
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(() => {
        return { cart: [...tempCart] };
      }, this.addTotals);
    }
  };
  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter(item => {
      return item.id !== id;
    });

    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      };
    }, this.addTotals);
  };
  clearCart = (id) => {
    this.setState(() => {
      return {
        cart: []
      }
    }, () => {
      this.setProducts();
      this.addTotals()
    }
    );
  };
  addTotals = () => {
    let total = 0;
    this.state.cart.map(item => (total += item.total));
    this.setState(() => {
      return {
        cartTotal: total
      }
    })
  };
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart,
        onFilter: this.onFilter
      }
      }>
        {this.props.children}
      </ProductContext.Provider>
    );

  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
