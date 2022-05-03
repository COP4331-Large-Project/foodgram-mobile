import React from 'react'
import Header from '../components/Header'
import { useState, useEffect } from 'react';
import { Button, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, StatusBar, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../core/theme'
import RecipeCard from '../components/RecipeCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchInput from '../components/SearchInput';


const getData = async () => {
  try {
    const data = await AsyncStorage.getItem('user_data');
    //console.log("data: " + data);
    var user = JSON.parse(data);
    //console.log("userId: " + user.id);
    return user.id;

  } catch(e) {
    console.log(e.toString());
    return -1;
  }
}

const setResult = async (value) => {
  try {
    await AsyncStorage.setItem('feed', JSON.stringify(value))
  } catch (e) {
    console.log(e.toString());
    return;
  }
}


export default function Dashboard ({ navigation, focused }) {
  const [query, setQuery] = useState("");
  const [clicked, setClicked] = useState(false);
  const [userSession, setUserSession] = useState()
  const [feed, setFeed] = useState([]);

  const [recipeCards, setRecipeCards] = useState([]);

  ;(async () => {
    const user = await getData()
    //console.log(user)
    setUserSession(user);
  })()

  useEffect(() => {
    console.log("dddddddddddddddddddddddddd");
    loadFeed("");
  }, [recipeCards]);

  const loadFeed = async (query) => {
    var obj = { search: query };
    var js = JSON.stringify(obj);
    
    try {
      const response = await fetch('https://foodgram-demo.herokuapp.com/api/search/', {
        method: "POST",
        body: js,
        headers: { "Content-Type": "application/json" },
      });
      var res = JSON.parse(await response.text());
  
      setRecipeCards(res)
      
    } catch (e) {
      console.log(e.toString());
    }
  };

  return (
      <SafeAreaView style={styles.Safe}>
        <TouchableOpacity onPress={() => navigation.navigate('StartScreen')}>
          <MaterialIcons 
            name="logout" 
            size={24} 
            color={focused ? theme.colors.terciary : theme.colors.primary}
            style={{alignItems: 'center', justifyContent: 'center', top: 30, right: -160}}
          />
        </TouchableOpacity>
        <Header>
          Welcome
        </Header>
        <SearchInput
          label="Search"
          onChangeText={(text) => loadFeed(text)}
        />
        
        <ScrollView style={styles.Scroll}>
          {recipeCards.length > 0 ? recipeCards.map((recipeCard, i) => {
            return (
              <RecipeCard 
                onPress={() => navigation.navigate('DetailsScreen', {
                  recipeId: recipeCard._id,
                })}
                key={recipeCard._id} 
                image={{uri: recipeCard.imagePath}} 
                title={recipeCard.name} 
                description={recipeCard.instructions} 
                {...recipeCard}
              />
            );
          }) : null }
        </ScrollView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  Safe: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 390,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: theme.colors.surface,
  },

  Scroll: {
    // backgroundColor: '#C3B1E1',
    backgroundColor: theme.colors.surface,
  },

})