import React, {FC, useEffect, useRef} from 'react';
import {Animated, GestureResponderEvent} from 'react-native';
import {PrimaryButton} from '../PrimaryButton';
import styles from './styles';

interface AnimatedButtonProps {
  isOpen: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

const AnimatedButton: FC<AnimatedButtonProps> = ({isOpen, onPress}) => {
  const animatedValue = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOpen ? 0 : 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const animatedHeight = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });

  return (
    <Animated.View
      style={[styles.container, {transform: [{translateY: animatedHeight}]}]}>
      <PrimaryButton onPress={onPress} title="IR PARA CARRINHO" />
    </Animated.View>
  );
};

export {AnimatedButton};
