import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';
import ManutencaoScreen from '../screens/Maintenance/Maintenance';
import RegistroProfessor from '../screens/RegistrationTeacher/RegistrationTeacher';
import TabRoutes from './tab.routes';
import LinkManagersSpace from '../screens/LinkManagersSpace/LinkManagersSpace';
import RegistarSetor from '../screens/RegistrationSector/RegistrationSector';
import Profile from '../screens/Profile/Profile';
import Space from '../screens/Space/Space';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>

        {/* // Login */}
         <Stack.Screen name="Login" component={Login} /> 

        {/* Menu de beixo */}
        <Stack.Screen name="MainApp" component={TabRoutes} />

        {/* // Home */}
        <Stack.Screen name="Home" component={Home} />

        {/* Espaço */}
        <Stack.Screen name="Space" component={Space} />

        {/* Perfil */}
        <Stack.Screen name="Profile" component={Profile} />

        {/* Manutenção de salas */}
        <Stack.Screen name="Maintenance" component={ManutencaoScreen} />

        {/* Cadastrar Professor */}
        <Stack.Screen
          name="RegistrationTeacher"
          component={RegistroProfessor}
        />

        {/* Cadastrar Gestor ao espáço */}
        <Stack.Screen name="LinkManagersSpace" component={LinkManagersSpace} />
        
        {/* Cadastrar Setor */}
        <Stack.Screen name="RegistrationSector" component={RegistarSetor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
