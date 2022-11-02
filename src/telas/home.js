import React from 'react';
import {View, Text} from 'react-native';
import estilos from './../estilos/estilos.js'

export default function Home(){
    return (
    <>
    <View>
        <Text style={estilos.textoEscrita}>
            Login Sucessful
        </Text>
    </View>
    </>
    );
}