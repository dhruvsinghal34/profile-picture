import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppHeader from './components/AppHeader'
import Welcome from './screen/welcome'

export default class App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <AppHeader></AppHeader>
      <Welcome></Welcome>
      </View>
    );
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});



  