import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product, query } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <Link
          to={{
            pathname: `/details/${product.id}`,
            product,
            query,
          }}
        >
          <h1 data-testid="product-add-to-cart">{title}</h1>
          <img
            src={thumbnail}
            title={title}
            alt={title}
            data-testid="product-add-to-cart"
          />
        </Link>
        <p>{price}</p>
      </div>
    );
  }
}

export default ProductCard;
