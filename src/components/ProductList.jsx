import React, { Component } from 'react';
import ProductCard from './ProductCard';

class ProductList extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   carrinho: [],
    // }
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(product) {
    console.log(product);
    // const { title, available_quantity } = product;

    // this.setState({
    //   carrinho: product,
    // });
    
    // localStorage.setItem('Product', `Item: ${title} - Quantidade: ${available_quantity}`);
  }

  render() {
    const { products } = this.props;

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
