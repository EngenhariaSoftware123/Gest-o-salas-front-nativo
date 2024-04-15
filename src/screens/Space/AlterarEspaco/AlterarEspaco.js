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

import {} from './Styles';

export default function AlterarEspaco() {
  const [nomeEspaco, setNomeEspaco] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [capacidade, setCapacidade] = useState(0);
  const [tipodesala, setTipodeSala] = useState('');
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  return (
    <ScrollView>
      <View>
        <TextTitle>Espaço cadastrado</TextTitle>
        <BoxLinha>
          
        </BoxLinha>
      </View>
    </ScrollView>
  );
}
