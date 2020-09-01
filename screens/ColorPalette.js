import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ColorBox from '../components/colorbox';

const ColorPalette = ({route}) => {
  return (
    <FlatList
      style={styles.container}
      data={route.params.COLORS}
      renderItem={({item}) => (
        <ColorBox name={item.colorName} code={item.hexCode} />
      )}
      keyExtractor={item => item.hexCode}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  boldText: {
    fontWeight: '600',
    padding: 3,
  },
});

export default ColorPalette;
