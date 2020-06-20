import React, { Component } from 'react';

export class ProductDetails extends Component {
  static async getProductDetails(itemId) {
    const product = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
    return product.json();
  }

  constructor(props) {
    super(props);
    this.state = { productFetch: {} };
  }

  componentDidMount() {
    const currentUrlId = window.location.href.split('/')[
      window.location.href.split('/').length - 1
    ];
    ProductDetails.getProductDetails(currentUrlId).then((data) =>
      this.setState({ productFetch: data })
    );
  }

  render() {
    const { location } = this.props;
    const { productId, product } = location;
    const { productFetch } = this.state;

    const productToRender = productId !== undefined ? product : productFetch;
    return (
      <div>
        <h1>Product Details</h1>
        <h3 data-testid="product-detail-name">{productToRender.title}</h3>
      </div>
    );
  }
}

export default ProductDetails;
