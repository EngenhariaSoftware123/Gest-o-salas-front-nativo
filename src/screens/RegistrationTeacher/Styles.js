import styled from 'styled-components';
import {TextInput} from 'react-native-gesture-handler';

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

export const TextLabel = styled.Text``;

export const StyledTextInput = styled.TextInput`
  height: 100xp;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
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

export const DropdownButtonStyle = styled.View`
  width: 200px;
  height: 50;
  background-color: '#E9ECEF';
  border-radius: 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const DropdownButtonIconStyle = styled.Text`
  font-size: 20px;
  margin-right: 8px;
`;

export const DropdownButtonTxtStyle = styled.Text`
  flex: 1px;
  font-size: 18px;
  font-weight: 500px;
  color: '#151E26';
`;

export const DropdownItemStyle = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 12px;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const DropdownItemTxtStyle = styled.Text`
  flex: 1px;
  font-size: 18px;
  font-weight: 500px;
  color: '#151E26';
`;
