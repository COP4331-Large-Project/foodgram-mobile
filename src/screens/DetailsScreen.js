import * as React from 'react';
import { Text, View, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';


export default function DetailsScreen({ route, navigation }) {

    const {recipeId} = route.params;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.text}>Here are the details for: {JSON.stringify(recipeId)}!!!</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      alignContent: 'center',
      textAlign: 'center'
    },
})