import React, { Component } from 'react';

class RevisionProduct extends Component {
  render() {
    const { carrinho } = this.props;
    let totalCart = 0;
    return (
      <div>
        <h1>Revise seus Produtos</h1>
        {carrinho.map((product) => {
          const { id, title, thumbnail, qtd, price } = product;
          totalCart += price * qtd;
          return (
            <div key={id}>
              <img src={thumbnail} title={title} alt={title} />
              <p>{title}</p>
              <p>{price * qtd}</p>
            </div>
          );
        })}
        Total: {totalCart}
      </div>
    );
  }
}

export default RevisionProduct;
