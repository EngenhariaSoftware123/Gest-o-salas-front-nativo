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
  const [space, setSpace] = useState({});

  useEffect(() => {
    console.log(spaceId);
    axios
      .get('https://gestao-de-espaco-api.onrender.com/space/get-spaces')
      .then(function (response) {
        const spaceTrue = response.data.filter(
          space => space.space.id === spaceId,
        );
        setSpace(spaceTrue[0].space);
        console.log(spaceTrue[0].space);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  const cancelarReserva = () => {
    handleStatusChange(id, 'CANCELADO');
  };

  const aprovarReserva = () => {
    handleStatusChange(id, 'CONCLUIDO');
  };
  // Function to format date and time
  const formatDateTime = dateTime => {
    const date = new Date(dateTime);
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    const formattedTime = `${date.getHours()}:${date.getMinutes()}`;
    return {date: formattedDate, time: formattedTime};
  };
  // Format initial and end periods
  const formattedInitialPeriod = formatDateTime(initial_Period);
  const formattedEndPeriod = formatDateTime(end_Period);

  return (
    <ScrollView>
      <View>
        <TextTitle>Nome: {space.name}</TextTitle>
        <TextTitle>Pavilhão: {space.pavilion}</TextTitle>
        <TextTitle>
          Período Inicial: {formattedInitialPeriod.date} às{' '}
          {formattedInitialPeriod.time}
        </TextTitle>
        <TextTitle>
          Período Final: {formattedEndPeriod.date} às {formattedEndPeriod.time}
        </TextTitle>

        <ButtonContainer>
          <ApproveButton title="Aprovar Reserva" onPress={aprovarReserva} />
          <CancelButton title="Cancelar Reserva" onPress={cancelarReserva} />
        </ButtonContainer>
      </View>
    </ScrollView>
  );
};
