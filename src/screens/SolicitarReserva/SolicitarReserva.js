import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Alert, ScrollView} from 'react-native';
import {
  TextTitle,
  View,
  TouchableOpacity,
  ButtonText,
  ButtonContainer,
} from './Styles';
import {Picker} from '@react-native-picker/picker';
import {Calendar} from 'react-native-calendars';
import DatePicker from 'react-native-date-picker';

export default function SolicitarReserva() {
  const [selectedPavilhaoId, setselectedPavilhaoId] = useState('');
  const [selectedSpaceId, setSelectedSpaceId] = useState('');
  const [spaces, setSpaces] = useState([]);

  const [horario, setHorario] = useState(new Date());
  const [horarioDate, setHorarioDate] = useState(new Date());
  const [dataInicio, setDataInicio] = useState(null);
  const [dataFinal, setDataFinal] = useState(null);

  const handleDayPress = day => {
    const selectedDate = new Date(day.dateString);
    const today = new Date();

    // Configurar a hora de hoje para 00:00:00 para comparar apenas a data
    today.setHours(0, 0, 0, 0);

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

  const handleHorarioChange = newDate => {
    setHorario(newDate);
    console.log('Horário:', newDate.getHours() + ':' + newDate.getMinutes());
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

  const salvarReserva = () => {
    if (!selectedSpaceId || !dataInicio || !dataFinal || !selectedPavilhaoId) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    axios
      .post(
        'https://gestao-de-espaco-api.onrender.com/space/create-space-request',
        {
          date: {
            time: horario.getHours() + ':' + horario.getMinutes(),
            initial_Period: dataInicio,
            end_Period: dataFinal,
          },
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
  console.log('\nhorario', horario);
  console.log(selectedSpaceId);

  return (
    <ScrollView>
      <View>
        <TextTitle>Solicitar espaço</TextTitle>
        <Picker
          selectedValue={selectedPavilhaoId}
          onValueChange={itemValue => setselectedPavilhaoId(itemValue)}>
          <Picker.Item label="Selecione o pavilhão" value="" />
          {spaces.map(space => (
            <Picker.Item
              key={space.space.id}
              label={space.space.pavilion}
              value={space.space.id}
            />
          ))}
        </Picker>

        <Picker
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
        </Picker>

        <DatePicker
          date={horario}
          onDateChange={handleHorarioChange}
          mode="time"
          dividerColor="red"
        />
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
