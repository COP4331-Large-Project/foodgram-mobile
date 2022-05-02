import * as React from 'react';
import { Text, View, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('user_data');
      //console.log("data: " + data);
      var user = JSON.parse(data);
      //console.log("userId: " + user.id);
      return user.firstName + ' ' + user.lastName;
  
    } catch(e) {
      console.log(e.toString());
      return -1;
    }
  }

export default function SettingsScreen({ navigation }) {

    const [user, setUser] = useState()

    ;(async () => {
        const data = await getData();
        setUser(data);
    })()

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.text}>Thank you {user}!!!</Text>
            <Text style={styles.text}>For downloading the app!!</Text>
            <Text style={styles.text}>We know it is not perfect but we will get there</Text>
            <Text style={styles.text}>Please send us an email with your ideas to FoodGramDemoCOP4331@gmail.com</Text>
            <Text style={styles.text}>Made by the FoodGram Team!!</Text>

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
