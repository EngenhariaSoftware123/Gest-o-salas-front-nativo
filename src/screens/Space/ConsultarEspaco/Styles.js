import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`;

export const ContainerBox = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #007aff;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
 
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const GridContainer = styled.ScrollView`
  flex: 1;
  flex-direction: column; /* Ajuste para column para poder aplicar o justifyContent */
  
`;
