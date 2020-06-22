import React, { Component } from 'react';

import states from '../services/brazilStates';

class BuyerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyerInfo: {
        fullName: '',
        cpf: '',
        email: '',
        phone: '',
        cep: '',
        address: '',
        complement: '',
        number: '',
        city: '',
        state: '',
      },
    };

    this.createInput = this.createInput.bind(this);
    this.createOptions = this.createOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState((state) => ({
      buyerInfo: { ...state.buyerInfo, [id]: value },
    }));
    // console.log(this.state);
  }

  createInput(label, type, id, dataTestId) {
    const { buyerInfo } = this.state;
    return (
      <label htmlFor={id}>
        {label}
        <input
          type={type}
          id={id}
          value={buyerInfo.id}
          onChange={this.handleChange}
          data-testid={dataTestId}
        />
      </label>
    );
  }

  createOptions(arr) {
    return arr.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
  }

  render() {
    return (
      <div>
        {this.createInput(
          'Nome completo',
          'text',
          'fullName',
          'checkout-fullname'
        )}
        {this.createInput('CPF', 'text', 'cpf', 'checkout-cpf')}
        {this.createInput('Email', 'text', 'email', 'checkout-email')}
        {this.createInput('Telefone', 'text', 'phone', 'checkout-phone')}
        {this.createInput('CEP', 'text', 'cep', 'checkout-cep')}
        {this.createInput('Endereço', 'text', 'address', 'checkout-address')}
        {this.createInput('Complemento', 'text', 'complement')}
        {this.createInput('Número', 'text', 'number')}
        {this.createInput('Cidade', 'text', 'city')}
        <select id="state" onChange={this.handleChange}>
          {this.createOptions(states)}
        </select>
      </div>
    );
  }
}

export default BuyerInfo;
