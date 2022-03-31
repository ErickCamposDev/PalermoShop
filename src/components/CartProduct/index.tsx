import React, {FC} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {theme} from '../../theme';
import {IProduct} from '../../types/product';
import {BoldText} from '../BoldText';
import styles from './styles';
import MoreIcon from '../../assets/icons/more.svg';
import ReduceIcon from '../../assets/icons/reduce.svg';

interface CartProductProps {
  product: IProduct;
}

const CartProduct: FC<CartProductProps> = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: product.image}} />
        <View style={styles.textContainer}>
          <BoldText numberOfLines={1} text={product.title} fontSize={16} />
          <BoldText
            text={`1x $${product.price}`}
            color={theme.colors.primary}
            fontSize={16}
          />
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.reduceContainer}>
          <ReduceIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreContainer}>
          <MoreIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {CartProduct};
