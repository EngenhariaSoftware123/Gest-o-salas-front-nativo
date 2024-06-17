import styled from 'styled-components/native'; // Importando do styled-components/native para uso com React Native
import { TextInput } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const TextLabel = styled.Text`
  margin-top: 10px;
  font-size: 18px; /* Ajustando o tamanho da fonte */
  color: black; /* Cor da fonte preta */
`;

export const StyledTextInput = styled(TextInput)`
  height: 40px; /* Corrigindo o valor da altura */
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 18px; /* Aumentando o tamanho da fonte */
  color: black; /* Cor da fonte preta */
`;

export const TouchableOpacity = styled.TouchableOpacity`
  background: #007aff;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
