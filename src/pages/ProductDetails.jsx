import React, { Component } from 'react';

export class ProductDetails extends Component {
  // constructor(props) {
  //   super(props);

  //   this.getProductDetails = this.getProductDetails.bind(this);
  // }

  static async getProductDetails(itemId) {
    const product = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
    return product.json();
  }

  render() {
    const { location } = this.props;
    const { productId, product } = location;
    const currentUrlId = window.location.href.split('/')[
      window.location.href.split('/').length - 1
    ];
    const productToRender =
      productId !== undefined ? product : this.getProductDetails(currentUrlId);
    console.log(productToRender);
    return (
      <div>
        <h1>Product Details</h1>
      </div>
    );
  }
}

export default ProductDetails;
