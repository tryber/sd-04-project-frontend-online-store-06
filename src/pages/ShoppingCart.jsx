import React, { Component } from 'react';

import ItemCart from '../components/ItemCart';

class ShoppingCart extends Component {
  render() {
    const { carrinho } = this.props;
    return (
      <div>
        <h1>Carrinho de compras</h1>
        {carrinho.length === 0 ? (
          <h3 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h3>
        ) : (
          carrinho.map((produto) => (
            <div key={produto.id}>
              <ItemCart produto={produto}/>
            </div>
          ))
        )}
      </div>
    );
  }
}
export default ShoppingCart;
