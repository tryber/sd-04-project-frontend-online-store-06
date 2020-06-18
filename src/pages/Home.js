import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartBtn from '../components/ShoppingCartBtn';
import Categorie from '../components/Categorie';
import * as api from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories });
    });
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
            <Categorie key={categorie.id} categorie={categorie} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
