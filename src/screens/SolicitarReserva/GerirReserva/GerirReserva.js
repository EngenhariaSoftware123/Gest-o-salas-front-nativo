import React, {useEffect, useState} from 'react';
import {ScrollView, Alert, Button} from 'react-native';
import {View, TextTitle} from './Styles.js'; // Importe seus estilos
import axios from 'axios';
import {CancelarReservaSpace} from '../../../components/SolicitarReservasItem/SolicitarReservasItem.js';
import {useNavigation} from '@react-navigation/native';

export default function GerirReserva({route}) {
  const {email, pavilion, name, roles} = route.params || {};

  const [reservas, setReservas] = useState([]);
  const [salas, setSalas] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    buscarReservas();
    buscarSalas();
  }, []);

  const buscarReservas = () => {
    axios
      .get(`https://gestao-de-espaco-api.onrender.com/space/get-space-requests`)
      .then(response => {
        setReservas(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const buscarSalas = () => {
    axios
      .get(`https://gestao-de-espaco-api.onrender.com/space/get-spaces`)
      .then(response => {
        setSalas(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleStatusChange = async (id, status) => {
    axios
      .put(
        `https://gestao-de-espaco-api.onrender.com/space/update-status-space-request/${id}`,
        {
          status: status,
        },
      )
      .then(response => {
        Alert.alert('Status da reserva atualizado com sucesso');
        buscarReservas(); // Atualiza a lista após alterar o status
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Erro ao atualizar o status da reserva');
      });
  };

  const navigateToReservaDetalhes = () => {
    navigation.navigate('GerirReservaDetalhes');
  };

  return (
    <ScrollView>
      <View>
        <TextTitle>Gerir Reserva</TextTitle>
        <Button
          title="Ver Reservas Finalizadas"
          onPress={navigateToReservaDetalhes}
        />
        {reservas.map(reserva => {
          const sala = salas.find(s => s.space.id === reserva.spaceId);
          if (sala) {
            return (
              <CancelarReservaSpace
                key={reserva.id}
                reserva={{...reserva, sala}}
                handleStatusChange={handleStatusChange}
              />
            );
          } else {
            return null; // ou exiba uma mensagem de erro, caso não encontre a sala correspondente
          }
        })}
      </View>
    </ScrollView>
  );
}
