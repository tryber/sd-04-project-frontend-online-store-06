import React, { Component } from 'react';
import ProductCard from './ProductCard';

class ProductList extends Component {
  render() {
    const { products, addProduct } = this.props;

    if (products.length === 0) {
      return <div>Nenhum produto foi encontrado</div>;
    }
    return (
      <div>
        {/* percorrendo products e passando um por um como parametro para ProductCard */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addProduct={this.addProduct} />
        ))}
      </div>
    );
  }
}

export default ProductList;
