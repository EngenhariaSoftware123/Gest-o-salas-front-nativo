import styled from 'styled-components';

export const View = styled.View`
  flex: 1;
  padding: 20px;
`;

export const TextTitle = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px; /* Alterado de margin-bottom para margin-top */
`;

export const TouchableOpacity = styled.TouchableOpacity`
  background-color: #007aff;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const TextLabel = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 20px;
  margin-top: 30px;
`;

export const ViewHorario = styled.View`
  margin: 10px;
  flex-direction: row; /* Para posicionar os componentes lado a lado */
  justify-content: center; /* Para adicionar espaço entre os componentes */
  margin-bottom: 10px; /* Adiciona um espaço na parte inferior */
`;

export const ViewTextHorario = styled.View`
  margin-top: 15px;
  padding: 5px;
  flex-direction: row; /* Para posicionar os componentes lado a lado */
  justify-content: space-between; /* Para adicionar espaço entre os componentes */
`;

export const TextHorario = styled.Text`
  margin-top: 20px;
  font-size: 20px;
  color: black;
`;
