import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';
import {Picker} from '@react-native-picker/picker';

export default function ManutencaoScreen({route}) {
  const [selectedSpaceId, setSelectedSpaceId] = useState('');
  const [selectedSpaceName, setSelectedSpaceName] = useState('');
  const [descricao, setDescricao] = useState('');
  const [spaces, setSpaces] = useState([]);
  const {email} = route.params;
  
  useEffect(() => {
    console.log(email);
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
  const salvarManutencao = () => {
    axios
      .post(
        'https://gestao-de-espaco-api.onrender.com/maintenance/create-maintenance',
        {
          email: email,
          spaceId: selectedSpaceId,
          description: descricao,
        },
      )
      .then(function (response) {
        Alert.alert(`manuntenção cadastrada`);
      })
      .catch(function (error) {
        Alert.alert(
          'Erro',
          'ocorreu um erro manuntenção não cadastrada',
          [{text: 'OK', onPress: () => {}}],
          {cancelable: false},
        );
      });
    // Implemente a lógica para salvar no banco de dados ou fazer uma solicitação para o servidor
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitar Manutenção</Text>
      <Text style={styles.label}>Local:</Text>
      <Picker
        selectedValue={selectedSpaceId}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) =>
          handleSpaceChange(itemValue, spaces[itemIndex - 1].space.name)
        }>
        <Picker.Item label="Selecione o local" value="" />
        {spaces.map(space => (
          <Picker.Item
            key={space.space.id}
            label={space.space.name}
            value={space.space.id}
          />
        ))}
      </Picker>
      {selectedSpaceName ? (
        <Text style={styles.selectedText}>
          Espaço selecionado: {selectedSpaceName}
        </Text>
      ) : null}

      <Text style={styles.label}>Descrição do Problema:</Text>
      <TextInput
        style={[styles.input, {height: 100}]}
        multiline
        placeholder="Descreva o problema"
        value={descricao}
        onChangeText={text => setDescricao(text)}
      />

      <TouchableOpacity style={styles.button} onPress={salvarManutencao}>
        <Text style={styles.buttonText}>Solicitar Manutenção</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
