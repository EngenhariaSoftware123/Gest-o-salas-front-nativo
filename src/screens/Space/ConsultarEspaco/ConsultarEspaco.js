import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import FavoriteSpaceItem from '../../../components/favoriteSpaceItem.js';
import {useNavigation} from '@react-navigation/native';

export default function ConsultSpace({route}) {
  const navigation = useNavigation();
  const [spaces, setSpaces] = useState([]);
  const {email, roles} = route.params;

  const ReservaSemSolicitacao = () => {
    navigation.navigate('ReservaSemSolicitacao');
    console.log('Reservas sem solicitação');
  };

  const GerirServicos = () => {
    navigation.navigate('GerirServicos');
    console.log('Gerir Serviços');
  };

  const GerirReserva = () => {
    navigation.navigate('GerirReserva', {email: email});
    console.log('Gerir Reserva');
  };

  useEffect(() => {
    axios
      .get('https://gestao-de-espaco-api.onrender.com/space/get-spaces')
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

  const isMaster = roles.includes('MASTER');
  const isReserva = roles.includes('RESERVA');
  const isServico = roles.includes('SERVICO');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Espaços</Text>
      <View style={styles.containerBox}>
        {isReserva && (
          <TouchableOpacity style={styles.button} onPress={GerirReserva}>
            <Text style={styles.buttonText}>Gerir Reserva</Text>
          </TouchableOpacity>
        )}
        {(isReserva || isServico) && (
          <TouchableOpacity
            style={styles.button}
            onPress={ReservaSemSolicitacao}>
            <Text style={styles.buttonText}>Reserva sem solicitação</Text>
          </TouchableOpacity>
        )}
        {isServico && (
          <TouchableOpacity style={styles.button} onPress={GerirServicos}>
            <Text style={styles.buttonText}>Gerir Serviços</Text>
          </TouchableOpacity>
        )}
        {isMaster && (
          <TouchableOpacity style={styles.button} onPress={CadastrarEspaco}>
            <Text style={styles.buttonText}>Cadastrar Espaço</Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView contentContainerStyle={styles.gridContainer}>
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
              acessibility: space.space.acessibility,
              roles: roles,
            }}
          />
        ))}
      </ScrollView>
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
  containerBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Alternativamente, use 'center' ou 'space-around'
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10, // Ajuste conforme necessário
    marginHorizontal: 5, // Ajuste conforme necessário
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
