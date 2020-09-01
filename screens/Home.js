import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, FlatList, RefreshControl} from 'react-native';
import ColorSection from '../components/colorSection';

const Home = ({navigation}) => {
  const [palette, setPalette] = useState([]);

  const getData = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    const palettes = await response.json();
    setPalette(palettes);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={palette}
        keyExtractor={item => item.id.toString()}
        renderItem={({item: {colors, paletteName}}) => (
          <ColorSection
            navigation={navigation}
            colors={colors}
            name={paletteName}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Home;
