import { StyleSheet, Dimensions } from 'react-native';
import logo from './../../assets/logo.jpg';

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
    imagem:{
        width:"100%",
        height: 100/200*width,
    },
    caixaTexto:{
     height: 40,
     margin: 12,
     borderWidth: 1,
     padding: 10,
     backgroundColor: "white",
    },
    botao:{
        margin:16,
        marginTop:16,
        backgroundColor:"#191970",
        paddingVertical:16,
        borderRadius:6,
    },
    textoBotao:{
        textAlign:"center",
        color: "white",
        fontSize:16,
        lineHeight:26,
        fontWeight:"bold",
    },
    textoEscrita:{
        textAlign:'center',
        fontSize:22,
        lineHeight:26,
        fontWeight:'bold',
        color:'#191970',
    },
    botaoCadastro:{
        alignItems:'center',
        paddingTop:18 
    },
    mensagem:{
        fontSize:12,
        fontWeight:'bold',
        textAlign:"center",
    },
    textoLogin:{
        textAlign:'center',
        fontSize:22,
        lineHeight:26,
        fontWeight:'bold',
        color:'#191970',
        marginTop:15,
    }
 })