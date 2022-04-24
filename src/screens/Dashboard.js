import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { Text } from 'react-native-paper'
import List from "../components/List";
import SearchBar from "../components/SearchBar";
import { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../core/theme'

export default function Dashboard({ navigation }) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    // <SafeAreaView style={styles.Safe}>
    //   <ScrollView style={styles.Scroll}>
    <SafeAreaView style={styles.Safe}>
      <Header>
        <TouchableOpacity onPress={() => navigation.replace('StartScreen')}>
            <MaterialIcons 
              name="logout" 
              size={24} 
              color={theme.colors.terciary} 
              style={{alignItems: 'center', justifyContent: 'center', top: 10, right: -350}}
            />
        </TouchableOpacity>
      </Header>
      <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
      />
      <ScrollView>
        {/* <Background> */}
          <Paragraph>
            Recipe Stories will pop up here.
          </Paragraph>
          {/* <Button
            mode="outlined"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: 'StartScreen' }],
              })
            }
          >
            Logout
          </Button> */}
        {/* </Background> */}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Safe: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  // Scroll: {
  //   backgroundColor: '#ffffff',
  // },
})