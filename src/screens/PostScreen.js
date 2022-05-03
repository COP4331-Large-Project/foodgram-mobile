import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import TextInput from '../components/TextInput';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from '../core/theme';



const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('user_data');
      //console.log("data: " + data);
      var user = JSON.parse(data);
      //console.log("userId: " + user.id);
      return user.id;
  
    } catch(e) {
      // console.log(e.toString());
      return -1;
    }
  }

export default function PostScreen({ navigation }) {
    const hiddenFileInput = React.useRef()
    const [name, setName] = useState()
    const [ingredients, setIngredients] = useState()
    const [instructions, setInstructions] = useState()
    const [category, setCategory] = useState()
    const [file, setFile] = useState(null)
    //const [errorValidation, setErrorValidation] = useState("");
    const [message, setMessage] = useState("");

    const [userId, setUserId] = useState()

    ;(async () => {
        const data = await getData();
        setUserId(data);
    })()

    const PostRecipe = async (event) => {
        event.preventDefault();
        
        const data = await AsyncStorage.getItem('user_data');
        const user = JSON.parse(data);
        const firstName = user.firstName;
        const lastName = user.lastName;

        // console.log(userID);
        // console.log("name->", name);
        //  console.log("file->", file);
        // console.log("instructions->", instructions);
        // console.log("instructions->", ingredients);
        // console.log("category->", category);
    
        // if(!file || name === "" || instructions === "" || ingredients === "") {
        //   setMessage("Please fill all entries to post a recipe");
        //   return;
        // }
    
        var formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("userId", userId);
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("ingredients", ingredients);
        formData.append("instructions", instructions);
        formData.append("category", category);

        //const formData = JSON.stringify({file, name, userId, ingredients, instructions, category})

        // console.log("formdata", formData);
    
        try {
          const response = await fetch('https://foodgram-demo.herokuapp.com/api/upload/', {
            method: "POST",
            body: formData,
            //headers: { "Content-Type": "multipart/form-data" }
          });
          // console.log("ddd", response);
          // console.log("Successfully added the recipe!");
          navigation.navigate('Dashboard');
        } catch (e) {
          // console.log(e)
          setMessage(e.toString());
          return;
        }
      };

      const selectImage = () => {
        hiddenFileInput.current.click();
      }

      const handleChangeImage = (event) => {
        setFile(event.target.files[0]);
      }
      // function handleChangeName(event) {
      //   setName(event.target.value);
      // }


    const HandleChooseImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          // console.log("ddddddddddddd", result);
      
          if (!result.cancelled) {
            setFile(result);
          }
    }

    const HandleTakeImage = async () => {
        const permissionResult = await PhotoPicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this app to access your photos!");
            return;
        }

        const result = await PhotoPicker.launchCameraAsync({allowsEditing:true});

        // Explore the result
        result.uri = result.uri.replace('file://', '')
        // console.log(result);

        if (!result.cancelled) {
            setFile(result.uri);
            // console.log(result.uri);
        }
    }
    return (
        //<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <SafeAreaView style={styles.Safe}>
            <ScrollView>
                <Text style={{textAlign:'center', fontSize: 20, marginTop: 15}}>Post New Recipe Here!</Text>
                <TextInput
                    label="Name"
                    multiline
                    rows={1}
                    returnKeyType="next"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    // onChange={handleChangeName}
                />
                <TextInput
                    label="Category"
                    multiline
                    rows={1}
                    returnKeyType="next"
                    value={category}
                    onChangeText={(text) => setCategory(text)}
                />
                <TouchableOpacity onPress={selectImage} style={styles.image}>
                  <div>
                    <input ref={hiddenFileInput} type="file" onChange={handleChangeImage} style={{display:'none'}}/>
                  </div>
                    <Text style={{color:'white', fontWeight: 'bold', fontSize: 15, lineHeight: 26,}}>Pick a photo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={selectImage} style={styles.image}>
                    <div>
                      <input ref={hiddenFileInput} type="file" onChange={handleChangeImage} style={{display:'none'}}/>
                    </div>
                    <Text style={{color:'white', fontWeight: 'bold', fontSize: 15, lineHeight: 26,}}>Take a photo</Text>
                </TouchableOpacity>
                {/* {file && <Image source={{ uri: file }} style={{ width: 200, height: 200, justifyContent:'center', alignContent:'center', left: 100 }} />} */}
                {/* <Image source={{uri: file.uri}}/> */}
                <TextInput
                    label="Ingredients"
                    multiline
                    rows={1}
                    returnKeyType="next"
                    value={ingredients}
                    onChangeText={(text) => setIngredients(text)}
                />
                <TextInput
                    label="Instructions"
                    multiline
                    rows={1}
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
      backgroundColor: theme.colors.surface,
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