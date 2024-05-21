import React, {useEffect, useState} from 'react';
import {ScrollView, Alert} from 'react-native';
import {View, TextTitle} from './Styles.js'; // Importe seus estilos
import axios from 'axios';
import {CancelarReservaSpace} from '../../../components/SolicitarReservasItem/SolicitarReservasItem.js';

export default function GerirReserva({route}) {
  const {email, pavilion, name, roles} = route.params || {};

  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    fetchReservas();
  }, []);

  const fetchReservas = () => {
    axios
      .get(`https://gestao-de-espaco-api.onrender.com/space/get-space-requests`)
      .then(response => {
        setReservas(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleStatusChange = async (id, status) => {
    console.log('STATUS', status);
    console.log(id);
    axios
      .put(
        `https://gestao-de-espaco-api.onrender.com/space/update-status-space-request/${id}`,
        {
          status: status,
        },
      )
      .then(response => {
        Alert.alert('Status da reserva atualizado com sucesso');
        fetchReservas(); // Atualiza a lista após alterar o status
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Erro ao atualizar o status da reserva');
      });
  };

  return (
    <ScrollView>
      <View>
        <TextTitle>Gerir Reserva</TextTitle>
        {reservas.map(reserva => (
          <CancelarReservaSpace
            key={reserva.id}
            reserva={reserva}
            handleStatusChange={handleStatusChange}
          />
        ))}
      </View>
    </ScrollView>
  );
}
