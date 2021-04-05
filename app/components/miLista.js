import React, {Component} from 'react';
import {View, StyleSheet, FlatList, } from 'react-native';


  const Lista = props => (
    <View >
      <FlatList data={props.datos}>      
     </FlatList>
    </View>
 
);

const estilos = StyleSheet.create({
    container: {
        flex: 1,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
    
});

export default Lista;
