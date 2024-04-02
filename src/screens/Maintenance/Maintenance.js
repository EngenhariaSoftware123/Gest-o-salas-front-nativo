import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function ManutencaoScreen() {
  const [local, setLocal] = useState('');
  const [descricao, setDescricao] = useState('');

  const salvarManutencao = () => {
    // Aqui você pode adicionar a lógica para salvar os detalhes da manutenção
    console.log('Local:', local);
    console.log('Descrição:', descricao);
    // Implemente a lógica para salvar no banco de dados ou fazer uma solicitação para o servidor
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitar Manutenção</Text>
      <Text style={styles.label}>Local:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o local da manutenção"
        value={local}
        onChangeText={text => setLocal(text)}
      />

      <Text style={styles.label}>Descrição do Problema:</Text>
      <TextInput
        style={[styles.input, {height: 100}]}
        multiline
        placeholder="Descreva o problema"
        value={descricao}
        onChangeText={text => setDescricao(text)}
      />

      <TouchableOpacity style={styles.button} onPress={ManutencaoScreen}>
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
