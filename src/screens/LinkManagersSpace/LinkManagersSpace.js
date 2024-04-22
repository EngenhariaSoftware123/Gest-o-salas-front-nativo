import React, {useState, useEffect} from 'react';
import {
  Container,
  TextTitle,
  TextLabel,
  StyledTextInput,
  TouchableOpacity,
  TextButton,
} from './Styles.js'; // Aliased TextInput import
import axios from 'axios';
import {Picker} from '@react-native-picker/picker';

export default function LinkManagersSpace({route}) {
  const [selectedSpaceId, setSelectedSpaceId] = useState('');
  const [selectedSpaceName, setSelectedSpaceName] = useState('');
  const [emailGestor, setEmailGestor] = useState('');
  const [pesquisarLocal, setpesquisarLocal] = useState('');
  const [reserva, setreserva] = useState('');
  const [mostrarCampo, setMostrarCampo] = useState(false); // Estado para controlar a visibilidade do campo combinado
  const [spaces, setSpaces] = useState([]);
  const handleInputChange = () => {
    const combinedText = `${emailGestor};${pesquisarLocal};${reserva}`;
    console.log('Email do Gestor: ', emailGestor);
    console.log('Pesquisar Local: ', pesquisarLocal);
    console.log('Reserva ou de Serviço: ', reserva);
    console.log('Texto Combinado: ', combinedText);
    setMostrarCampo(true); // Mostra o campo combinado após pressionar o botão "Pesquisar"
  };

  useEffect(() => {
    //console.log(email);
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
          handleSpaceChange(itemValue, spaces[itemIndex - 1].space.name)
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
      {selectedSpaceName ? (
        <Text style={styles.selectedText}>
          Espaço selecionado: {selectedSpaceName}
        </Text>
      ) : null}

      {/* <StyledTextInput
        multiline
        placeholder="Procure pela pesquisar local"
        value={pesquisarLocal}
        onChangeText={text => setpesquisarLocal(text)}
      /> */}

      <TextLabel>Reserva ou de Serviçor</TextLabel>
      <StyledTextInput
        multiline
        placeholder="Reserva ou de Serviçor"
        value={reserva}
        onChangeText={text => setreserva(text)}
      />

      <TouchableOpacity onPress={handleInputChange}>
        <TextButton>Vincular</TextButton>
      </TouchableOpacity>

      {mostrarCampo && (
        <StyledTextInput
          multiline
          placeholder="Email do gestor Pesquisar local; Reserva"
          value={`${emailGestor}\n${pesquisarLocal}\n${reserva}`}
          editable={false}
        />
      )}
    </Container>
  );
}
