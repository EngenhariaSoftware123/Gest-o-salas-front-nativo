import React, {useState} from 'react';
import {
  Container,
  TextTitle,
  TextLabel,
  StyledTextInput,
  TouchableOpacity,
  TextButton,
} from './Styles.js';
import {Alert, ScrollView} from 'react-native';
import axios from 'axios';
import CheckBox from '../../components/CheckBox/index.js';

export default function RegistroProfessor() {
  const Departamento = [
    {text: 'DCT', id: 1},
    {text: 'DS I', id: 2},
    {text: 'DS II', id: 3},
    {text: 'DCHL', id: 4},
    {text: 'DCB', id: 5},
  ];

  const [nomeProfessor, setNomeProfessor] = useState('');
  const [numeroDaMatricula, setNumeroDaMatricula] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [numeroCelular, setNumeroCelular] = useState('');
  const [emailProfessor, setEmailProfessor] = useState('');

  /*  useEffect(() => {
    console.log(email);
    axios
      .get('https://gestao-de-espaco-api.onrender.com/space/get-spaces')
      .then(function (response) {
        console.log(response.data);
        setSpaces(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []); */

  const salvarProfessor = () => {
    axios
      .post(
        'https://https://gestao-de-espaco-api.onrender.com/teacher/create-teacher',
        {
          name: nomeProfessor,
          enrollment: numeroDaMatricula,
          contact: numeroCelular,
          department: departamento,
          contact: numeroCelular,
          email: emailProfessor,
        },
      )
      .then(response => {
        console.log(response.data);
        Alert.alert('professor cadastrado');
      })
      .catch(e => {
        console.log(e);
      });
    console.log('Nome do Professor: ', nomeProfessor);
    console.log('Numero da matrícula: ', numeroDaMatricula);
    console.log('Departamento: ', departamento.op);
    console.log('Número do celular', numeroCelular);
    console.log('E-mail do Professor', emailProfessor);
  };

  return (
    <ScrollView>
      <Container>
        <TextTitle>Cadastrar Professor</TextTitle>
        <TextLabel>Nome do Professor</TextLabel>
        <StyledTextInput
          multiline
          placeholder="Digite o nome do professor"
          value={nomeProfessor}
          onChangeText={text => setNomeProfessor(text)}
        />
        <TextLabel>Matrícula do Professor</TextLabel>
        <StyledTextInput
          multiline
          placeholder="Matrícula do professor"
          value={numeroDaMatricula}
          onChangeText={text => setNumeroDaMatricula(text)}
        />
        <TextLabel>Departamento:</TextLabel>
        <CheckBox options={Departamento} onChange={op => alert(op)} />

        <TextLabel>Contato do Professor</TextLabel>
        <StyledTextInput
          multiline
          placeholder="Celular/Telefone"
          value={numeroCelular}
          onChangeText={text => setNumeroCelular(text)}
        />
        <TextLabel>Email do Professor</TextLabel>
        <StyledTextInput
          multiline
          placeholder="Email do professor"
          value={emailProfessor}
          onChangeText={text => setEmailProfessor(text)}
        />
        <TouchableOpacity onPress={salvarProfessor}>
          <TextButton>Cadastrar Professor</TextButton>
        </TouchableOpacity>
      </Container>
    </ScrollView>
  );
}
