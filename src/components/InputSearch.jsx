import React, { Component } from 'react';
import * as api from '../services/api';
import ProductList from './ProductList';

class InputSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderSearch: false,
      textSearch: '',
      resultProducts: [],
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onSearchProduct = this.onSearchProduct.bind(this);
  }

  onChangeText(event) {
    const { value } = event.target;
    this.setState({ textSearch: value });
  }

  onSearchProduct() {
    const { textSearch } = this.state;
    api.getProductsFromCategoryAndQuery('', textSearch).then((response) => {
      // pegar só os dados do response
      this.setState({ resultProducts: response.results, renderSearch: true }); // aramazena no meu state
    });
  }

  render() {
    const { textSearch, resultProducts, renderSearch } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          value={textSearch}
          onChange={this.onChangeText}
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={() => {
            this.onSearchProduct();
          }}
        >
          Pequisar Produto
        </button>
        {renderSearch ? (
          <ProductList products={resultProducts} query={textSearch} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default InputSearch;
