import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import './App.css';

import Home from './pages/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { carrinho: [] };
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(product) {
    const { carrinho } = this.state;
    this.setState({ carrinho: [...carrinho, product] });
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
            render={(props) => <ShoppingCart {...props} carrinho={carrinho} />}
          />
          <Route exact path="/details/:id" component={ProductDetails} />
        </Switch>
      </Router>
    );
  }
}

export default App;
