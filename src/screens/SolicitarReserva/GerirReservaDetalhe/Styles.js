import styled from 'styled-components/native';

export const StyledView = styled.View`
  margin-bottom: 20px;
`;

export const TextTitle = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const BoxGerir = styled.View`
  background-color: white;
  border-width: 1px;
  border-color: ${props => (props.completed ? 'green' : props.canceled ? 'red' : '#ccc')};
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
`;

export const TextDetails = styled.Text`
  color: black;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
`;

export const ApproveButton = styled.Button`
  background-color: #5cb85c; /* Verde */
  padding: 8px 16px;
  border-radius: 5px;
`;

export const CancelButton = styled.Button`
  background-color: #d9534f; /* Vermelho */
  padding: 8px 16px;
  border-radius: 5px;
`;
