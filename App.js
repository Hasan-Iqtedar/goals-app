import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  //To assign unique keys for FlatList.
  const [count, setCount] = useState(0);

  //To maintain a list of goals.
  const [goalsList, append] = useState([]);

  /**A function to append the new goal to goalsList upon clicking Add button.*/
  const addNewGoal = (newGoal) => {
    setCount(count + 1);
    append(currentGoals => {
      return [...currentGoals, { key: count.toString(), value: newGoal }];
    });
  }

  return (

    <View style={styles.screen}>
      <Text style={styles.title}>Goals App</Text>
      <GoalInput onAddGoal={addNewGoal} />
      <FlatList
        data={goalsList}
        renderItem={(dataItem) => <GoalItem title={dataItem.item.value} />}
      />
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
