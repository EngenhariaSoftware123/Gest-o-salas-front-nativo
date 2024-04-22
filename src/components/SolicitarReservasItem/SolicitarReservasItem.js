import React from 'react';
import {View, TextName, TextLocation} from './Styles';

export const CancelarReservaSpace = ({space}) => {
  if (!space) return null; // Verifica se space é null ou undefined

  const handleDelete = () => {
    space.handleDelete(space.email, space.id);
  };

  return (
    <View>
      <TextName>{space.name}</TextName>
      <TextLocation>{space.location}</TextLocation>
      <Button title="Cancelar Reserva" onPress={handleDelete} />
    </View>
  );
};
