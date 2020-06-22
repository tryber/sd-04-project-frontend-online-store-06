import React, { Component } from 'react';

class AddAndDecItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = { qtdItem: 1 };

    this.incrementValue = this.incrementValue.bind(this);
    this.decrementValue = this.decrementValue.bind(this);
  }

  incrementValue(qtdEstoque) {
    let qtdItem = this.state.qtdItem;
    qtdItem = isNaN(qtdItem) ? 0 : qtdItem;
    qtdItem = qtdItem >= qtdEstoque ? qtdEstoque : (qtdItem += 1);
    this.setState({ qtdItem });
  }

  decrementValue() {
    let qtdItem = this.state.qtdItem;
    qtdItem = isNaN(qtdItem) ? 0 : qtdItem;
    qtdItem = qtdItem <= 1 ? 1 : (qtdItem -= 1);
    this.setState({ qtdItem });
  }

  render() {
    const { qtdItem } = this.state;
    return (
      <div>
        <button onClick={this.decrementValue}>-</button>
        <input type="text" name="result" id="result" value={qtdItem} />
        <button onClick={this.incrementValue}>+</button>
      </div>
    );
  }
}

export default AddAndDecItemCard;
