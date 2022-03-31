import React, {FC, useContext} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {theme} from '../../theme';
import {BoldText} from '../BoldText';
import styles from './styles';
import Add from '../../assets/icons/add.svg';
import {IProduct} from '../../types/product';
import {CartContext} from '../../contexts/cart';
import {ICartContext} from '../../types/cart';

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({product}) => {
  const {cartItems, setCart} = useContext(CartContext) as ICartContext;

  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <View style={styles.margin}>
        <BoldText
          text={product.category}
          fontSize={10}
          color={theme.colors.primary}
        />
      </View>
      <BoldText numberOfLines={2} text={product.title} fontSize={14} />
      <Text numberOfLines={4} style={styles.regularText}>
        {product.description}
      </Text>
      <View style={styles.row}>
        <BoldText
          text={`$${product.price}`}
          fontSize={20}
          color={theme.colors.primary}
        />
        <TouchableOpacity onPress={() => setCart([...cartItems, product])}>
          <Add width={30} height={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {ProductItem};
