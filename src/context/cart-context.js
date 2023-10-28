import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {
    console.log(item);
  },
  removeItem: (id) => {
    console.log(id);
  },
  clearCart: () => {},
});

export default CartContext;
