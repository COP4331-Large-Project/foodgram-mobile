import * as React from 'react';
import { Text, View, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import RecipeCard from '../components/RecipeCard'

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

export default function LikedRecipesScreen({ navigation }) {
    const [user, setUser] = useState()
    const [recipeCards, setRecipeCards] = useState([]);

    ;(async () => {
        const data = await getData();
        setUser(data);
    })()
    //console.log(user)

    const loadLiked = async () => {
        var obj = { userID: user };
        //console.log("AQUI-->" + query)
        var js = JSON.stringify(obj);
        // var js = {"search":query};
        try {
          const response = await fetch('https://foodgram-demo.herokuapp.com/api/showBookmarks', {
            method: "POST",
            body: js,
            headers: { "Content-Type": "application/json" },
          });
          var res = JSON.parse(await response.text());
          //console.log({res})
          setRecipeCards(res)
          console.log({recipeCards})
    
          // setRecipeCards({
          //   ...recipeCards,
          //   data: res,
          // });
          // temp=res[0]._id
          // console.log(res)
          // setFeed(res);
          //localStorage.setItem("feed", JSON.stringify(res));
          //setResult(JSON.stringify(res));
          
        } catch (e) {
          console.log(e.toString());
        }
    
        // setFeed(query)
      };
    
    return (
        <SafeAreaView style={styles.Safe}>
            <ScrollView>
            <TouchableOpacity onPress={loadLiked} style={styles.image}>
                <Text style={{color:'white', fontWeight: 'bold', fontSize: 15, lineHeight: 26,}}>Load them all</Text>
            </TouchableOpacity>
              {recipeCards.length > 0 ? recipeCards.map((recipeCard, i) => {
              return (
                <RecipeCard 
                  onPress={() => navigation.navigate('DetailsScreen', {
                    recipeId: recipeCard._id,
                    image: recipeCard.imagePath,
                    title: recipeCard.name,
                    ingredients: recipeCard.ingredients,
                    description: recipeCard.instructions,
                    firstName: recipeCard.firstName,
                    lastName: recipeCard.lastName,
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
    );
}
const styles = StyleSheet.create({
    Safe: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      backgroundColor:'white',
    },
  
    Scroll: {
      backgroundColor: '#ffffff',
    },
    image: {
        alignItems: 'center',
        borderRadius: 5,
        padding: 20,
        backgroundColor: 'darkblue',
        marginLeft: 100,
        marginRight: 100,
        width: '50%',
        marginVertical: 10,
        paddingVertical: 10,
    },
})