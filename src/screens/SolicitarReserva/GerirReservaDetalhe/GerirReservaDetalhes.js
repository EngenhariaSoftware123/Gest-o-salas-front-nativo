import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ScrollView} from 'react-native';
import {StyledView, TextTitle, BoxGerir, TextDetails} from './Styles'; // Importe os estilos compartilhados

export default function GerirReservaDetalhes({route}) {
  const {reservaId} = route.params || {};

  const [completedServices, setCompletedServices] = useState([]);
  const [canceledServices, setCanceledServices] = useState([]);
  const [spaces, setSpaces] = useState({}); // Estado para armazenar informações das salas

  useEffect(() => {
    // Buscar todas as reservas para encontrar a sala correta
    axios
      .get(`https://gestao-de-espaco-api.onrender.com/space/get-space-requests`)
      .then(response => {
        const reserva = response.data.find(reserva => reserva.id === reservaId);
        if (reserva) {
          // Se encontrar a reserva, buscar informações da sala específica
          axios
            .get(`https://gestao-de-espaco-api.onrender.com/space/get-spaces`)
            .then(response => {
              const spaceTrue = response.data.find(
                space => space.id === reserva.spaceId,
              );
              setSpaces(spaceTrue);
            })
            .catch(error => {
              console.log(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [reservaId]);

  useEffect(() => {
    // Buscar todos os serviços concluídos e cancelados
    axios
      .get(
        `https://gestao-de-espaco-api.onrender.com/maintenance/get-maintenance`,
      )
      .then(response => {
        const data = response.data;
        const completed = data.filter(
          service => service.status === 'Concluído',
        );
        const canceled = data.filter(service => service.status === 'Cancelado');
        setCompletedServices(completed);
        setCanceledServices(canceled);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // Função para formatar data e hora
  const formatDateTime = dateTime => {
    const date = new Date(dateTime);
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    const formattedTime = `${date.getHours()}:${date.getMinutes()}`;
    return {date: formattedDate, time: formattedTime};
  };

  return (
    <ScrollView contentContainerStyle={{padding: 20}}>
      <StyledView>
        <TextTitle>Detalhes dos Serviços Concluídos:</TextTitle>
        {completedServices.map(service => {
          const formattedInitialPeriod = formatDateTime(service.initial_Period);
          const formattedEndPeriod = formatDateTime(service.end_Period);

          return (
            <BoxGerir
              key={service.id}
              completed={service.status === 'Concluído'}>
              {spaces ? (
                <>
                  <TextDetails>Nome da Sala: {spaces.name}</TextDetails>
                  <TextDetails>Pavilhão: {spaces.pavilion}</TextDetails>
                </>
              ) : (
                <TextDetails>Nome da Sala: Não disponível</TextDetails>
              )}
              <TextDetails>
                Período Inicial: {formattedInitialPeriod.date} às{' '}
                {formattedInitialPeriod.time}
              </TextDetails>
              <TextDetails>
                Período Final: {formattedEndPeriod.date} às{' '}
                {formattedEndPeriod.time}
              </TextDetails>
              <TextDetails>
                Descrição do Serviço: {service.description}
              </TextDetails>
              <TextDetails>Status: {service.status}</TextDetails>
            </BoxGerir>
          );
        })}
      </StyledView>
      <StyledView>
        <TextTitle>Detalhes dos Serviços Cancelados:</TextTitle>
        {canceledServices.map(service => {
          const formattedInitialPeriod = formatDateTime(service.initial_Period);
          const formattedEndPeriod = formatDateTime(service.end_Period);

          return (
            <BoxGerir
              key={service.id}
              canceled={service.status === 'Cancelado'}>
              {spaces ? (
                <>
                  <TextDetails>Nome da Sala: {spaces.name}</TextDetails>
                  <TextDetails>Pavilhão: {spaces.pavilion}</TextDetails>
                </>
              ) : (
                <TextDetails>Nome da Sala: Não disponível</TextDetails>
              )}
              <TextDetails>
                Período Inicial: {formattedInitialPeriod.date} às{' '}
                {formattedInitialPeriod.time}
              </TextDetails>
              <TextDetails>
                Período Final: {formattedEndPeriod.date} às{' '}
                {formattedEndPeriod.time}
              </TextDetails>
              <TextDetails>
                Descrição do Serviço: {service.description}
              </TextDetails>
              <TextDetails>Status: {service.status}</TextDetails>
            </BoxGerir>
          );
        })}
      </StyledView>
    </ScrollView>
  );
}
