import React, { useState, useEffect } from 'react';
import {Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import estilos from './../estilos/estilos.js'

//const [valorPegar, Método(permite mudar o estado)] = useState()

export default function Cadastro({navigation}){
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
    return <ScrollView>
    <View>
    <TextInput
        style ={estilos.caixaTexto}
        placeholder="Digite o seu login"
        placeholderTextColor={'#A9A9A9'}
        onChangeText={novoLogin => setLogin(novoLogin)} 
        value={login}
      />
        <TextInput
        style ={estilos.caixaTexto}
        placeholder="Digite sua senha"
        placeholderTextColor={'#A9A9A9'}
        onChangeText={novaSenha => setSenha(novaSenha)}
        value={senha}
      />
       <TextInput
        style ={estilos.caixaTexto}
        placeholder="Digite novamente sua senha"
        placeholderTextColor={'#A9A9A9'}
      />
    </View>
    <TouchableOpacity style={estilos.botao} onPress={() => {
        console.log("login:",login,"-","senha:",senha)
        navigation.navigate('register')
    }}>
        <Text style={estilos.textoBotao}>
            Cadastrar
        </Text>
    </TouchableOpacity>

</ScrollView>
}