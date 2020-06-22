import React, { Component } from 'react';

class Category extends Component {
  render() {
    const { category, onClick } = this.props;
    const { id, name } = category;

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

export default Category;
