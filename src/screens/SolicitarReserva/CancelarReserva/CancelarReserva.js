import React, {useEffect, useState} from 'react';
import {ScrollView, Button, Alert} from 'react-native';
import {View, TextTitle} from './Styles.js'; // Aliased TextInput import
import axios from 'axios';
import {CancelarReservaSpace} from '../../../components/SolicitarReservasItem/SolicitarReservasItem.js';

export default function CancelarReserva({route}) {
  const {email, pavilion, name, roles} = route.params || {};
  useEffect(() => {
    console.log(email);
    if (email) {
      fetchReservas();
    }
  }, []);

  const [cancelarReservas, setCancelarReservas] = useState([]);
  useEffect(() => {}, []);
  const fetchReservas = () => {
    axios
      .get(
        `https://gestao-de-espaco-api.onrender.com/space/get-space-requests/${email}`,
      )
      .then(function (response) {
        console.log(response.data);
        setCancelarReservas(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = (email, id) => {
    axios
      .delete(
        `https://gestao-de-espaco-api.onrender.com/space/cancel-space-request/${email}/${id}`,
      )
      .then(function (response) {
        console.log(response.data);
        fetchReservas(); // Atualiza a lista após a exclusão
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <ScrollView>
      <View>
        <TextTitle>Cancelar Reserva</TextTitle>
        {cancelarReservas.map(reserva => (
          <CancelarReservaSpace
            key={reserva.id}
            space={{
              name: reserva.name,
              location: reserva.pavilion,
              id: reserva.id,
              initial_Period: reserva.initial_Period,
              end_Period: reserva.end_Period,
              email: email,
              handleDelete: handleDelete, // Passa a função de exclusão para o componente
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
}
