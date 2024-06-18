import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const FavoriteSpaceItem = ({space}) => {
  const navigation = useNavigation();
  const detalhesEspaço = () => {
    navigation.navigate('DetalhesEspaços', {
      name: space.name,
      location: space.location,
      typeRoom: space.typeRoom,
      capacity: space.capacity,
      email: space.email,
      id: space.id,
      acessibility: space.acessibility,
      roles: space.roles,
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.spaceName}>{space.name}</Text>
      <Text style={styles.spaceLocation}>{space.location}</Text>
      <TouchableOpacity style={styles.button} onPress={detalhesEspaço}>
        <Text style={styles.buttonText}>Detalhes</Text>
      </TouchableOpacity>
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
    marginLeft: 5,
    marginBottom: 10,
    width: 200,
    height: 100,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 20,
    width: 100,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
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
