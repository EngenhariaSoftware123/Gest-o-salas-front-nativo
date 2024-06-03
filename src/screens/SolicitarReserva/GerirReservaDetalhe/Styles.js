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
  margin-bottom: 5px;
`;

export const BoxGerir = styled.View`
  margin-bottom: 20px;
  border: 1px solid
    ${props => (props.completed ? 'green' : props.canceled ? 'red' : '#ccc')};
  padding: 10px;
`;
