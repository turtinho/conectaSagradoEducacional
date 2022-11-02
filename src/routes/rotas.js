import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './homescreen';
import Home from './../telas/home';

const Tab = createBottomTabNavigator();

export default function Rotas(){
    return (
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name='index' component={HomeScreen}/>
        <Tab.Screen name='Home' component={Home}/> 
    </Tab.Navigator>
    </NavigationContainer>
      
    );
  }
