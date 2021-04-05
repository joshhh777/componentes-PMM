import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import Validar from './app/components/validador'
import Lista from './app/components/miLista'
import { StyleSheet, Text, View,FlatList,Image} from 'react-native';

const DATA = [
  {
    id: '1',
    nombre: 'Tierra',
    pos:'Posicion numero 3 ',
    imagen: 'https://www.geoenciclopedia.com/wp-content/uploads/2020/04/capas_de_la_Tierra.jpg'
  },
  {
    id: '2',
    nombre: 'Marte',
    pos:'Posicion numero 4 ',
    imagen: 'https://services.meteored.com/img/article/des-micro-organismes-terrestres-capables-de-survivre-temporairement-sur-mars-316371-1_768.jpeg'
  },
  {
    id: '3',
    nombre: 'Jupiter',
    pos:'Posicion numero 5 ',
    imagen: 'https://astrojem.com/imagenes_voltaire/jupiter.jpg'
  },

  {
    id: '4',
    nombre: 'Venus',
    pos:'Posicion numero 2 ',
    imagen: 'https://as.com/diarioas/imagenes/2020/09/14/actualidad/1600097218_161823_1600097267_noticia_normal_recorte1.jpg'
  },
];


const render = ({ item }) => (
  <View style={{ flexDirection:'row'}}> 
    <Image style={{width:200, height:200, marginVertical:10}} source={{uri: item.imagen}}></Image>
    <View style={{justifyContent:'center'}}>
    <Text style={estilos.title}>{item.nombre}</Text>
    <Text style={estilos.title}>{item.pos}</Text>
    </View>
  </View>
);

export default class App extends Component{
    render(){
      return(
      <View style={estilos.container}>
        <View style={estilos.cabeza}>
        <Text style={estilos.textoc}>Hola como estas Jose Cancino</Text>
        <Validar textValidar={'Mayor de 18'}> </Validar>
        </View>
        <View style={estilos.lista}>
          <FlatList style={estilos.lista}
          data={DATA}
          renderItem={render}
          keyExtractor={item => item.id}>
          </FlatList>
        </View>
      </View>
      );
    }

}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    alignItems:'center'
  },

  lista:{
   borderWidth:1,
   borderColor:'red'
  },

  cabeza:{
    marginTop:60,
    alignItems: 'center'
   },

   textlista:{
     color:'white'
   },

  textoc:{
     color:'blue',
     marginVertical:10,
     alignItems:'center',
     fontSize: 30
     
  },

  title: {
    fontSize: 15,
    color:'white'
  },
});
