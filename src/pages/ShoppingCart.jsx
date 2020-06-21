import React, { Component } from 'react';

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
          carrinho.map((produto) =>
            <div key={produto.id}>
              <h5 data-testid="shopping-cart-product-name">{produto.title}</h5>
              <h6 data-testid="shopping-cart-product-quantity">{'1'}</h6>
            </div>
          )
        )}
      </div>
    );
  }
}
export default ShoppingCart;
