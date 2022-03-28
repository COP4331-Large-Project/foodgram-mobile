// old login screen

import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, TextInput, Button, TouchableOpacity } from 'react-native';

function LoginScreen(props) {
    return (
      <ImageBackground 
        style={styles.background}
        source={require("../assets/background_dot.png")}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.title}>FoodGram</Text>
          <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
        </View>
        <View>
          <TextInput style={styles.username} placeholder={"Username"}/>
          <TextInput style={styles.password} placeholder={"Password"}/>
        </View>
        <View style={styles.loginButton}>
          <Button title='Login' onPress={ () => Alert.alert('Is it working?')}/>
        </View>
        <View style={styles.registerButton}>
          <Button title='Register' onPress={ () => Alert.alert('Is it working?')}/>
        </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    color: "#3F3D56",
    fontWeight: "700",
    fontSize: 30,
    fontStyle: "normal",
  },
  logo: {
    width: 480,
    height: 501,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#3F3D56",
  },
});

export default LoginScreen;