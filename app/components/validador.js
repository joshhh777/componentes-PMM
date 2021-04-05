import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Validar = props => (
   <View style={estilos.cuerpo}>
       <TextInput style={estilos.input}></TextInput>
       <Text style={estilos.texto}>{props.textValidar}</Text>
   </View>

);


const estilos = StyleSheet.create({
    input:{
       width: 200,
       height: 40,
       color:'white',
       textAlign:'center',
       borderColor:'gray',   
       borderWidth:1
    },

    cuerpo:{
      alignItems:'center'
    },

    texto:{
        color:'white'
    },
});

export default Validar;