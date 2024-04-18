import React, {useState, useEffect} from 'react';
import axios, {isCancel, AxiosError} from 'axios';
import {Alert, Button, ScrollView} from 'react-native';

import {
  TextTitle,
  View,
  TouchableOpacity,
  ButtonText,
  ButtonContainer,
  CalentarioButton,
} from './Styles';
import CheckBox from '../../components/CheckBox';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';

export default function SolicitarReserva() {
  const [pavilhaoID, setPavilhaoID] = useState([]);
  const [selectedSpaceId, setSelectedSpaceId] = useState('');
  const [spaces, setSpaces] = useState([]);
  const [sala, setSala] = useState([]);
  const [horarios, setHorarios] = useState('');
  const [data, setData] = useState('');
  /* const [keyboardOffset, setKeyboardOffset] = useState(0); */

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

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
  const handleSpaceChange = (spaceId, spaceName) => {
    setSelectedSpaceId(spaceId);
    setSelectedSpaceName(spaceName);
  };

  const salvarReserva = () => {
    axios
      .post(
        'https://gestao-de-espaco-api.onrender.com/SolicitarReserva/create-SolicitarReserva',
        {
          horarios: horarios,
          data: data,
          selectedOptions: optionsMultiple,
        },
      )
      .then(function (response) {
        Alert.alert('Solicitação de reserva cadastrada');
      })
      .catch(function (error) {
        Alert.alert(
          'Erro',
          'ocorreu um erro reserva não solicitada',
          [{text: 'OK', onPress: () => {}}],
          {cancelable: false},
        );
      });
  };

  const optionsMultiple = [
    {text: 'Professor', id: 1},
    {text: 'Setor', id: 2},
    {text: 'Terceiros', id: 3},
  ];

  return (
    <ScrollView>
      <View>
        <TextTitle>Solicitar espaço</TextTitle>

        <Picker>
          <Picker.Item label="Selecione o pavilhão" value="" />
        </Picker>
        <Picker
          selectedValue={selectedSpaceId}
          onValueChange={(itemValue, itemIndex) =>
            handleSpaceChange(itemValue, spaces[itemIndex - 1].space.name)
          }>
          <Picker.Item label="Sala" value="" />
          {spaces.map(space => (
            <Picker.Item
              key={space.space.id}
              label={space.space.name}
              value={space.space.id}
            />
          ))}
        </Picker>

        <CalentarioButton title="Selecione a Data" onPress={() => setOpen(true)} />
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <CheckBox options={optionsMultiple} />

        <ButtonContainer>
          <TouchableOpacity onPress={salvarReserva}>
            <ButtonText>Cadastrar</ButtonText>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <ButtonText>Cancelar</ButtonText>
          </TouchableOpacity>
        </ButtonContainer>
      </View>
    </ScrollView>
  );
}
