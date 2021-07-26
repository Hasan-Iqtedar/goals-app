import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  //To assign unique keys for FlatList.
  const [count, setCount] = useState(0);

  //To control modal visibility.
  const [isModalVisible, setIsModalVisible] = useState(false);

  //To maintain a list of goals.
  const [goalsList, setGoalsList] = useState([]);

  /**A function to append the new goal to goalsList upon clicking Add button.*/
  const addNewGoal = (newGoal) => {
    setCount(count + 1);
    setGoalsList(currentGoals => {
      return [...currentGoals, { key: count.toString(), value: newGoal }];
    });
    setIsModalVisible(false);
  }

  /**A function to remove a goal upon clicking it.*/
  const removeGoal = (goalKey) => {
    setGoalsList(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalKey)
    });
  }

  /**A function to cancel addition of a goal in the modal.*/
  const cancelGoalAddition = () => {
    setIsModalVisible(false);
  }

  return (

    <View style={styles.screen}>
      <Text style={styles.title}>Goals App</Text>
      <GoalInput onAddGoal={addNewGoal} visible={ isModalVisible } onCancel={cancelGoalAddition} />
      <Button title="Add New Goal" onPress={ () => setIsModalVisible(true) } />
      <FlatList
        data={goalsList}
        renderItem={(dataItem) => <GoalItem id={dataItem.item.key} onDelete={removeGoal} title={dataItem.item.value} />}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    marginBottom: 75,
  },
  title: {
    color: 'maroon',
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 20
  }
});
