import React, {FC} from 'react';
import {Text} from 'react-native';
import styles from './styles';

interface BoldTextProps {
  text: string;
  fontSize: number;
  color?: string;
  numberOfLines?: number;
}

const BoldText: FC<BoldTextProps> = ({
  text,
  fontSize,
  color,
  numberOfLines,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles.text, {fontSize: fontSize, color: color}]}>
      {text}
    </Text>
  );
};

export {BoldText};
