import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Home from '../screens/Home/Home';
import Space from '../screens/Space/Space';
import Consult from '../screens/Consult/Consult';
import Profil from '../screens/Profile/Profile';

const Tab = createBottomTabNavigator();

// Defina os ícones uma vez fora do componente de rotas
const tabBarIcon =
  name =>
  ({color, size}) =>
    <Icon name={name} color={color} size={size} />;

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: tabBarIcon('home'), // Use o ícone aqui
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Space"
        component={Space}
        options={{
          tabBarIcon: tabBarIcon('bold'), // Use o ícone aqui
          tabBarLabel: 'Space',
        }}
      />
      <Tab.Screen
        name="Consult"
        component={Consult}
        options={{
          tabBarIcon: tabBarIcon('book'), // Use o ícone aqui
          tabBarLabel: 'Consult',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profil}
        options={{
          tabBarIcon: tabBarIcon('user'), // Use o ícone aqui
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}
