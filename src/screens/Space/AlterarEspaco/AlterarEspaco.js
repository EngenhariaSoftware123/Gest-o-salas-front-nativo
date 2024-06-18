import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ScrollView, Alert} from 'react-native';
import CheckBox from '../../../components/CheckBox';
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

export default function Space({route}) {
  const {email, spaceName, spaceId} = route.params;
  const [nomeEspaco, setNomeEspaco] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [capacidade, setCapacidade] = useState('');
  const [tipodesala, setTipodeSala] = useState('');
  const [equipamentos, setEquipamentos] = useState([
    {name: '', quantidade: ''},
  ]);
  const [checkboxState, setCheckboxState] = useState({});

  useEffect(() => {
    console.log(spaceId);

    axios
      .get(
        `https://gestao-de-espaco-api.onrender.com/space/get-space/${spaceId}`,
      )
      .then(function (response) {
        setNomeEspaco(response.data.space.name);
        setLocalizacao(response.data.space.pavilion);
        setTipodeSala(response.data.space.typeRoom);
        setCapacidade(response.data.space.capacity.toString());
        setEquipamentos(
          response.data.available_equipments.map(equipamento => ({
            ...equipamento,
            quantidade: equipamento.quantity.toString(), // Ensure quantity is string
          })),
        );

        // Initialize checkboxState with all options checked
        const initialState = optionsMultiple.reduce((acc, option) => {
          acc[option.text] = true;
          return acc;
        }, {});
        setCheckboxState(initialState);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
    const acessibility = Object.entries(checkboxState)
      .filter(([key, value]) => value)
      .map(([key, value]) => key);
    try {
      await axios.put(
        `https://gestao-de-espaco-api.onrender.com/space/update-space/${spaceId}`,
        {
          name: nomeEspaco,
          pavilion: localizacao,
          capacity: parseInt(capacidade, 10),
          typeRoom: tipodesala,
          acessibility: acessibility,
          available_equipments: equipamentos.map(equipamento => ({
            ...equipamento,
            quantity: parseInt(equipamento.quantidade, 10),
          })),
        },
      );
      Alert.alert('Espaço Editado com sucesso');
    } catch (error) {
      Alert.alert(
        'Erro',
        'Ocorreu um erro, reserva não solicitada',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    }
  };

  const handleCheckboxChange = (text, isChecked) => {
    setCheckboxState(prevState => ({
      ...prevState,
      [text]: isChecked,
    }));
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
        <TextTitle>Editar espaço</TextTitle>
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
        <CheckBox
          options={optionsMultiple}
          multiple
          initialState={checkboxState}
          onChange={handleCheckboxChange}
        />

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
            <ButtonText>Editar</ButtonText>
          </SubmitButton>
          <CancelButton onPress={() => {}}>
            <ButtonText>Cancelar</ButtonText>
          </CancelButton>
        </ButtonContainer>
      </Container>
    </ScrollView>
  );
}
