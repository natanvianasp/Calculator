import React, { useEffect, useState } from "react";
import { Pressable, StyleProp, Text, ViewStyle } from "react-native";
import styles from "./styles";

type ButtonProps = {
  onPress: () => void;
  title?: string;
  isSpecial?: boolean;
  isGray?: boolean;
  isOperation?: boolean;
  asResult?: boolean;
  buttonStyle?: StyleProp<ViewStyle>
};

export const Button = ({
  title,
  isSpecial,
  isGray,
  isOperation,
  asResult,
  onPress,
}: ButtonProps) => {
  const [flex, setFlex] = useState(0);
  const [isPress, setIsPress] = useState(false);
  const [selected, setSelected] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    title === "0" ? setFlex(2) : setFlex(1);

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
      { flex: flex },
    ],
    onPressOut: () => {
      setIsPress(false);
    },

    onPressIn: () => {

      setIsPress(true);
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
    <Pressable onPress={onPress} {...touchProps}>
      <Text {...textProps}>{title}</Text>
    </Pressable>
  );
};
