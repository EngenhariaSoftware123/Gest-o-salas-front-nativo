import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home/Home';
import RegistroProfessor from '../screens/RegistrationTeacher/RegistrationTeacher';

const Drawer = createDrawerNavigator();

export default function DrawerTab() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="RegistrationTeacher" component={RegistroProfessor} />
        </Drawer.Navigator>
    );
}

