import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <Link
          to={{
            pathname: `/details/${product.id}`,
            productId: product.id,
            product,
          }}
        >
          <h1>{title}</h1>
          <img src={thumbnail} title={title} alt={title} />
        </Link>
        <p>{price}</p>
      </div>
    );
  }
}

export default ProductCard;
