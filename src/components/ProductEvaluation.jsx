import React, { Component } from 'react';

class ProductEvaluation extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    this.setState({ value: '' });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="comment">
          Escreva uma avaliação para o produto
          <textarea
            id="comment"
            value={value}
            onChange={this.handleChange}
            data-testid="product-detail-evaluation"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default ProductEvaluation;
