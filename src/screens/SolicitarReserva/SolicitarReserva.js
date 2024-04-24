import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Alert, ScrollView} from 'react-native';
import {
  TextTitle,
  View,
  TouchableOpacity,
  ButtonText,
  ButtonContainer,
  ViewHorario,
  ViewTextHorario,
  TextHorario,
} from './Styles'; // Importe o componente ViewHorario
import {Picker} from '@react-native-picker/picker';
import {Calendar} from 'react-native-calendars';
import DatePicker from 'react-native-date-picker';

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan.',
    'Fev.',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul.',
    'Ago',
    'Set.',
    'Out.',
    'Nov.',
    'Dez.',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
};

LocaleConfig.defaultLocale = 'pt-br';

export default function SolicitarReserva({route}) {
  const {email, spaceName, spaceId} = route.params;
  const [selectedPavilhaoId, setselectedPavilhaoId] = useState('');
  const [selectedSpaceId, setSelectedSpaceId] = useState('');
  const [spaces, setSpaces] = useState([]);

  const [horarioInicio, setHorarioInicio] = useState(new Date());
  const [horarioFinal, setHorarioFinal] = useState(new Date());
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

  const handleHorarioInicioChange = newDate => {
    setHorarioInicio(newDate);
    console.log(
      'Horário Início:',
      newDate.getHours() + ':' + newDate.getMinutes(),
    );
  };

  const handleHorarioFinalChange = newDate => {
    const today = new Date();
    // Verificar se o horário final é anterior ao horário atual
    if (newDate < today) {
      Alert.alert(
        'Atenção',
        'Você não pode selecionar um horário final anterior ao horário atual.',
      );
      return;
    }
    setHorarioFinal(newDate);
    console.log(
      'Horário Final:',
      newDate.getHours() + ':' + newDate.getMinutes(),
    );
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
    if (!dataInicio || !dataFinal) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    axios
      .post(
        'https://gestao-de-espaco-api.onrender.com/space/create-space-request',
        {
          spaceId: spaceId,
          initial_Period: dataInicio,
          end_Period: dataFinal,
          email: email,
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
  console.log('\nhorario', horarioInicio);
  console.log(selectedSpaceId);

  return (
    <ScrollView>
      <View>
        <TextTitle>Solicitar espaço</TextTitle>
        <TextTitle>{spaceName}</TextTitle>

        {/*<Picker
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
        </Picker>*/}

        <Calendar
          markingType={'multi-dot'}
          onDayPress={handleDayPress}
          androidVariant={'nativeAndroid'}
          LocaleConfig={'pt-br'}
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

        <ViewTextHorario>
          <TextHorario>Horario Inicio</TextHorario>
          <TextHorario>Horario Final</TextHorario>
        </ViewTextHorario>
        <ViewHorario>
          <DatePicker
            date={horarioInicio}
            onDateChange={handleHorarioInicioChange}
            mode="time"
            androidVariant="nativeAndroid"
            locale="pt_BR"
            dividerColor="blue"
          />

          <DatePicker
            date={horarioFinal}
            onDateChange={handleHorarioFinalChange}
            mode="time"
            androidVariant="nativeAndroid"
            locale="pt_BR"
            dividerColor="red"
          />
        </ViewHorario>

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
