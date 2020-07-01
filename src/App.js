import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { carrinho: [] };
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(product, qtd = 1) {
    // params default
    const { carrinho } = this.state;
    const indexProduct = carrinho.findIndex((prod) => prod.id === product.id);
    if (indexProduct === -1) { // Se findIndex não encontra traz -1
      const newProduct = { ...product, qtd }; // cria nova chave no objeto
      this.setState({ carrinho: [...carrinho, newProduct] });
    }
    else { // se index já existe
      carrinho[indexProduct].qtd += qtd;
      this.setState({ carrinho });
    }
    // newProduct, tem agora também a quantidade
  }

  render() {
    const { carrinho } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} addProduct={this.addProduct} />}
          />
          <Route
            exact
            path="/cart"
            render={(props) => <ShoppingCart {...props} addProduct={this.addProduct} carrinho={carrinho} />}
          />
          <Route
            exact
            path="/details/:id"
            render={(props) => (
              <ProductDetails {...props} addProduct={this.addProduct} />
            )}
          />
          <Route exact path="/checkout" render={(props) => <Checkout {...props} carrinho={carrinho} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
