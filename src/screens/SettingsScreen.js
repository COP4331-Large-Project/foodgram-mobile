import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { ScrollView, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { theme } from '../core/theme';
import { 
  Avatar, 
  Card, 
  Title, 
  Paragraph, 
} from 'react-native-paper';


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

      <SafeAreaView style={styles.Safe}>
        <Card.Title style={styles.cardHeader} title="About Us" subtitle="Team 22"/>
        <ScrollView>
          <Card style={styles.card}>
            <Card.Content>
            <Title>FoodGram</Title>
            <Card.Cover style={styles.recipeImage} source={require('../assets/logo512.png')}/>
            <Paragraph></Paragraph>
            <Paragraph>Thank you {user}!!!</Paragraph>
            <Paragraph></Paragraph>
            <Paragraph>For downloading the app!! We know it is not perfect but we will get there.</Paragraph>
            <Paragraph></Paragraph>
            <Paragraph>Please send us an email with your ideas to FoodGramDemoCOP4331@gmail.com</Paragraph>
            <Paragraph></Paragraph>
            <Paragraph>Made by the FoodGram Team!!</Paragraph>
            </Card.Content>
          </Card>
        </ScrollView>
    </SafeAreaView>

        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        //     <Text style={styles.text}>Thank you {user}!!!</Text>
        //     <Text style={styles.text}>For downloading the app!!</Text>
        //     <Text style={styles.text}>We know it is not perfect but we will get there</Text>
        //     <Text style={styles.text}>Please send us an email with your ideas to FoodGramDemoCOP4331@gmail.com</Text>
        //     <Text style={styles.text}>Made by the FoodGram Team!!</Text>

        // </View>
    );
}

const styles = StyleSheet.create({
    Safe: {
      flex: 1,
      padding: 10,
      width: '100%',
      maxWidth: 390,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.surface,
    },
    Scroll: {
      paddingTop: 10,
      backgroundColor: '#F8F8F8',
    },
    container: {
      position: 'absolute',
      top: 50,
      left: 20,
    },
    image: {
      top: 20,
      width: 30,
      height: 30,
    },
    recipeImage: {
      marginTop: 30,
      width: 200,
      height: 200,
      left: 50
    },
    cardHeader: {
      top: 10,
      left: 100,
    },
    card: {
      backgroundColor: theme.colors.surface,
			margin: 10,
			marginTop: 14,
			borderRadius: 30,
			display: "flex",
			flexDirection: "column",
    },
    // Scroll: {
    //   // backgroundColor: '#C3B1E1',
    //   backgroundColor: theme.colors.surface,
    // },
})

// const styles = StyleSheet.create({
//     text: {
//       fontSize: 20,
//       alignContent: 'center',
//       textAlign: 'center'
//     },
// })






// import * as React from 'react';
// import { ScrollView, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
// import { theme } from '../core/theme';
// import { 
//   Avatar, 
//   Card, 
//   Title, 
//   Paragraph, 
// } from 'react-native-paper';

// // const rightContent = props => <Avatar.Icon {...props} icon="folder" />

// export default function DetailsScreen({ route, navigation, goBack}) {

//     const {
//       recipeId, 
//       image, 
//       title, 
//       ingredients, 
//       description, 
//       firstName, 
//       lastName 
//     } = route.params;

//     return (
//       <SafeAreaView style={styles.Safe}>
//           <TouchableOpacity onPress={navigation.goBack} style={styles.container}>
//             <Image
//               style={styles.image}
//               source={require('../assets/arrow_back.png')}
//             />
//           </TouchableOpacity>
//           <Card.Title style={styles.cardHeader} title="Recipe Details" subtitle="Get in my Belly!"/>
//           <ScrollView>
//             <Card style={styles.card}>
//               <Card.Content>
//               <Title>{route.params.title}</Title>
//               <Card.Cover source={{uri: route.params.image}}/>
//               <Paragraph>By: {route.params.firstName} {route.params.lastName}</Paragraph>
//               <Paragraph></Paragraph>
//               <Paragraph>Ingredients:</Paragraph>
//               <Paragraph>{route.params.ingredients}</Paragraph>
//               <Paragraph></Paragraph>
//               <Paragraph>Instructions:</Paragraph>
//               <Paragraph>{route.params.description}</Paragraph>
//               </Card.Content>
//             </Card>
//           </ScrollView>
//       </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     Safe: {
//       flex: 1,
//       padding: 10,
//       width: '100%',
//       maxWidth: 390,
//       alignSelf: 'center',
//       alignItems: 'center',
//       justifyContent: 'center',
//       backgroundColor: theme.colors.surface,
//     },
//     Scroll: {
//       paddingTop: 10,
//       backgroundColor: '#F8F8F8',
//     },
//     container: {
//       position: 'absolute',
//       top: 50,
//       left: 20,
//     },
//     image: {
//       top: 20,
//       width: 30,
//       height: 30,
//     },
//     recipeImage: {
//       marginTop: 30,
//       width: 370,
//       height: 270,
//     },
//     cardHeader: {
//       top: 10,
//       left: 100,
//     },
//     card: {
//       backgroundColor: theme.colors.surface,
// 			margin: 10,
// 			marginTop: 14,
// 			borderRadius: 30,
// 			display: "flex",
// 			flexDirection: "column",
//     },
//     // Scroll: {
//     //   // backgroundColor: '#C3B1E1',
//     //   backgroundColor: theme.colors.surface,
//     // },
// })
