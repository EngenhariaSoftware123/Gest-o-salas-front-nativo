import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {
  View,
  TextTitle,
  ButtonContainer,
  ApproveButton,
  CancelButton,
  TextLocation,
} from './Styles';
import axios from 'axios';

export const CancelarReservaSpace = ({reserva, handleStatusChange}) => {
  const {id, spaceId, name, location, initial_Period, end_Period} = reserva;
  const [space, setSpace] = useState({}); // Initialize with null

  useEffect(() => {
    console.log(spaceId);
    axios
      .get('https://gestao-de-espaco-api.onrender.com/space/get-spaces')
      .then(function (response) {
        const spaceTrue = response.data.filter(
          space => space.space.id === spaceId,
        );
        setSpace(spaceTrue);
        console.log(space.space);
        // Assuming spaceTrue contains only one element
        // Log the filtered space(s)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]); // Include id in the dependency array if it might change

  const cancelarReserva = () => {
    handleStatusChange(id, 'CANCELADO');
  };

  const aprovarReserva = () => {
    handleStatusChange(id, 'CONCLUIDO');
  };

  return (
    <ScrollView>
      <View>
        <TextTitle>Nome: {space.name}</TextTitle>
        <TextLocation>Pavilhão: {location}</TextLocation>
        <TextTitle>Período Inicial: {initial_Period}</TextTitle>
        <TextTitle>Período Final: {end_Period}</TextTitle>

        <ButtonContainer>
          <ApproveButton title="Aprovar Reserva" onPress={aprovarReserva} />
          <CancelButton title="Cancelar Reserva" onPress={cancelarReserva} />
        </ButtonContainer>
      </View>
    </ScrollView>
  );
};
