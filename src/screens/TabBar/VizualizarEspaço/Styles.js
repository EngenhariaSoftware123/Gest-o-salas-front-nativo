import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const SearchInput = styled.TextInput`
  height: 40px;
  border-color: #cccccc;
  border-width: 1px;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
`;

export const List = styled.FlatList`
  width: 100%;
`;

export const SpaceItem = styled.TouchableOpacity`
  padding: 15px;
  background-color: #f9f9f9;
  border-bottom-width: 1px;
  border-bottom-color: #eeeeee;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const SpaceName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const SpaceLocation = styled.Text`
  font-size: 16px;
  color: #888888;
`;
