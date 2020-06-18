import React, { Component } from 'react';

class Categorie extends Component {
  render() {
    const { categorie } = this.props;
    return (
      <div data-testid="category">
        <h4>{categorie.name}</h4>
      </div>
    );
  }
}

export default Categorie;
