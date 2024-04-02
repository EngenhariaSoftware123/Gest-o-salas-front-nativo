import styled from 'styled-components/native';

export const View = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const Text = styled.Text`
  font-size: 24px;
  margin-top: 50px; /* Alterado de margin-bottom para margin-top */
`;

export const TextInput = styled.TextInput`
  /* Adicione estilos para TextInput aqui, se necessário */
  align-self: flex-start;
  margin-top: 35px;
  margin-left: 30px;
  padding: 10px;
  padding-right: 40px;

  font-size: 20px;

  border: 2px solid black;
  border-radius: 13px;
`;

export const Button = styled.Button``;
