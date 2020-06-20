import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    return (
      // condição para exibir mensagem de carrinho vazio ou exibir os produtos adicionados
      <div>
        <h1>Carrinho de compras</h1>
        <h3 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h3>
        <h5 data-testid="shopping-cart-product-name">
          {/* {title} */}
        </h5>
        <h6 data-testid="shopping-cart-product-quantity">
          {/* {available_quantity} */}
        </h6>
      </div>
    );
  }
}

export default ShoppingCart;
