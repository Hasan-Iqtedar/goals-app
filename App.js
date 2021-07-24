import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');

  const updateEnteredText = (newText) => setEnteredGoal(newText);
  const addNewGoal = () => console.log(enteredGoal);

  return (

    <View style={styles.screen}>
      
      <Text style={styles.title}>Goals App</Text>

      <View style={styles.inputContainer}>

        <TextInput style={styles.inputField} placeholder="Enter a Goal" onChangeText={updateEnteredText}/>
        <Button title = 'Add' onPress={addNewGoal}/>

      </View>

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
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputField: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 7
  }
  

});
