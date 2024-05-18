import React from 'react';
import {ScrollView} from 'react-native';
import {
  View,
  TextTitle,
  ButtonContainer,
  ApproveButton,
  CancelButton,
  TextLocation,
} from './Styles';

export const CancelarReservaSpace = ({reserva, handleStatusChange}) => {
  const {id, name, location, initial_Period, end_Period} = reserva;

  const cancelarReserva = () => {
    handleStatusChange(id, 'Cancelado');
  };

  const aprovarReserva = () => {
    handleStatusChange(id, 'Aprovado');
  };

  return (
    <ScrollView>
      <View>
        <TextTitle>Nome: {name}</TextTitle>
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
