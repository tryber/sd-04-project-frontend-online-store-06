import React, { Component } from 'react';

class Categorie extends Component {
  render() {
    const { categorie, onClick } = this.props;
    const { id, name } = categorie;

    return (
      <div data-testid="category">
        <input type="radio" name="category" id={id} onClick={(event) => { onClick(event) }} />
        <label htmlFor={id}>{name}</label>
      </div>
    );
  }
}

export default Categorie;
