import React from 'react';
import {CartProvider} from './src/contexts/cart';
import {Routes} from './src/routes';

const App = () => {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
};

export default App;
