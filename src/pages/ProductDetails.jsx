import React, { Component } from 'react';
import Loading from '../components/Loading';

export class ProductDetails extends Component {
  static async getProductDetails(itemId) {
    const product = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
    return product.json();
  }

  constructor(props) {
    super(props);
    this.state = { productFetch: {}, loading: true };
  }

  componentDidMount() {
    const currentUrlId = window.location.href.split('/')[
      window.location.href.split('/').length - 1
    ];
    ProductDetails.getProductDetails(currentUrlId).then((data) =>
      this.setState({ productFetch: data, loading: false })
    );
  }

  render() {
    const { productFetch, loading } = this.state;
    return loading === true ? (
      <Loading />
    ) : (
      <div>
        <h1>Product Details</h1>
        <h3 data-testid="product-detail-name">{productFetch.title}</h3>
        <p>Quantidade vendida: {productFetch.sold_quantity}</p>
        <h3>Preço: R$ {productFetch.price}</h3>
        {productFetch.pictures.map((item) => (
          <img
            key={item.id}
            src={item.url}
            alt={`Imagem de ${productFetch.title}`}
          />
        ))}
      </div>
    );
  }
}

export default ProductDetails;
