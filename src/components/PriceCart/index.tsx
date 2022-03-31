import React, {FC} from 'react';
import {View} from 'react-native';
import {BoldText} from '../BoldText';
import styles from './styles';

interface PriceCartProps {
  price: string;
}

const PriceCart: FC<PriceCartProps> = ({price}) => {
  return (
    <View style={styles.container}>
      <BoldText text="Total:" fontSize={16} />
      <BoldText text={`$${price}`} fontSize={16} />
    </View>
  );
};

export {PriceCart};
