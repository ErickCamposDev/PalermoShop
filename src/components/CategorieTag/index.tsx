import React, {FC} from 'react';
import {Text, TouchableOpacity, GestureResponderEvent} from 'react-native';
import styles from './styles';

interface CategoryTagProps {
  title: string;
  selected: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

const CategoryTag: FC<CategoryTagProps> = ({title, selected, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, selected && styles.selectedContainer]}>
      <Text style={[styles.text, selected && styles.selectedText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export {CategoryTag};
