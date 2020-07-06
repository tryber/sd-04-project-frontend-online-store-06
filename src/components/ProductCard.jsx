import React, { Component } from 'react';
import ProductCardBase from './ProductCardBase';

class ProductCard extends Component {
  render() {
    const { product, addProduct } = this.props;
    const { shipping } = product;

    if (shipping.free_shipping === true) {
      return (
        <div>
          <ProductCardBase product={product} addProduct={addProduct} />
          <div data-testid="free-shipping">FRETE GRÁTIS</div>
        </div>
      );
    }

    return (
      <div>
        <ProductCardBase product={product} addProduct={addProduct} />
      </div>
    );
  }
}

export default ProductCard;
