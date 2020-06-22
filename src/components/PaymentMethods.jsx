import React, { Component } from 'react';

import barcode from '../img/barcode.png';
import visa from '../img/visa.png';
import mastercard from '../img/mastercard.png';
import elo from '../img/elo.png';

class PaymentMethods extends Component {
  render() {
    return (
      <div>
        <h3>Método de Pagamento</h3>
        <div>
          <h5>Boleto</h5>
          <input type="radio" id="boleto" name="payment" value="boleto" />
          <label htmlFor="boleto">
            <img src={barcode} alt="" />
          </label>
          <h5>Cartão de Crédito</h5>
          <input type="radio" id="visa" name="payment" value="visa" />
          <label htmlFor="visa">Visa</label>
          <img src={visa} alt="" />
          <input
            type="radio"
            id="mastercard"
            name="payment"
            value="mastercard"
          />
          <label htmlFor="mastercard">MasterCard</label>
          <img src={mastercard} alt="" />
          <input type="radio" id="elo" name="payment" value="elo" />
          <label htmlFor="elo">Elo</label>
          <img src={elo} alt="" />
        </div>
      </div>
    );
  }
}

export default PaymentMethods;
