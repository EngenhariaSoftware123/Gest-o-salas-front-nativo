import styled from 'styled-components';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';

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

