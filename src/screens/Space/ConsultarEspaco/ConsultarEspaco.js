import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';
import FavoriteSpaceItem from '../../../components/favoriteSpaceItem.js';
import {useNavigation} from '@react-navigation/native';

export default function ConsultSpace({route}) {
  const navigation = useNavigation();
  const [spaces, setSpaces] = useState([]);
  const {email} = route.params;
  useEffect(() => {
    axios
      .get(`https://gestao-de-espaco-api.onrender.com/space/get-spaces`)
      .then(function (response) {
        console.log(response.data);
        setSpaces(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const CadastrarEspaco = () => {
    navigation.navigate('Space');
    console.log('Solicitando cadastro de espaço');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Espaços</Text>
      <TouchableOpacity style={styles.button} onPress={CadastrarEspaco}>
        <Text style={styles.buttonText}>Cadastrar Espaço</Text>
      </TouchableOpacity>
      <View style={styles.gridContainer}>
        {spaces.map((space, index) => (
          <FavoriteSpaceItem
            key={index}
            space={{
              name: space.space.name,
              location: space.space.pavilion,
              id: space.space.id,
              typeRoom: space.space.typeRoom,
              capacity: space.space.capacity,
              email: email,
            }}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: 200,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
