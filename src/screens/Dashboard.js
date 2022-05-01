import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import { Text } from 'react-native-paper'
import List from "../components/List";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../core/theme'
import RecipeCard from '../components/RecipeCard'
import { recipeCards } from '../../RecipeCardsData'
import AsyncStorage from '@react-native-async-storage/async-storage';


const getData = async () => {
  try {
    const data = await AsyncStorage.getItem('user_data');
    console.log("data: " + data);
    var user = JSON.parse(data);
    console.log("userId: " + user.id);
    return user.id;

  } catch(e) {
    console.log(e.toString());
    return -1;
  }
}


export default function Dashboard ({ navigation }) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [recipeCards, setRecipeCards] = useState([]);

//  const user = getData();
//console.log(JSON.stringify(user));
  ;(async () => {
    const user = await getData()
    console.log(user)
  })()

  // console.log(userId);
  // console.log(firstName);
  // console.log(lastName);

  // console.log(recipeCards);
  // useEffect(() => {
  //   const updateFeed = setInterval(() => {
  //     setRecipeCards(fetch()))
  //   }, 100)
  // }, []);

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
         {/* {recipeCards.map((recipeCard, i) => {
           return (
             <RecipeCard {...recipeCard}/>
          );
        })} */}
        <RecipeCard
          title="Paella"
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests." 
          image={require('../assets/paella.jpg')}
        />
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