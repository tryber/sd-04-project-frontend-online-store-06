import React, { Component } from 'react';

class AddAndDecItemCard extends Component {
  constructor(props) {
    super(props);
    // ajuste de regra para o uso do componente no carrinho
    // O mesmo deve respeitar a quantidade que o usuário for comprar
    const { product } = this.props;
    const qtdItem = product.qtd ? product.qtd : 1;
    this.state = { qtdItem, isDisabled: false };

    this.incrementValue = this.incrementValue.bind(this);
    this.decrementValue = this.decrementValue.bind(this);
    this.regraDecrementIncrement = this.regraDecrementIncrement.bind(this);
  }

  regraDecrementIncrement(qtdItem, isDisabled) {
    this.setState({ qtdItem, isDisabled }); // se diminui habilita para poder aumentar
    const { product, addProduct } = this.props;
    const isCart = product.qtd ? true : false;
    if (isCart) {
      // Esta regra será executado, só quando estiver na tela do carrinho
      // Regra  para atualizara qtd no card
      // O qtdItem é o total que se tem em tela
      // O product.qtd é o que foi adicionado ao carrinho até então
      // O qtdCard é a diferença da subtração de qtdItem e product.qtd
      // Essa diferença será tanto para adicionar itemns no carrinho como p/ remover os mesmos
      const qtdCard = qtdItem - product.qtd;
      addProduct(product, qtdCard);
    }
  }

  incrementValue(qtdEstoque) {
    let qtdItem = this.state.qtdItem;
    qtdItem = isNaN(qtdItem) ? 1 : qtdItem;
    const isDisabled = qtdItem === qtdEstoque; // para reuso no setState e no ternário
    qtdItem = isDisabled ? qtdEstoque : (qtdItem += 1);
    this.regraDecrementIncrement(qtdItem, isDisabled);
  }

  decrementValue() {
    let qtdItem = this.state.qtdItem;
    qtdItem = isNaN(qtdItem) ? 0 : qtdItem;
    qtdItem = qtdItem <= 1 ? 1 : (qtdItem -= 1);
    this.regraDecrementIncrement(qtdItem, false);
  }

  render() {
    const { qtdItem, isDisabled } = this.state;
    const { product } = this.props;
    return (
      <div>
        <button
          data-testid="product-decrease-quantity"
          onClick={() => {
            this.decrementValue();
          }}
        >
          -
        </button>
        <p
          data-testid="shopping-cart-product-quantity"
          name="result"
          id="result"
        >
          {qtdItem}
        </p>
        <button
          data-testid="product-increase-quantity"
          disabled={isDisabled}
          onClick={() => {
            this.incrementValue(product.available_quantity);
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default AddAndDecItemCard;
