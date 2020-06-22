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
            addProduct(
              product,
              parseInt(document.getElementById('result').value)
            );
          }}
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default ProductDetailAddCart;
