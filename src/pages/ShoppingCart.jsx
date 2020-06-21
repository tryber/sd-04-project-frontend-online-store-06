import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    const { carrinho } = this.props;
    console.log(carrinho);
    return (
      <div>
        <h1>Carrinho de compras</h1>
        {carrinho.length === 0 ? (
          <h3 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h3>
        ) : (
          carrinho.map((produto) => <h3 key={produto.id}>{produto.title}</h3>)
        )}
      </div>
    );
  }
}
export default ShoppingCart;






// class ShoppingCart extends Component {
//   render() {
//     return (
//       // condição para exibir mensagem de carrinho vazio ou exibir os produtos adicionados
//       <div>
//         <h1>Carrinho de compras</h1>
//         <h3 data-testid="shopping-cart-empty-message">
//           Seu carrinho está vazio
//         </h3>
//         <h5 data-testid="shopping-cart-product-name">
//           Produto: {localStorage.getItem('Product')}
//           {/* {title} */}
//         </h5>
//         <h6 data-testid="shopping-cart-product-quantity">
//           Quantidade: {localStorage.getItem('Quantity')}
//           {/* {available_quantity} */}
//         </h6>
//       </div>
//     );
//   }
// }
