import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {

    //To keep track of entered goal.
    const [enteredGoal, setEnteredGoal] = useState('');

    /**A function to synchronize enteredGoal variable with the entered text.*/
    const updateEnteredText = (newText) => {
        setEnteredGoal(newText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputField} placeholder="Enter a Goal" onChangeText={updateEnteredText} />
            <Button title='Add' onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    );
}

const styles = StyleSheet.create({
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

export default GoalInput;
