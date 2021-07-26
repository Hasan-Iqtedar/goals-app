import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity='0.7' onPress={props.onDelete.bind(this, props.id)}>
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
        backgroundColor: 'ghostwhite'
    }
});

export default GoalItem;
