import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartBtn from '../components/ShoppingCartBtn';
import Categorie from '../components/Category';
import InputSearch from '../components/InputSearch';
import * as api from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoryId: '',
      renderSearch: false, // trouxe do InputSearch, p/ centralizar
      textSearch: '',
      resultProducts: [],
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onSearchProduct = this.onSearchProduct.bind(this);
    this.getCategory = this.getCategory.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories });
    });
  }

  componentDidUpdate() {}

  onSearchProduct() {
    const { categoryId, textSearch } = this.state;
    api
      .getProductsFromCategoryAndQuery(categoryId, textSearch)
      .then((response) => {
        // pegar só os dados do response
        this.setState({ resultProducts: response.results, renderSearch: true }); // aramazena no meu state
      });
  }

  onChangeText(event) {
    const { value } = event.target;
    this.setState({ textSearch: value });
  }

  async getCategory(event) {
    console.log('passou aqui');
    const { id } = event.target;
    await this.setState({ categoryId: id });
    this.onSearchProduct(); // chama requisição
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
        <Link to="/cart">
          <ShoppingCartBtn />
        </Link>
        <div>
          {categories.map((categorie) => (
            <Categorie
              key={categorie.id}
              onClick={this.getCategory}
              categorie={categorie}
            />
          ))}
        </div>
        <InputSearch
          state={this.state}
          onSearchProduct={this.onSearchProduct}
          onChangeText={this.onChangeText}
        />
      </div>
    );
  }
}

export default Home;
