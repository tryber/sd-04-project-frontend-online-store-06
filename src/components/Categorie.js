import React, { Component } from 'react';

class Categorie extends Component {
  render() {
    const { categorie, onClick } = this.props;
    const { id, name } = categorie;

    return (
      <div data-testid="category">
        <a id={id} onClick={(event) => { onClick(event) }}>{name}</a>
      </div>
    );
  }
}

export default Categorie;
