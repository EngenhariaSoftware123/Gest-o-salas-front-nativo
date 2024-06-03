import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';
import FavoriteSpaceItem from '../../../components/favoriteSpaceItem.js';
import {useNavigation} from '@react-navigation/native';

export default function DetalhesEspaços({route}) {
  const {name, location, typeRoom, capacity, email, id, acessibility} =
    route.params;
  const navigation = useNavigation();
  const [spaces, setSpaces] = useState([]);
  const solicitarManutencao = () => {
    navigation.navigate('Manutenção', {
      email: email,
      spaceName: name,
      spaceId: id,
      location: location,
    });
    console.log('Solicitando manutenção...');
  };
  const ReservaSolicitar = () => {
    navigation.navigate('SolicitarReserva', {
      email: email,
      spaceName: name,
      spaceId: id,
    });
    console.log('Solictando Reserva');
  };

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
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>Pavilhão: {location}</Text>
      <Text style={styles.description}>Tipo de Sala:{typeRoom}</Text>
      <Text style={styles.description}>Capacidade: {capacity}</Text>
      <Text style={styles.description}>
        Acessibilidade:{' '}
        {acessibility.map((acess, index) => (
          <Text key={index}>
            {acess}
            {index !== acessibility.length - 1 ? ', ' : ''}
          </Text>
        ))}
      </Text>

      <TouchableOpacity style={styles.button} onPress={ReservaSolicitar}>
        <Text style={styles.buttonText}>Solicitar Reserva</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={solicitarManutencao}>
        <Text style={styles.buttonText}>Solicitar Manutenção</Text>
      </TouchableOpacity>
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
  description: {
    marginTop: 15,
    fontSize: 20,
    textAlign: 'left',
    marginBottom: 10,
  },
  containerRow: {
    display: 'flex',
    flexDirection: 'row',
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
