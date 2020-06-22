import React, { Component } from 'react';

class ItemCart extends Component {
  constructor(props) {
    super(props);
    this.state = { qtdItem: 1};
    this.decrementValue = this.decrementValue.bind(this);
    this.incrementValue = this.incrementValue.bind(this);
  }

  incrementValue(qtdEstoque) {
    let qtdItem = this.state.qtdItem;
    qtdItem = isNaN(qtdItem) ? 0 : qtdItem;
    qtdItem = qtdItem >= qtdEstoque ? qtdEstoque : (qtdItem += 1);
    this.setState({ qtdItem });
  }

  decrementValue() {
    let qtdItem = this.state.qtdItem;
    qtdItem = isNaN(qtdItem) ? 0 : qtdItem;
    qtdItem = qtdItem <= 1 ? 1 : (qtdItem -= 1);
    this.setState({ qtdItem });
  }

  render() {
    const {produto} = this.props;
    const {qtdItem} = this.state;
    return (
      <div>
        <h5 data-testid="shopping-cart-product-name">{produto.title}</h5>
        <button data-testid="product-decrease-quantity" onClick={this.decrementValue}>-</button>
        <p data-testid="shopping-cart-product-quantity">{qtdItem}</p>
        <button data-testid="product-increase-quantity" onClick={this.incrementValue}>+</button>
      </div>
    );
  }
}

export default ItemCart;