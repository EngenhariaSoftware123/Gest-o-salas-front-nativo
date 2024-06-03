import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {
  Container,
  Title,
  SearchInput,
  List,
  SpaceItem,
  SpaceName,
  SpaceLocation,
} from './Styles.js';

export default function VizualizarEspaço({route}) {
  const {email} = route.params;
  const [search, setSearch] = useState('');
  const [spaces, setSpaces] = useState([]);
  const [filteredSpaces, setFilteredSpaces] = useState([]);

  u

  const handleSearch = text => {
    setSearch(text);
    const filtered = spaces.filter(
      space =>
        space.name.toLowerCase().includes(text.toLowerCase()) ||
        space.location.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredSpaces(filtered);
  };

  const handleSpacePress = space => {
    console.log('Detalhes do espaço:', space);
  };

  return (
    <Container>
      <Title>Consultar Espaços</Title>
      <SearchInput
        placeholder="Pesquisar..."
        value={search}
        onChangeText={handleSearch}
      />
      {filteredSpaces.length > 0 ? (
        <List
          data={filteredSpaces}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <SpaceItem onPress={() => handleSpacePress(item)}>
              <SpaceName>{item.name}</SpaceName>
              <SpaceLocation>{item.location}</SpaceLocation>
            </SpaceItem>
          )}
        />
      ) : (
        <Text>Não há salas disponíveis no momento.</Text>
      )}
    </Container>
  );
}
