import React, {useEffect, useState} from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

type ButtonProps = {
  onPress: () => void;
  title?: string;
  isSpecial?: boolean;
  isGray?: boolean;
  isOperation?: boolean;
};

export const Button = ({
  title,
  isSpecial,
  isGray,
  isOperation,
  onPress,
}: ButtonProps) => {
  const [flex, setFlex] = useState(0);
  const [isPress, setIsPress] = useState(false);
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    title === '0' ? setFlex(2) : setFlex(1);
  }, [title]);

  var touchProps = {
    style: [
      styles.button,
      selected && isOperation
        ? styles.isSelected
        : isGray
        ? styles.isGray
        : isSpecial
        ? styles.isRed
        : {},
      isPress ? styles.btnPress : styles.btnNormal,
      {flex: flex},
    ],
    onPressOut: () => setIsPress(false),
    onPressIn: () => {
      setIsPress(true);
      isOperation ? setSelected(false) : setSelected(false);
    },
  };

  var textProps = {
    style: [
      styles.text,
      selected && isOperation
        ? styles.textSelected
        : isGray || isSpecial
        ? styles.textLight
        : styles.textDark,
    ],
  };

  return (
    <Pressable
      onPress={onPress}
      {...touchProps}>
      <Text {...textProps}>{title}</Text>
    </Pressable>
  );
};
