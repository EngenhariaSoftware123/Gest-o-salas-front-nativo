import React, {useState, useEffect} from 'react';
import axios, {isCancel, AxiosError} from 'axios';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native';

export default function Space() {
  const [nomeEspaco, setNomeEspaco] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [capacidade, setCapacidade] = useState(0);
  const [tipodesala, setTipodeSala] = useState('');
  const [keyboardOffset, setKeyboardOffset] = useState(0);

  const handleSubmit = async () => {
    axios
      .post('https://gestao-de-espaco-api.onrender.com/space/create-space', {
        data: {
          name: nomeEspaco,
          pavilion: localizacao,
          capacity: capacidade,
          typeRoom: tipodesala,
          acessibilty: ['cadeira reclinaveis'],
          available_equipments: [{name: 'projetor', quantity: 4}],
        },
      })
      .then(response => {
        // Handle successful response
        console.log('Response:', response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error);
      });
  };

  return (
    <ScrollView
      contentContainerStyle={localStyles.container}
      keyboardShouldPersistTaps="handled">
      <View>
        <Text style={localStyles.text}>Cadastrar espaço</Text>
        <TextInput
          onChangeText={text => setNomeEspaco(text)}
          value={nomeEspaco}
          placeholder="Nome do espaço"
          style={localStyles.input}
        />
        <TextInput
          onChangeText={text => setLocalizacao(text)}
          value={localizacao}
          placeholder="Localização"
          style={localStyles.input}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 10,
          }}>
          <TextInput
            onChangeText={text => setCapacidade(text)}
            value={capacidade}
            placeholder="Capacidade"
            style={localStyles.input}
          />

          <TextInput
            onChangeText={text => {
              setTipodeSala(text);
            }}
            value={tipodesala}
            placeholder="Tipo de sala"
            style={localStyles.input}
          />
        </View>

        <Text style={localStyles.text}>Recursos disponíveis:</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 230,
          }}>
          <TouchableOpacity onPress={handleSubmit} style={localStyles.button}>
            <Text style={localStyles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={localStyles.button}>
            <Text style={localStyles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const localStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
