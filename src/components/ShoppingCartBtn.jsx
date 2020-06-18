import React, { Component } from 'react';
import shoppingCartIcon from '../img/shopping-cart-icon.svg';

class ShoppingCartBtn extends Component {
  render() {
    return (
      <img
        src={shoppingCartIcon}
        alt="Shopping cart button"
        className="shopping-cart-btn"
        data-testid="shopping-cart-button"
      />
    );
  }
}

export default ShoppingCartBtn;
