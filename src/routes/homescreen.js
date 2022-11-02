import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Sagrado from './../telas/index';
import Home from './../telas/home.js'
import Cadastro from './../telas/cadastro.js';
import Register from './../telas/register';

const Stack = createStackNavigator();

export default function HomeScreen() {
    return (
      <Stack.Navigator>
          <Stack.Screen name='index' component={Sagrado}/>
          <Stack.Screen name='home' component={Home}/>
          <Stack.Screen name='cadastro' component={Cadastro}/>
          <Stack.Screen name='register' component={Register}/>
      </Stack.Navigator>
    );
  }