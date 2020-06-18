import React, { Component } from 'react';
import ProductCard from './ProductCard.jsx';

class ProductList extends Component {
  render() {
    const { products } = this.props;

    if (products.length === 0) {
      return <div>Nenhum produto foi encontrado</div>
    }
    return (
      <div>
        {/* percorrendo products e passando um por um como parametro para ProductCard */}
        {products.map((product) => <ProductCard key={product.id} product={product} /> )}
      </div>
    );
  }
}

export default ProductList;
