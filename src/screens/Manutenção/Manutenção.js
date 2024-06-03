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

export default function Manutenção({route}) {
  const {email, spaceName, spaceId, location} = route.params;
  const [descricao, setDescricao] = useState('');

  const salvarManutencao = () => {
    console.log(spaceId);
    axios
      .post(
        'https://gestao-de-espaco-api.onrender.com/maintenance/create-maintenance',
        {
          email: email,
          spaceId: spaceId,
          description: descricao,
        },
      )
      .then(function (response) {
        Alert.alert(`manuntenção cadastrada`);
        console.log(response.data);
      })
      .catch(function (error) {
        Alert.alert(
          'Erro',
          'ocorreu um erro manuntenção não cadastrada',
          [{text: 'OK', onPress: () => {}}],
          {cancelable: false},
        );
        console.log(error);
      });
    // Implemente a lógica para salvar no banco de dados ou fazer uma solicitação para o servidor
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitar Manutenção</Text>
      <Text style={styles.label}>Local:{location}</Text>
      <Text style={styles.label}>{spaceName}</Text>

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
