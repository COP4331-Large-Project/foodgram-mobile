import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.Safe}>
      <ScrollView style={styles.Scroll}>
        <Background>
          <Logo />
          <Header>Welcome</Header>
          <Paragraph>
            To The Best Recipe Handler In Town.
          </Paragraph>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('LoginScreen')}
          >
            Login
          </Button>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('RegisterScreen')}
          >
            Sign Up
          </Button>
        </Background>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Safe: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  Scroll: {
    backgroundColor: '#ffffff',
  },
})