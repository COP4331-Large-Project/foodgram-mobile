import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { theme } from '../core/theme'
import { FontAwesome } from '@expo/vector-icons';
import {  
    Button, 
    Card, 
    Title, 
    Paragraph, 
} from 'react-native-paper';

export default function RecipeCard (props, focused) {

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
			<Paragraph>{props.description}</Paragraph>
			</Card.Content>
			<Card.Cover source={props.image}/>
			<Card.Actions>
				<TouchableOpacity>
					<FontAwesome 
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							right: -5,
						}}
						name="heart" 
						size={20} 
						color={focused ? "#D3D3D3" : theme.colors.terciary}
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
