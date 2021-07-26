import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {

    //To keep track of entered goal.
    const [enteredGoal, setEnteredGoal] = useState('');

    /**A function to synchronize enteredGoal variable with the entered text.*/
    const updateEnteredText = (newText) => {
        setEnteredGoal(newText);
    }

    /**A function to add a new goal by opening the modal.*/
    const addGoal = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal animationType='slide' visible={props.visible} >
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputField} placeholder="Enter a Goal" onChangeText={updateEnteredText} value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title='Cancel' color='red' onPress={props.onCancel} /></View>
                    <View style={styles.button}><Button title='Add' onPress={addGoal} /></View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputField: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 7
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: '60%'
    }

});

export default GoalInput;
