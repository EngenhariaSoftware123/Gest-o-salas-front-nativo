import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import MainApp from './mainApp';
import CadastrarProfessor from '../screens/CadastrarProfessor/CadastrarProfessor';
import LinkManagersSpace from '../screens/GestorDeEspaço/GestorDeEspaço';
import RegistarSetor from '../screens/RegistrationSector/RegistrationSector';
import SolicitarReserva from '../screens/SolicitarReserva/SolictarReserva/SolicitarReserva';
import GerirReserva from '../screens/SolicitarReserva/GerirReserva/GerirReserva';
import ConsultarEspaço from '../screens/Space/ConsultarEspaco/ConsultarEspaco';
import ReservaSemSolicitacao from '../screens/ReservaSemSolicitacao/ReservaSemSolicitacao';
import GerirServicos from '../screens/GerirServicos/GerirServicos';
import GerirDetalhes from '../screens/GerirServicos/GerirDetalhes/GerirDetalhes';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen
          name="RegistrationTeacher"
          component={CadastrarProfessor}
        />
        <Stack.Screen name="LinkManagersSpace" component={LinkManagersSpace} />
        <Stack.Screen name="RegistrationSector" component={RegistarSetor} />
        <Stack.Screen name="SolicitarReserva" component={SolicitarReserva} />
        <Stack.Screen name="GerirReserva" component={GerirReserva} />
        <Stack.Screen name="ConsultarEspaços" component={ConsultarEspaço} />
        <Stack.Screen
          name="ReservaSemSolicitacao"
          component={ReservaSemSolicitacao}
        />
        <Stack.Screen name="GerirServicos" component={GerirServicos} />
        <Stack.Screen name="GerirDetalhes" component={GerirDetalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
