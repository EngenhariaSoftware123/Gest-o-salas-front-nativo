import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Home from '../screens/Home/Home';
import Consult from '../screens/Consult/Consult';
import Profile from '../screens/Profile/Profile';

// Carregar fontes de ícones
MaterialCommunityIcons.loadFont();
Icon.loadFont();
Feather.loadFont();

const Tab = createBottomTabNavigator();

const tabBarIcon = name => ({ color, size }) => (
  <Feather name={name} color={color} size={size} />
);

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
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
