import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BoldText} from '../BoldText';
import ArrowLeft from '../../assets/icons/arrowLeft.svg';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

interface CartHeaderProps {}

const CartHeader: FC<CartHeaderProps> = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft />
      </TouchableOpacity>
      <BoldText text="CARRINHO" color="#85868A" fontSize={14} />
      <View />
    </View>
  );
};

export {CartHeader};
