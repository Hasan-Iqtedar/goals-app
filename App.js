import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (

    <View style={styles.screen}>
      <Text style={styles.title}>Goals App</Text>
    </View>


  );
}

const styles = StyleSheet.create({
 
  screen: {
    padding: 50
  },
  title: {
    color: 'maroon',
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 20
  }

});
