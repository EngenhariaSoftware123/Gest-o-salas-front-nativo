import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center; /* Alterado de margin-bottom para margin-top */
`;

export const TextLabel = styled.Text`
  font-weight: 20px;
  margin-top: 10px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  background: #007aff;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
`;
