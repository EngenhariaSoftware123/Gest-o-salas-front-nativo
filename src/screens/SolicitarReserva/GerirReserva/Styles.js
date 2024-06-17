import styled from 'styled-components/native';

export const View = styled.View`
  flex: 1;
  padding: 20px;
`;

export const BoxGerir = styled.View`
  border: 3px solid #cccccc;
  flex: 1;
  padding: 20px;
  margin: 5px;
`;

export const TextTitle = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
`;

export const TextInput = styled.TextInput`
  border: 1px solid #cccccc;
  padding: 10px;
  margin-top: 10px;
  font-size: 20px;
  color: black;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  background-color: #007aff;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
`;

export const TouchableOpacityDetalhes = styled(TouchableOpacity)`
  background-color: #007aff;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
  width: 100px;
  margin-left: auto;
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
