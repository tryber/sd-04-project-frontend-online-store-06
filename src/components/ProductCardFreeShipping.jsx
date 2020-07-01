import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCardFreeShipping extends Component {
  render() {
    const { product, addProduct } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <Link
          to={{
            pathname: `/details/${product.id}`,
            product,
          }}
          data-testid="product-detail-link"
        >
          <h1>{title}</h1>
          <img src={thumbnail} title={title} alt={title} />
        </Link>
        <p>{price}</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={() => {
            addProduct(product);
          }}
        >
          Adicionar ao Carrinho
        </button>
        <div data-testid="free-shipping">FRETE GRÁTIS</div>
      </div>
    );
  }
}

export default ProductCardFreeShipping;
