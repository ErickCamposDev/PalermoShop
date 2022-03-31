import React, {FC, useContext} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {BoldText} from '../../components/BoldText';
import {CartHeader} from '../../components/CartHeader';
import {CartProduct} from '../../components/CartProduct';
import {EmptyCart} from '../../components/EmptyCart';
import {PriceCart} from '../../components/PriceCart';
import {PrimaryButton} from '../../components/PrimaryButton';
import {CartContext} from '../../contexts/cart';
import {ICartContext} from '../../types/cart';
import {IProduct} from '../../types/product';
import styles from './styles';

interface CartProps { }

const Cart: FC<CartProps> = ({ }) => {
  const {cartItems} = useContext(CartContext) as ICartContext;

  const calculatePrice = () => {
    let totalPrice = 0;
    cartItems.map((item: IProduct) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };

  const renderCartItems = () =>
    cartItems.length === 0 ? (
      <EmptyCart />
    ) : (
      <ScrollView>
        {cartItems.map((product: IProduct, i) => (
          <CartProduct key={`${product.id + i}`} product={product} />
        ))}
      </ScrollView>
    );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <CartHeader />
        <View style={styles.textContainer}>
          <BoldText text="Meu Carrinho" fontSize={24} />
        </View>
        {renderCartItems()}
      </View>
      <PriceCart price={`${calculatePrice()}`} />
      <View style={styles.buttonContainer}>
        <PrimaryButton title="FINALIZAR COMPRA" />
      </View>
    </SafeAreaView>
  );
};

export {Cart};
