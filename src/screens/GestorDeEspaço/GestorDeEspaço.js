import React, { useState, useEffect } from 'react';
import {
  Container,
  TextTitle,
  TextLabel,
  StyledTextInput,
  TouchableOpacity,
  TextButton,
} from './Styles.js'; // Importando estilos corretamente
import axios from 'axios';
import { Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CheckBox from '../../components/CheckBox/index.js';

export default function GestorDeEspaço({ route }) {
  const [selectedSpaceId, setSelectedSpaceId] = useState(0);
  const [selectedSpaceName, setSelectedSpaceName] = useState('');
  const [emailGestor, setEmailGestor] = useState('');
  const [reserva, setReserva] = useState(''); // Estado para armazenar o tipo de reserva ou serviço selecionado
  const [spaces, setSpaces] = useState([]);

  const Reserva = [
    { text: 'Reserva', id: 1 },
    { text: 'Serviço', id: 2 },
  ];

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

  const handleSpaceChange = (spaceId, spaceName) => {
    setSelectedSpaceId(spaceId);
    setSelectedSpaceName(spaceName);
    console.log('Pesquisar Local: ', spaceName); // Imprime o nome do espaço selecionado no console
  };

  const handleInputChange = () => {
    const combinedText = `${emailGestor};${selectedSpaceName};${reserva}`;
    console.log('Email do Gestor: ', emailGestor);
    console.log('Pesquisar Local: ', selectedSpaceName);
    console.log('Reserva ou de Serviço: ', reserva);
    console.log('Texto Combinado: ', combinedText);

    axios
      .post(
        'https://gestao-de-espaco-api.onrender.com/manager/create-manager',
        {
          email: emailGestor,
          type: reserva,
          spaceId: selectedSpaceId,
        },
      )
      .then(function (response) {
        Alert.alert(`Gestor cadastrado com sucesso`);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log('Erro na requisição POST:', error);
        Alert.alert(
          'Erro',
          'Ocorreu um erro ao cadastrar o gestor',
          [{ text: 'OK', onPress: () => { } }],
          { cancelable: false },
        );
      });
  };

  const handleReservaChange = (selectedOption, selectedText) => {
    console.log('ID Selecionado: ', selectedOption);
    console.log('Texto Selecionado: ', selectedText);
    setReserva(selectedText); // Armazena o texto da opção selecionada
  };

  return (
    <Container>
      <TextTitle>Vincular Gestor de Espaço</TextTitle>

      <TextLabel>E-mail do Gestor</TextLabel>
      <StyledTextInput
        multiline
        placeholder="Digite E-mail do Gestor"
        value={emailGestor}
        onChangeText={text => setEmailGestor(text)}
      />

      <TextLabel>Pesquisar Local</TextLabel>
      <Picker
        selectedValue={selectedSpaceId}
        onValueChange={(itemValue, itemIndex) =>
          handleSpaceChange(itemValue, spaces[itemIndex - 1]?.space.name || '')
        }>
        <Picker.Item label="Selecione o local" value="" />
        {spaces.map(space => (
          <Picker.Item
            key={space.space.id}
            label={space.space.name}
            value={space.space.id}
          />
        ))}
      </Picker>

      <TextLabel>Reserva ou Serviço</TextLabel>
      <CheckBox options={Reserva} onChange={handleReservaChange} />

      <TouchableOpacity onPress={handleInputChange}>
        <TextButton>Vincular</TextButton>
      </TouchableOpacity>
    </Container>
  );
}
