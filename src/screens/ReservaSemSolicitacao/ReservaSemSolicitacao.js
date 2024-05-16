import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Alert, ScrollView} from 'react-native';

import {TextTitle, View} from './Styles';
import {Picker} from '@react-native-picker/picker';

export default function ReservaSemSolicitacao({route}) {
  useEffect(() => {
    axios
      .get('https://gestao-de-espaco-api.onrender.com/space/get-spaces')
      .then(function (response) {
        console.log(response.data);
        setSpaces(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView>
      <View>
        <TextTitle>Reserva sem Solicitação</TextTitle>
        {/* <TextTitle>{spaceName}</TextTitle>
         */}
        <Picker
        /*  selectedValue={selectedPavilhaoId}
          onValueChange={itemValue => setselectedPavilhaoId(itemValue)} */
        >
          {/*  <Picker.Item label="Selecione o pavilhão" value="" />
          {spaces.map(space => (
            <Picker.Item
              key={space.space.id}
              label={space.space.pavilion}
              value={space.space.id}
            />
          ))} */}
        </Picker>

        {/*  <Picker
          selectedValue={selectedSpaceId}
          onValueChange={itemValue => setSelectedSpaceId(itemValue)}>
          <Picker.Item label="Sala" value="" />
          {spaces.map(space => (
            <Picker.Item
              key={space.space.id}
              label={space.space.name}
              value={space.space.id}
            />
          ))}
        </Picker> */}
      </View>
    </ScrollView>
  );
}
