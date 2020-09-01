import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ColorBox = ({name, code}) => {
  const boxColor = {
    backgroundColor: code,
  };

  const textColor = {
    color:
      parseInt(code.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white',
  };

  return (
    <View style={[styles.colorBoxes, boxColor, styles.boldText]}>
      <Text style={[styles.boxText, textColor]}>
        {name}: {code}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  colorBoxes: {
    marginVertical: 5,
  },
  boxText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    padding: 5,
  },
});

export default ColorBox;
