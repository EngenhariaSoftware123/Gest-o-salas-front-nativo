import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 20px;
  padding-top: 50px;
  background-color: #fff;
`;

export const TextTitle = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  height: 40px;
  border-color: #ccc;
  border-width: 1px;
  margin-bottom: 20px;
  padding: 0 10px;
  flex: 1;
`;

export const EquipmentContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #007aff;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 20px;
`;

export const AddButtonText = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #007aff;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;

  flex: 1;
`;

export const CancelButton = styled.TouchableOpacity`
  background-color: #d9534f;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;

  flex: 1;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
