import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

export default function DetailsSpace({route}) {
  const {name, location, typeRoom, capacity, email, id, acessibility, roles} =
    route.params;
  const navigation = useNavigation();
  const [spaces, setSpaces] = useState([]);

  const solicitarManutencao = () => {
    navigation.navigate('Maintenance', {
      email: email,
      spaceName: name,
      spaceId: id,
    });
    console.log('Solicitando manutenção...');
  };

  const ReservaSolicitar = () => {
    navigation.navigate('SolicitarReserva', {
      email: email,
      spaceName: name,
      spaceId: id,
    });
    console.log('Solicitando Reserva');
  };

  const AlterarEspaco = () => {
    navigation.navigate('AlterarEspaco', {
      email: email,
      spaceName: name,
      spaceId: id,
    });
    console.log('Editando espaço');
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

  const isMaster = roles.includes('MASTER');
  const isAluno = roles.includes('ALUNO');
  const canRequest = roles.some(role =>
    ['PROFESSOR', 'SETOR', 'RESERVA', 'SERVICO'].includes(role),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>Pavilhão: {location}</Text>
      <Text style={styles.description}>Tipo de Sala: {typeRoom}</Text>
      <Text style={styles.description}>Capacidade: {capacity}</Text>
      <Text style={styles.description}>
        Acessibilidade:
        {acessibility.map((acess, index) => (
          <Text key={index}>
            {acess}
            {index !== acessibility.length - 1 ? ', ' : ''}
          </Text>
        ))}
      </Text>

      {(isMaster || canRequest) && (
        <>
          <TouchableOpacity style={styles.button} onPress={ReservaSolicitar}>
            <Text style={styles.buttonText}>Solicitar Reserva</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={solicitarManutencao}>
            <Text style={styles.buttonText}>Solicitar Manutenção</Text>
          </TouchableOpacity>
        </>
      )}
      {isMaster && (
        <TouchableOpacity style={styles.button} onPress={AlterarEspaco}>
          <Text style={styles.buttonText}>Editar Espaço</Text>
        </TouchableOpacity>
      )}
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
});
