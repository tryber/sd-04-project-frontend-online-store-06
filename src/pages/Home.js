import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartBtn from '../components/ShoppingCartBtn';

class Home extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <Link to="/cart">
          <ShoppingCartBtn />
        </Link>
      </div>
    );
  }
}

export default Home;
