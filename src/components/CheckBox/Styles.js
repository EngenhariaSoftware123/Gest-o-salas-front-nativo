import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';

export const View = styled.View`
  flex-direction: row;
  flex-direction: column;
`;

export const TextTitle = styled.Text`
  margin-left: 12px;
  color: '#555';
  font-size: 16px;
  font-weight: 600px;
`;
export const TouchableOpacityStyle = styled.TouchableOpacity`
  margin-bottom: 5px;
  height: 20px;
  width: 20px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  border-color: '#3EBD93';
  border-width: 2;
`;
