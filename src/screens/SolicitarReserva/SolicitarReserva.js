import React, {useState, useEffect} from 'react';
import axios, {isCancel, AxiosError} from 'axios';
import {ScrollView} from 'react-native';

import {TextTitle} from './Styles';
import CheckBox from '../../components/CheckBox';

export default function SolicitarReserva() {
  return (
    <ScrollView>
      <View>
        <TextTitle>Solicitar espaço</TextTitle>
      </View>
    </ScrollView>
  );
}
