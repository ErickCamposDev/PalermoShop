import React, {FC} from 'react';
import {View} from 'react-native';
import {BoldText} from '../BoldText';
import styles from './styles';

interface FilterCategoriesTextProps {}

const FilterCategoriesText: FC<FilterCategoriesTextProps> = ({}) => {
  return (
    <View style={styles.container}>
      <BoldText fontSize={10} color={'#6F6F6F'} text="Filtrar por categoria" />
    </View>
  );
};

export {FilterCategoriesText};
