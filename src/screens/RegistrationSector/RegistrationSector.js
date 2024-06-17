import React, {useState, useEffect} from 'react';
import {
  Text,
  Container,
  TextTitle,
  TextLabel,
  StyledTextInput,
  TouchableOpacity,
  TextButton,
} from './Styles.js'; // Aliased TextInput import
import {ScrollView, Alert} from 'react-native';
import styled from 'styled-components/native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

const StyledTextInputSigla = styled(StyledTextInput)`
  width: 65px;
`;

export default function RegistroSetor() {
  const [NomeSetor, setNomeSetor] = useState('');
  const [NumeroCelular, setNumeroCelular] = useState('');
  const [Email, setEmail] = useState('');
  const [Sigla, setSigla] = useState('');
  const [spaces, setSpaces] = useState([]);
  const [selectedSpaceId, setSelectedSpaceId] = useState(0);
  const [selectedSpaceName, setSelectedSpaceName] = useState('');

  useEffect(() => {
    axios
      .get('https://gestao-de-espaco-api.onrender.com/space/get-spaces')
      .then(function (response) {
        setSpaces(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const salvarSetor = async () => {
    console.log('Nome do Setor: ', NomeSetor);
    console.log('Número do celular', NumeroCelular);
    console.log('E-mail', Email);
    console.log('Sigla: ', Sigla);
    console.log(selectedSpaceId);
    axios
      .post('https://gestao-de-espaco-api.onrender.com/sector/create-sector', {
        name: NomeSetor,
        email: Email,
        spaceId: selectedSpaceId,
        contact: NumeroCelular,
        acronym: Sigla,
      })
      .then(function (response) {
        Alert.alert(`setor cadastrada`);
        console.log(response.data);
      })
      .catch(function (error) {
        Alert.alert(
          'Erro',
          'ocorreu um erro setor não cadastrado',
          [{text: 'OK', onPress: () => {}}],
          {cancelable: false},
        );
        console.log(error);
      });
    // Implemente a lógica para salvar no banco de dados ou fazer uma solicitação para o servidor
  };

  const handleSpaceChange = (spaceId, spaceName) => {
    setSelectedSpaceId(spaceId);
    setSelectedSpaceName(spaceName);
  };

  const handleCellphoneInput = text => {
    const numericText = text.replace(/[^0-9]/g, '');
    setNumeroCelular(numericText);
  };

  return (
    <ScrollView>
      <Container>
        <TextTitle>Cadastrar Setor</TextTitle>
        <TextLabel>Localização</TextLabel>
        <Picker
          selectedValue={selectedSpaceId}
          onValueChange={itemValue => {
            handleSpaceChange(itemValue);
          }}>
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
          <Text>Espaço selecionado: {selectedSpaceName}</Text>
        ) : null}
        <TextLabel>Nome do Setor</TextLabel>
        <StyledTextInput
          multiline
          placeholder="Digite o nome do Setor"
          value={NomeSetor}
          onChangeText={text => setNomeSetor(text)}
        />

        <TextLabel>Sigla do Setor</TextLabel>
        <StyledTextInputSigla
          multiline
          placeholder="Sigla"
          value={Sigla}
          onChangeText={text => setSigla(text)}
        />

        <TextLabel>Número para Contato</TextLabel>
        <StyledTextInput
          multiline
          placeholder="Celular/Telefone"
         onChangeText={handleCellphoneInput}
          keyboardType="numeric"
        />

        <TextLabel>Email</TextLabel>
        <StyledTextInput
          multiline
          placeholder="Digite aqui"
          value={Email}
          onChangeText={text => setEmail(text)}
        />

        <TouchableOpacity onPress={salvarSetor}>
          <TextButton>Cadastrar Setor</TextButton>
        </TouchableOpacity>
      </Container>
    </ScrollView>
  );
}
