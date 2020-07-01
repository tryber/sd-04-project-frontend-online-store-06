import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import ProductDetailAddCart from '../components/ProductDetailAddCart';
import ShoppingCartBtn from '../components/ShoppingCartBtn';
import ProductEvaluation from '../components/ProductEvaluation';

export class ProductDetails extends Component {
  static async getProductDetails(itemId) {
    const product = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
    return product.json();
  }

  constructor(props) {
    super(props);
    this.state = { productFetch: {}, loading: true };
  }

  async componentDidMount() {
    const currentUrlId = window.location.href.split('/')[
      window.location.href.split('/').length - 1
    ];
    await ProductDetails.getProductDetails(currentUrlId).then((data) =>
      this.setState({ productFetch: data, loading: false })
    );
  }

  render() {
    const { productFetch, loading } = this.state;
    const { addProduct, carrinho } = this.props;
    return loading === true ? (
      // para passar no teste
      <div>
        <Link to="/cart">
          <ShoppingCartBtn carrinho={carrinho} />
        </Link>
        <Loading />
      </div>
    ) : (
      <div>
        <Link to="/cart">
          <ShoppingCartBtn carrinho={carrinho} />
        </Link>
        <h1>Product Details</h1>
        <h3 data-testid="product-detail-name">{productFetch.title}</h3>
        <p>Quantidade vendida: {productFetch.sold_quantity}</p>
        <h3>Preço: R$ {productFetch.price}</h3>
        <ProductDetailAddCart addProduct={addProduct} product={productFetch} />
        {productFetch.pictures.map((item) => (
          <img
            key={item.id}
            src={item.url}
            alt={`Imagem de ${productFetch.title}`}
          />
        ))}
        <ProductEvaluation />
      </div>
    );
  }
}

export default ProductDetails;
