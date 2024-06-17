import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FavoriteSpaceItem from '../../../components/favoriteSpaceItem.js';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Title,
  ContainerBox,
  Button,
  ButtonText,
  GridContainer,
} from './Styles.js';

export default function ConsultarEspaço({route}) {
  const navigation = useNavigation();
  const [spaces, setSpaces] = useState([]);
  const {email} = route.params;

  const GerirServicos = () => {
    navigation.navigate('GerirServicos');
    console.log('Gerir Serviços');
  };

  const GerirReserva = () => {
    navigation.navigate('GerirReserva', {email: email});
    console.log('Gerir  Reserva');
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

  return (
    <Container>
      <Title>Espaços</Title>
      <ContainerBox>
        <Button onPress={GerirReserva}>
          <ButtonText>Gerir Reserva</ButtonText>
        </Button>

        <Button onPress={GerirServicos}>
          <ButtonText>Gerir Serviços</ButtonText>
        </Button>
        <Button onPress={CadastrarEspaco}>
          <ButtonText>Cadastrar Espaço</ButtonText>
        </Button>
      </ContainerBox>
      <GridContainer>
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
            }}
          />
        ))}
      </GridContainer>
    </Container>
  );
}
