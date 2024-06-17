import React, {useState} from 'react';
import axios from 'axios';
import {ScrollView, Alert} from 'react-native';
import CheckBox from '../../components/CheckBox';
import {
  Container,
  TextTitle,
  Input,
  EquipmentContainer,
  AddButton,
  AddButtonText,
  ButtonContainer,
  SubmitButton,
  CancelButton,
  ButtonText,
} from './Styles.js';

export default function Space() {
  const [nomeEspaco, setNomeEspaco] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [capacidade, setCapacidade] = useState('');
  const [tipodesala, setTipodeSala] = useState('');
  const [equipamentos, setEquipamentos] = useState([
    {name: '', quantidade: ''},
  ]);

  const handleAddEquipment = () => {
    setEquipamentos([...equipamentos, {name: '', quantidade: ''}]);
  };

  const handleEquipamentosChange = (index, field, value) => {
    const newEquipamentos = equipamentos.map((equipamento, i) => {
      if (i === index) {
        return {...equipamento, [field]: value};
      }
      return equipamento;
    });
    setEquipamentos(newEquipamentos);
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        'https://gestao-de-espaco-api.onrender.com/space/create-space',
        {
          data: {
            name: nomeEspaco,
            pavilion: localizacao,
            capacity: capacidade,
            typeRoom: tipodesala,
            acessibilty: ['cadeira reclinaveis'],
            available_equipments: equipamentos,
            selectedOptions: optionsMultiple,
          },
        },
      );
      Alert.alert('Solicitação de reserva cadastrada');
    } catch (error) {
      Alert.alert(
        'Erro',
        'Ocorreu um erro, reserva não solicitada',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    }
  };

  const optionsMultiple = [
    {text: 'Rampa de Acesso', id: 1},
    {text: 'Piso Tátil.', id: 2},
    {text: 'Carteira Especial: PCD', id: 3},
  ];

  return (
    <ScrollView /* contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" */
    >
      <Container>
        <TextTitle>Cadastrar espaço</TextTitle>
        <Input
          onChangeText={text => setNomeEspaco(text)}
          value={nomeEspaco}
          placeholder="Nome do espaço"
        />
        <Input
          onChangeText={text => setLocalizacao(text)}
          value={localizacao}
          placeholder="Localização"
        />
        <EquipmentContainer>
          <Input
            onChangeText={text => setCapacidade(text)}
            value={capacidade}
            placeholder="Capacidade"
            keyboardType="numeric"
          />
          <Input
            onChangeText={text => setTipodeSala(text)}
            value={tipodesala}
            placeholder="Tipo de sala"
          />
        </EquipmentContainer>

        <TextTitle>Recursos disponíveis:</TextTitle>
        <CheckBox options={optionsMultiple} multiple />

        <TextTitle>Equipamento disponíveis:</TextTitle>
        {equipamentos.map((equipment, index) => (
          <EquipmentContainer key={index}>
            <Input
              placeholder="Nome do equipamento"
              value={equipment.name}
              onChangeText={text =>
                handleEquipamentosChange(index, 'name', text)
              }
            />
            <Input
              placeholder="Quantidade"
              value={equipment.quantidade}
              onChangeText={text =>
                handleEquipamentosChange(index, 'quantidade', text)
              }
              keyboardType="numeric"
            />
          </EquipmentContainer>
        ))}
        <AddButton onPress={handleAddEquipment}>
          <AddButtonText>+</AddButtonText>
        </AddButton>

        <ButtonContainer>
          <SubmitButton onPress={handleSubmit}>
            <ButtonText>Cadastrar</ButtonText>
          </SubmitButton>
          <CancelButton onPress={() => {}}>
            <ButtonText>Cancelar</ButtonText>
          </CancelButton>
        </ButtonContainer>
      </Container>
    </ScrollView>
  );
}
