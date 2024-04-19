import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Alert, ScrollView} from 'react-native';
import {
  TextTitle,
  View,
  TouchableOpacity,
  ButtonText,
  ButtonContainer,
  TextLabel,
} from './Styles';
import CheckBox from '../../components/CheckBox';
import {Picker} from '@react-native-picker/picker';
import {Calendar} from 'react-native-calendars';

export default function SolicitarReserva() {
  const [pavilhaoID, setPavilhaoID] = useState([]);
  const [selectedSpaceId, setSelectedSpaceId] = useState('');
  const [spaces, setSpaces] = useState([]);

  const [horarios, setHorarios] = useState('');
  const [dataInicio, setDataInicio] = useState(null);
  const [dataFinal, setDataFinal] = useState(null);

  const handleDayPress = day => {
    const selectedDate = new Date(day.dateString);
    const today = new Date();

    if (selectedDate < today) {
      Alert.alert(
        'Atenção',
        'Você não pode selecionar datas anteriores à data atual.',
      );
      return;
    }

    if (!dataInicio) {
      setDataInicio(day.dateString);
    } else if (!dataFinal) {
      setDataFinal(day.dateString);
    } else {
      setDataInicio(day.dateString);
      setDataFinal(null);
    }
  };

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
        'https://gestao-de-espaco-api.onrender.com/space/create-space-request',
        {
          /*   horarios: horarios, */
          spaceId: selectedSpaceId,
          dataInicio: dataInicio,
          dataFinal: dataFinal,
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

  console.log('Inicio:', dataInicio);
  console.log('final:', dataFinal);

  return (
    <ScrollView>
      <View>
        <TextTitle>Solicitar espaço</TextTitle>
        <Picker>
          <Picker.Item label="Selecione o pavilhão" value="" />
        </Picker>
        <Picker
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

        <Calendar
          markingType={'multi-dot'}
          onDayPress={handleDayPress}
          markedDates={{
            [dataInicio]: {
              dots: [{key: 'inicio', color: 'blue'}],
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
            [dataFinal]: {
              dots: [{key: 'final', color: 'red'}],
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
              color: 'red',
            },
          }}
        />
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
