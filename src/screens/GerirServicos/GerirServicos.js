import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Alert, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  TextTitle,
  View,
  Textbox,
  TouchableOpacity,
  TouchableOpacityDetalhes,
  ButtonText,
  ButtonContainer,
  BoxGerir,
} from './Styles';
import {Picker} from '@react-native-picker/picker';

export default function GerirServicos({route}) {
  const navigation = useNavigation();
  const [statuses, setStatuses] = useState({});
  const [spaces, setSpaces] = useState([]);
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    axios
      .get(
        'https://gestao-de-espaco-api.onrender.com/maintenance/get-maintenance',
      )
      .then(function (response) {
        console.log(response.data);
        // Filtra os espaços com status "ABERTO"
        const openSpaces = response.data.filter(
          space => space.status === 'ABERTO',
        );
        setSpaces(openSpaces);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleStatusChange = (itemValue, id) => {
    // Atualize apenas o estado local sem enviar para o servidor
    setStatuses(prevStatuses => ({
      ...prevStatuses,
      [id]: itemValue,
    }));
  };

  const salvarGerirServico = id => {
    const status = statuses[id];

    console.log('STATUS: ', status);
    console.log('ID: ', id);
    axios
      .put(
        // o id está definido para cada manutenção, por isso que eu deixei setado para o id
        `https://gestao-de-espaco-api.onrender.com/maintenance/update-status-maintenance/${id}`,
        {
          status: status,
        },
      )
      .then(function (response) {
        Alert.alert('Status do serviço salvo com sucesso');
        // Atualiza a lista de espaços após salvar o status
        atualizarDados();
      })
      .catch(function (error) {
        Alert.alert(
          'Erro',
          'Ocorreu um erro ao salvar o status do serviço',
          [{text: 'OK', onPress: () => {}}],
          {cancelable: false},
        );
      });
  };

  const atualizarDados = () => {
    axios
      .get(
        'https://gestao-de-espaco-api.onrender.com/maintenance/get-maintenance',
      )
      .then(function (response) {
        console.log(response.data);
        // Filtra os espaços com status "ABERTO"
        const openSpaces = response.data.filter(
          space => space.status === 'ABERTO',
        );
        setSpaces(openSpaces);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (shouldNavigate) {
      navigation.navigate('GerirDetalhes');
    }
  }, [shouldNavigate]);

  return (
    <ScrollView>
      <View>
        <TextTitle>Gerir Serviços</TextTitle>

        <TouchableOpacityDetalhes
          onPress={() => navigation.navigate('GerirDetalhes')}>
          <ButtonText>Detalhes</ButtonText>
        </TouchableOpacityDetalhes>
        {spaces.map(space => (
          <BoxGerir key={space.id}>
            <TextTitle>{space.description}</TextTitle>
            <Picker
              selectedValue={statuses[space.id] || space.status}
              onValueChange={(itemValue, itemIndex) =>
                handleStatusChange(itemValue, space.id)
              }>
              <Picker.Item label="Selecione o status" value="" />
              <Picker.Item label="Concluído" value="Concluído" />
              <Picker.Item label="Cancelado" value="Cancelado" />
              <Picker.Item label="Em Andamento" value="Em Andamento" />
            </Picker>
            <TouchableOpacity onPress={() => salvarGerirServico(space.id)}>
              <ButtonText>Salvar</ButtonText>
            </TouchableOpacity>
          </BoxGerir>
        ))}
      </View>
    </ScrollView>
  );
}
