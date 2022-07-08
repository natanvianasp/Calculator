import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

type DisplayProps = {
  number: String;
};

const Display = ({number}: DisplayProps) => {
  const [value, setValue] = useState('0');

  useEffect(() => {
    setValue(number.toString());
  }, [number]);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          value?.length < 6
            ? {fontSize: 100}
            : value?.length > 8
            ? {fontSize: 40}
            : {fontSize: 60},
        ]}>
        {number}
      </Text>
    </View>
  );
};

export default Display;
