import React, { Component } from 'react';
import AddAndDecItemCard from './AddAndDecItemCard';

class ItemCart extends Component {
  render() {
    const { produto, addProduct } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{produto.title}</p>
        <AddAndDecItemCard addProduct={addProduct} product={produto} />
      </div>
    );
  }
}

export default ItemCart;
