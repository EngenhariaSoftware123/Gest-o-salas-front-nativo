import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feed from '../screens/Profile/Profile';
import Icon from 'react-native-vector-icons/Feather';
import Home from '../screens/Home/Home';
import Space from '../screens/Space/Space';
import Consult from '../screens/Consult/Consult';
import Profile from '../screens/Profile/Profile';

const Tab = createBottomTabNavigator();

// Defina os ícones uma vez fora do componente de rotas
const tabBarIcon = (name) => ({ color, size }) => <Icon name={name} color={color} size={size} />;

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Consult"
        component={Consult}
        options={{
          tabBarIcon: tabBarIcon('book'),
          tabBarLabel: 'Consult',
        }}
      />
       <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      /> 
    </Tab.Navigator>
  );
}
