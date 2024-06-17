import styled from 'styled-components/native';

export const View = styled.View`
  padding: 10px;
  border-color: #ccc;
  border-radius: 5px;
  margin-left: 10px;
  margin-bottom: 10px;
  width: auto;
  height: 180px; /* Aumentado para acomodar os botões */
  border-width: 2px;
`;

export const TextTitle = styled.Text`
  font-weight: bold;
  font-size: 16px; /* Tamanho da fonte aumentado */
  color: black; /* Cor da fonte preta */
`;

export const TextLocation = styled.Text`
  font-size: 16px; /* Tamanho da fonte aumentado */
  color: black; /* Cor da fonte preta */
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const CancelButton = styled.Button`
  background-color: #d9534f; /* Vermelho */
  margin-right: 5px;
  flex: 1;
`;

export const ApproveButton = styled.Button`
  background-color: #5cb85c; /* Verde */
  flex: 1;
  margin-left: 5px;
`;
