import React, { Component } from 'react';
import PaymentMethods from '../components/PaymentMethods';

class Checkout extends Component {
  render() {
    return (
      <div>
        <h1>Checkout Page</h1>
        <PaymentMethods />
      </div>
    );
  }
}

export default Checkout;
