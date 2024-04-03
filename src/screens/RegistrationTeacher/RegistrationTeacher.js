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

export default function RegistroProfessor() {
  const [nomeProfessor, setNomeProfessor] = useState("");
  const [numeroDaMatricula, setNumeroDaMatricula] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [numeroCelular, setNumeroCelular] = useState("");
  const [emailProfessor, setEmailProfessor] = useState("");

  const salvarProfessor = () => {
    console.log("Nome do Professor: ", nomeProfessor);
    console.log("Numero da matrícula: ", numeroDaMatricula);
    console.log("Departamento: ", departamento);
    console.log("Número do celular", numeroCelular);
    console.log("E-mail do Professol", emailProfessor);
  };

  return (
    <Container>
      <TextTitle>Cadastrar Professor</TextTitle>
      <TextLabel>Nome do Professor</TextLabel>
      <StyledTextInput
        multiline
        placeholder="Digite o nome do professor"
        value={nomeProfessor}
        onChangeText={(text) => setNomeProfessor(text)}
      />

      <TextLabel>Matrícula do Professor</TextLabel>
      <StyledTextInput
        multiline
        placeholder="Matrícula do professor"
        value={nomeProfessor}
        onChangeText={(text) => numeroDaMatricula(text)}
      />

      <TextLabel>Contato do Professor</TextLabel>
      <StyledTextInput
        multiline
        placeholder="Celular/Telefone"
        value={setNumeroCelular}
        onChangeText={(text) => setNumeroCelular(text)}
      />

      <TextLabel>Email do Professor</TextLabel>
      <StyledTextInput
        multiline
        placeholder="Matrícula do professor"
        value={emailProfessor}
        onChangeText={(text) => setEmailProfessor(text)}
      />

      <TouchableOpacity onPress={RegistroProfessor}>
        <TextButton>Cadastrar Professor</TextButton>
      </TouchableOpacity>
    </Container>
  );
}
