import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import { createTable } from './services/login'

import Rotas from './src/routes/rotas'

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar />
      <Rotas/>
    </SafeAreaView>
  );
}

