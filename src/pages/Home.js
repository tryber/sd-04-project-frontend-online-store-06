import React, { Component } from 'react';
import * as api from '../services/api';
import Categorie from '../components/Categorie';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({
        categories,
      });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
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
