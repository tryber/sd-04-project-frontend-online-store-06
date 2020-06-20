import React, { Component } from 'react';
import ProductList from './ProductList';

class InputSearch extends Component {
  render() {
    const { onChangeText, state, onSearchProduct } = this.props;
    const { textSearch, resultProducts, renderSearch } = state;
    return (
      <div>
        <input
          data-testid="query-input"
          value={textSearch}
          onChange={onChangeText}
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={() => {
            onSearchProduct();
          }}
        >
          Pequisar Produto{' '}
        </button>
        {renderSearch ? <ProductList products={resultProducts} /> : ''}
      </div>
    );
  }
}

export default InputSearch;
