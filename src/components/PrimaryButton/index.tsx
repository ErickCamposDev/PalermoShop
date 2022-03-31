import React, {FC} from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {BoldText} from '../BoldText';
import styles from './styles';

interface PrimaryButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <BoldText text={title} color="#FFFFFF" fontSize={16} />
    </TouchableOpacity>
  );
};

export {PrimaryButton};
