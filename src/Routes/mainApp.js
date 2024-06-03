import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabRoutes from './tab.routes';
import Space from '../screens/Space/BoxSpace/Space';
import DetalhesEspaços from '../screens/Space/DetalhesEspaços/DetalhesEspaços';
import RegistrationTeacher from '../screens/RegistrationTeacher/RegistrationTeacher';
import LinkManagersSpace from '../screens/LinkManagersSpace/LinkManagersSpace';
import RegistrationSector from '../screens/RegistrationSector/RegistrationSector';
import SolicitarReserva from '../screens/SolicitarReserva/SolictarReserva/SolicitarReserva';
import GerirReserva from '../screens/SolicitarReserva/GerirReserva/GerirReserva';
import ConsultSpace from '../screens/Space/ConsultarEspaco/ConsultarEspaco';
import ReservaSemSolicitacao from '../screens/ReservaSemSolicitacao/ReservaSemSolicitacao';
import GerirServicos from '../screens/GerirServicos/GerirServicos';
import GerirDetalhes from '../screens/GerirServicos/GerirDetalhes/GerirDetalhes';
import VizualizarEspaço from '../screens/TabBar/VizualizarEspaço/VizualizarEspaço';
import Manutenção from '../screens/Manutenção/Manutenção';
import GerirReservaDetalhes from '../screens/SolicitarReserva/GerirReservaDetalhe/GerirReservaDetalhes';

const Stack = createStackNavigator();

export default function MainApp() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tabs" component={TabRoutes} />
      <Stack.Screen name="Space" component={Space} />
      <Stack.Screen name="DetalhesEspaços" component={DetalhesEspaços} />
      <Stack.Screen
        name="RegistrationTeacher"
        component={RegistrationTeacher}
      />
      <Stack.Screen name="LinkManagersSpace" component={LinkManagersSpace} />
      <Stack.Screen name="RegistrationSector" component={RegistrationSector} />
      <Stack.Screen name="SolicitarReserva" component={SolicitarReserva} />
      <Stack.Screen name="GerirReserva" component={GerirReserva} />
      <Stack.Screen name="ConsultarEspaços" component={ConsultSpace} />
      <Stack.Screen
        name="ReservaSemSolicitacao"
        component={ReservaSemSolicitacao}
      />
      <Stack.Screen name="GerirServicos" component={GerirServicos} />
      <Stack.Screen name="GerirDetalhes" component={GerirDetalhes} />
      <Stack.Screen name="VizualizarEspaço" component={VizualizarEspaço} />
      <Stack.Screen name="Manutenção" component={Manutenção} />
      <Stack.Screen
        name="GerirReservaDetalhes"
        component={GerirReservaDetalhes}
      />
    </Stack.Navigator>
  );
}
