import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';

import CartIcon from '../../assets/icons/cart.svg';
import {BoldText} from '../BoldText';
import {theme} from '../../theme';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title: string;
  numberOfItems: number;
}

const Header: FC<HeaderProps> = ({title, numberOfItems}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BoldText fontSize={18} text={title} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        {numberOfItems != 0 && (
          <View style={styles.numberContainer}>
            <BoldText
              fontSize={12}
              color={theme.colors.primary}
              text={`${numberOfItems}`}
            />
          </View>
        )}
        <CartIcon />
      </TouchableOpacity>
    </View>
  );
};

export {Header};
