import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import TextInput from '../components/TextInput';
import { useState } from 'react';
import Buttonn from '../components/Button';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import * as PhotoPicker from 'expo-image-picker';

export default function PostScreen({ navigation }) {

    const [name, setName] = useState()
    const [ingredients, setIngredients] = useState()
    const [instructions, setInstructions] = useState()
    const [category, setCategory] = useState()
    const [file, setFile] = useState(null)
    var userID = "null"
    //const [errorValidation, setErrorValidation] = useState("");
    const [message, setMessage] = useState("");

    const PostRecipe = async (event) => {
        event.preventDefault();
    
        // console.log(userID);
        // console.log("name->", name);
        // console.log("file->", file);
        // console.log("instructions->", instructions);
        // console.log("instructions->", ingredients);
        // console.log("category->", category);
    
        if(!file || name === "" || instructions === "" || ingredients === "") {
          setMessage("Please fill all entries to post a recipe");
          return;
        }
    
        var formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("userId", userID);
        formData.append("ingredients", ingredients);
        formData.append("instructions", instructions);
        formData.append("category", category);

        console.log(formData)
    
        try {
          const response = await fetch('https://foodgram-demo.herokuapp.com/api/upload/', {
            method: "POST",
            body: formData,
            //headers: { "Content-Type": "multipart/form-data" }
          });
    
          var res = JSON.parse(await response.text());
          console.log(res.name)
          console.log("Successfully added the recipe!");
         
        } catch (e) {
          console.log("error->", e.toString());
          return;
        }
      };

    const HandleChooseImage = async () => {
        const permissionResult = await PhotoPicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your photos!");
            return;
        }

        const result = await PhotoPicker.launchImageLibraryAsync();

        // Explore the result
        console.log(result);

        if (!result.cancelled) {
            setFile(result.uri);
            console.log(result.uri);
        }
    }

    const HandleTakeImage = async () => {
        const permissionResult = await PhotoPicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your photos!");
            return;
        }

        const result = await PhotoPicker.launchCameraAsync();

        // Explore the result
        console.log(result);

        if (!result.cancelled) {
            setFile(result.uri);
            console.log(result.uri);
        }
    }
    return (
        //<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <SafeAreaView style={styles.Safe}>
            <ScrollView>
                <Text style={{textAlign:'center', fontSize: 20, marginTop: 15}}>Post New Recipe Here!</Text>
                <TextInput
                    label="Name"
                    returnKeyType="next"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    label="Category"
                    returnKeyType="next"
                    value={category}
                    onChangeText={(text) => setCategory(text)}
                />
                <TouchableOpacity onPress={HandleChooseImage} style={styles.image}>
                    <Text style={{color:'white', fontWeight: 'bold', fontSize: 15, lineHeight: 26,}}>Pick a photo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={HandleTakeImage} style={styles.image}>
                    <Text style={{color:'white', fontWeight: 'bold', fontSize: 15, lineHeight: 26,}}>Take a photo</Text>
                </TouchableOpacity>
                {/* <Image source={{uri: file.uri}}/> */}
                <TextInput
                    label="Ingredients"
                    returnKeyType="next"
                    value={ingredients}
                    onChangeText={(text) => setIngredients(text)}
                />
                <TextInput
                    label="Instructions"
                    returnKeyType="next"
                    value={instructions}
                    onChangeText={(text) => setInstructions(text)}
                />
                <TouchableOpacity onPress={PostRecipe} style={styles.image}>
                    <Text style={{color:'white', fontWeight: 'bold', fontSize: 15, lineHeight: 26,}}>Post It!!</Text>
                </TouchableOpacity>
                {/* <Buttonn mode="contained" style={{margintop:24}} onPressed={RecipePost}>Post It!!</Buttonn> */}
                <Text>{message}</Text>
            </ScrollView>
        </SafeAreaView>
        //</View>
    );
}

const styles = StyleSheet.create({
    Safe: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
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