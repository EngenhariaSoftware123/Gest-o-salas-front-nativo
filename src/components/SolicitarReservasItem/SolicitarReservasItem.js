import React from 'react';
import {View, TextName, TextLocation} from './Styles';
import {useNavigation} from '@react-navigation/native';

export const CancelarReservaSpace = ({space}) => {
  const navigation = useNavigation();
  if (!space) return null; // Verifica se space é null ou undefined

  const handleDelete = () => {
    navigation.navigate('DetalhesReservaCancerlar', {
      name: space.name,
      email: space.email,
    });
  };

  return (
    <View>
      <TextName>{space.name}</TextName>
      <TextLocation>{space.location}</TextLocation>
      {/* <Button title="Cancelar Reserva" onPress={handleDelete} /> */}
    </View>
  );
};
