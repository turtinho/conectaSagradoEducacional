import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import logo from './../../assets/logo.jpg';
import estilos from './../estilos/estilos.js'

export default function Sagrado({navigation}){
    return <ScrollView>
        <View> 
            <Image source={(logo)} style={estilos.imagem}>
            </Image>
        </View>
        <View>
        <TextInput
            style ={estilos.caixaTexto}
            placeholder="Digite o seu login"
            placeholderTextColor={'#A9A9A9'}
          />
            <TextInput
            style ={estilos.caixaTexto}
            placeholder="Digite sua senha"
            placeholderTextColor={'#A9A9A9'}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={estilos.botao} onPress={() => {
            navigation.navigate('Home')
        }}>
            <Text style={estilos.textoBotao}>
                Logar
            </Text>
        </TouchableOpacity>
        <Text style={estilos.mensagem}>
            Crie sua conta agora mesmo
        </Text>
        <TouchableOpacity style={estilos.botaoCadastro} onPress={() => {
            navigation.navigate('cadastro')
        }}>
            <Text>
                Cadastre-se
            </Text>
        </TouchableOpacity>
        
    </ScrollView>
}

