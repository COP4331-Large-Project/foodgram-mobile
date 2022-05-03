import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';
import { theme } from '../core/theme'
import { FontAwesome } from '@expo/vector-icons';
import {  
    Button, 
    Card, 
    Title, 
    Paragraph, 
} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export default function RecipeCard (props, focused) {

	const [user, setUser] = useState();

    ;(async () => {
        const data = await getData();
        setUser(data);
    })()

	const Bookmark = async () => {
		var obj = { userID: user, instructionsID: props._id };
        var js = JSON.stringify(obj);

        try {
          const response = await fetch('https://foodgram-demo.herokuapp.com/api/bookmark', {
            method: "POST",
            body: js,
            headers: { "Content-Type": "application/json" },
          });
          var res = JSON.parse(await response.text());
          console.log({res})
          
        } catch (e) {
          console.log(e.toString());
        }
	}

	const UnBookmark = async () => {
		var obj = { userID: user, instructionsID: props._id };
        var js = JSON.stringify(obj);

        try {
          const response = await fetch('https://foodgram-demo.herokuapp.com/api/unbookmark', {
            method: "POST",
            body: js,
            headers: { "Content-Type": "application/json" },
          });
          var res = JSON.parse(await response.text());
          console.log({res})
          
        } catch (e) {
          console.log(e.toString());
        }
	}

	return (
		<Card 
			style={{
			backgroundColor: theme.colors.surface,
			margin: 10,
			marginTop: 14,
			borderRadius: 30,
			display: "flex",
			flexDirection: "column",
		}}
		
		>
		{/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
			<Card.Content>
			<Title>{props.title}</Title>
			{/* <Paragraph>{props.description}</Paragraph> */}
			</Card.Content>
			<Card.Cover source={props.image}/>
			<Card.Actions>
				<TouchableOpacity>
					<FontAwesome 
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							right: -5,
							marginRight: 10,
						}}
						name="thumbs-up" 
						size={25} 
						color={focused ? "#D3D3D3" : theme.colors.terciary}
						onPress={Bookmark}
					// style={{alignItems: 'center', justifyContent: 'center', top: 30, right: -160}} 
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<FontAwesome 
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							right: -5,
						}}
						name="thumbs-down" 
						size={25} 
						color={focused ? "#D3D3D3" : theme.colors.terciary}
						onPress={UnBookmark}
					// style={{alignItems: 'center', justifyContent: 'center', top: 30, right: -160}} 
					/>
				</TouchableOpacity>
				<Button style={{
						alignItems: 'center',
						justifyContent: 'center',
						right: -10,
					}}
					mode="text" 
					onPress={props.onPress}
				>
					Details
				</Button>
			</Card.Actions>
	  </Card>

	)
}
