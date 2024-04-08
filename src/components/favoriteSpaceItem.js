import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FavoriteSpaceItem = ({space}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.spaceName}>{space.name}</Text>
      <Text style={styles.spaceLocation}>{space.location}</Text>
      {/* Adicione outros detalhes do espaço conforme necessário */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginLeft: 10,
    marginBottom: 10,
    width: 200,
    height: 100,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  spaceName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  spaceLocation: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default FavoriteSpaceItem;
