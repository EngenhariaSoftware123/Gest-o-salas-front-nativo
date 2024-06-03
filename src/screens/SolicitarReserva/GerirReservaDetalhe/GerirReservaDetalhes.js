import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ScrollView, View, Text} from 'react-native';
import {View as StyledView, TextTitle, BoxGerir} from './Styles'; // Importe os estilos compartilhados

export default function GerirReservaDetalhes() {
  const [completedServices, setCompletedServices] = useState([]);
  const [canceledServices, setCanceledServices] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://gestao-de-espaco-api.onrender.com/maintenance/get-maintenance`,
      )
      .then(function (response) {
        const data = response.data;
        const completed = data.filter(
          service => service.status === 'Concluído',
        );
        const canceled = data.filter(service => service.status === 'Cancelado');
        setCompletedServices(completed);
        setCanceledServices(canceled);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView>
      <StyledView>
        <TextTitle>Detalhes dos Serviços Concluídos:</TextTitle>
        {completedServices.map(service => (
          <BoxGerir key={service.id} completed={service.status === 'Concluído'}>
            <Text>Descrição do Serviço: {service.description}</Text>
            <Text>Status: {service.status}</Text>
            {service.space && (
              <Text>
                Nome da Sala: {service.space.name}, Pavilion:{' '}
                {service.space.pavilion}
              </Text>
            )}
          </BoxGerir>
        ))}
      </StyledView>
      <StyledView>
        <TextTitle>Detalhes dos Serviços Cancelados:</TextTitle>
        {canceledServices.map(service => (
          <BoxGerir key={service.id} canceled={service.status === 'Cancelado'}>
            <Text>Descrição do Serviço: {service.description}</Text>
            <Text>Status: {service.status}</Text>
            {service.space && (
              <Text>
                Nome da Sala: {service.space.name}, Pavilion:{' '}
                {service.space.pavilion}
              </Text>
            )}
          </BoxGerir>
        ))}
      </StyledView>
    </ScrollView>
  );
}
