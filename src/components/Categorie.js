import React, { Component } from 'react';

class Categorie extends Component {
  render() {
    const { categorie, onClick } = this.props;
    const { id, name } = categorie;

    return (
      <div data-testid="category">
        <h4 id={id} onClick={(event) => { onClick(event) }}>{name}</h4>
      </div>
    );
  }
}

export default Categorie;
