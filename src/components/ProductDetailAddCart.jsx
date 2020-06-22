import React, { Component } from 'react';
import AddAndDecItemCard from './AddAndDecItemCard';

class ProductDetailAddCart extends Component {
  render() {
    const { addProduct, product } = this.props;
    return (
      <div>
        <h1>Quantidade</h1>
        <AddAndDecItemCard />
        <button
          data-testid="product-detail-add-to-cart"
          onClick={() => {
            const qtdItem = parseInt(
              document.getElementById('result').value,
              10
            );
            addProduct(product, qtdItem);
          }}
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default ProductDetailAddCart;
