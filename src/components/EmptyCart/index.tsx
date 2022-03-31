import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface EmptyCartProps {}

const EmptyCart: FC<EmptyCartProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>EmptyCart</Text>
    </View>
  );
};

export {EmptyCart};
