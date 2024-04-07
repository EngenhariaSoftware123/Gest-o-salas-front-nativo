import React from 'react';
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
import vincularGestorEspaco from '../screens/LinkManagersSpace/LinkManagersSpace';
import RegistarSetor from '../screens/RegistrationSector/RegistrationSector';
import DrawerTab from './Drawer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const Routes = () => {
  /*  useEffect(() => {
     GoogleSignin.configure({
       webClientId: '',
       offlineAccess: true,
     });
   }, []); */

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
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name='Drawer' component={DrawerTab} />
        <Stack.Screen name="MainApp" component={TabRoutes} />
        <Stack.Screen name="Maintenance" component={ManutencaoScreen} />
        <Stack.Screen name="RegistrationTeacher" component={RegistroProfessor} />
        <Stack.Screen name="LinkManagersSpace" component={vincularGestorEspaco} />
        <Stack.Screen name="RegistrationSector" component={RegistarSetor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;