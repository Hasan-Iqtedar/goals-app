import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity='0.7'>
            <View style={styles.goalsList}>
                <Text >{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    goalsList: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        backgroundColor: 'lightgray'
    }
});

export default GoalItem;
