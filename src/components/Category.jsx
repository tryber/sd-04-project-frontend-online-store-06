import React, { Component } from 'react';

class Categorie extends Component {
  render() {
    const { categorie, onClick } = this.props;
    const { id, name } = categorie;

    return (
      <div>
        <input
          data-testid="category"
          type="radio"
          name="category"
          id={id}
          onClick={(event) => {
            onClick(event);
          }}
        />
        <label htmlFor={id}>{name}</label>
      </div>
    );
  }
}

export default Categorie;
