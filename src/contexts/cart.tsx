import React, {createContext, useState} from 'react';
import {ICartContext} from '../types/cart';

const CartContext = createContext<ICartContext | null>(null);

const CartProvider: React.FC<React.ReactNode> = ({children}) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{cartItems: cart, setCart}}>
      {children}
    </CartContext.Provider>
  );
};

export {CartProvider, CartContext};
