import React from 'react';
import {TouchableOpacity, Text, StyleSheet, FlatList, View} from 'react-native';

const ColorSection = ({navigation, name, colors}) => {
  const displayColors = colors.slice(0, 5);
  return (
    <TouchableOpacity
      style={styles.sectionStyle}
      onPress={() =>
        navigation.navigate('ColorPalette', {
          name: name,
          COLORS: colors,
        })
      }>
      <Text style={styles.textStyle}>{name}</Text>
      <FlatList
        horizontal={true}
        data={displayColors}
        keyExtractor={item => item.colorName}
        renderItem={({item}) => {
          const fillColor = {
            backgroundColor: item.hexCode,
          };
          return <View style={[styles.viewBox, fillColor]} />;
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sectionStyle: {
    marginVertical: 5,
  },
  textStyle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  viewBox: {
    height: 50,
    width: 50,
    margin: 3,
  },
});

export default ColorSection;
