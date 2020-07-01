import React, { Component } from 'react';
import shoppingCartIcon from '../img/shopping-cart-icon.svg';

class ShoppingCartBtn extends Component {
  render() {
    const { carrinho } = this.props;
    const totalQtdCart = carrinho.reduce((accumulator, product) => {
      accumulator += product.qtd;
      return accumulator;
    }, 0);
    return (
      <div>
        <img
          src={shoppingCartIcon}
          alt="Shopping cart button"
          className="shopping-cart-btn"
          data-testid="shopping-cart-button"
        />{' '}
        <p data-testid="shopping-cart-size">{totalQtdCart}</p>
      </div>
    );
  }
}

export default ShoppingCartBtn;
