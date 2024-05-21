import styled from 'styled-components';

export const View = styled.View`
  padding: 10px;
  border-color: #ccc;
  border-radius: 5px;
  margin-left: 10px;
  margin-bottom: 10px;
  width: auto;
  height: 180px; /* Aumentado para acomodar os botões */
  border-width: 2px;
`;

export const TextTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const TextLocation = styled.Text`
  font-size: 16px;
  color: #555;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const CancelButton = styled.Button`
  background-color: #d9534f;
  margin-right: 5px;
  flex: 1;
`;

export const ApproveButton = styled.Button`
  flex: 1;
  margin-left: 5px;
`;
