import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';
import ManutencaoScreen from '../screens/Maintenance/Maintenance';
import RegistroProfessor from '../screens/RegistrationTeacher/RegistrationTeacher';
import TabRoutes from './tab.routes';
import vincularGestorEspaço from '../screens/LinkManagersSpace/LinkManagersSpace'
import RegistarSetor from '../screens/RegistrationSector/RegistrationSector'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '377017939708-ni2in93upntrr2oescbu2va00cg3pnj0.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Usuário logado:', userInfo);
      // Redirecionar para a tela principal após o login bem-sucedido
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Login cancelado');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Login em andamento');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Serviços do Google Play não disponíveis');
      } else {
        console.error('Erro ao fazer login:', error);
      }
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{ headerShown: false }}>
        {/*  <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="MainApp" component={TabBar} />
        <Stack.Screen name="App" component={TabRoutes} />
        <Tab.Screen name="Maintenance" component={ManutencaoScreen} />
        <Tab.Screen
          name="RegistrationTeacher"
          component={RegistroProfessor}
        />
        <Tab.Screen name='RegistrationSector' component={RegistarSetor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
