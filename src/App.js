import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import './App.css';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={ShoppingCart} />
        <Route exact path="/details/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;
