import React, { Component } from 'react';
import PaymentMethods from '../components/PaymentMethods';
import BuyerInfo from '../components/BuyerInfo';
import RevisionProduct from '../components/RevisionProduct';

class Checkout extends Component {
  render() {
    const { carrinho } = this.props;
    return (
      <div>
        <h1>Checkout Page</h1>
        <RevisionProduct carrinho={carrinho}/>
        <BuyerInfo />
        <PaymentMethods />
      </div>
    );
  }
}

export default Checkout;
