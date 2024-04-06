import React, { useState } from "react";
import {
  Container,
  TextTitle,
  TextLabel,
  StyledTextInput,
  TouchableOpacity,
  TextButton,
} from "./Styles.js"; // Aliased TextInput import
import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";

const StyledTextInputSigla = styled(StyledTextInput)`
  width: 65px; 
`;

export default function RegistroSetor() {
  const [Local, setLocal] = useState("");
  const [NomeSetor, setNomeSetor] = useState("");
  const [NumeroCelular, setNumeroCelular] = useState("");
  const [Email, setEmail] = useState("");
  const [Sigla, setSigla] = useState("");

  const salvarSetor = () => {
    console.log("Localização: ", Local);
    console.log("Nome do Setor: ", NomeSetor);
    console.log("Número do celular", NumeroCelular);
    console.log("E-mail", Email);
    console.log("Sigla: ", Sigla);
  };

  return (
    <Container>
      <TextTitle>Cadastrar Setor</TextTitle>
      <TextLabel>Localização</TextLabel>
      <StyledTextInput
        multiline
        placeholder="Digite a Localização"
        value={Local}
        onChangeText={(text) => setLocal(text)}
      />
      <TextLabel>Nome do Setor</TextLabel>
      <StyledTextInput
        multiline
        placeholder="Digite o nome do Setor"
        value={NomeSetor}
        onChangeText={(text) => setNomeSetor(text)}
      />

      <TextLabel>Sigla do Setor</TextLabel>
      <StyledTextInputSigla
        multiline
        placeholder="Sigla"
        value={Sigla}
        onChangeText={(text) => setSigla(text)}
      />

      <TextLabel>Número para Contato</TextLabel>
      <StyledTextInput
        multiline
        placeholder="Celular/Telefone"
        value={NumeroCelular}
        onChangeText={(text) => setNumeroCelular(text)}
        
      />

      <TextLabel>Email</TextLabel>
      <StyledTextInput
        multiline
        placeholder="Digite aqui"
        value={Email}
        onChangeText={(text) => setEmail(text)}
      />

      <TouchableOpacity onPress={RegistroSetor}>
        <TextButton>Cadastrar Setor</TextButton>
      </TouchableOpacity>
    </Container>
  );
}
