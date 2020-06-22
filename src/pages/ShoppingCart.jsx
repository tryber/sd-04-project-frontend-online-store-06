import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import ItemCart from '../components/ItemCart';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = { finalizar: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ finalizar: true });
  }

  render() {
    const { carrinho } = this.props;
    const { finalizar } = this.state;

    if (finalizar) return <Redirect to="/checkout" />;

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
              <ItemCart produto={produto} />
            </div>
          ))
        )}
        <button
          data-testid="checkout-products"
          type="button"
          onClick={this.handleClick}
        >
          Finalizar Compra
        </button>
      </div>
    );
  }
}
export default ShoppingCart;
