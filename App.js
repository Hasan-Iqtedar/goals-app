import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {

  //To keep track of entered goal.
  const [enteredGoal, setEnteredGoal] = useState('');
  //To maintain a list of goals.
  const [goalsList, append] = useState([]);

  /**A function to synchronize enteredGoal variable with the entered text.*/
  const updateEnteredText = (newText) => {
    setEnteredGoal(newText);
  }

  /**A function to append the new goal to goalsList upon clicking Add button.*/
  const addNewGoal = () => {
    append(currentGoals => { return [...currentGoals, enteredGoal]; });
  }

  return (

    <View style={styles.screen}>

      <Text style={styles.title}>Goals App</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputField} placeholder="Enter a Goal" onChangeText={updateEnteredText} />
        <Button title='Add' onPress={addNewGoal} />
      </View>

      <ScrollView>
        {goalsList.map((goal) => {
          return <TouchableOpacity><View key={goal} style={styles.goalsList}><Text >{goal}</Text></View></TouchableOpacity>
        })}
      </ScrollView>

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
  },
  goalsList: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    backgroundColor: 'lightgray'
  }

});
