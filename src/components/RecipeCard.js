import * as React from 'react';
import { Image } from 'react-native';
import { CheckBox } from 'react-native';
import { 
    Avatar, 
    Button, 
    Card, 
    Title, 
    Paragraph, 
    Checkbox
} from 'react-native-paper';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

//let path = './public/images'
const RecipeCard = (props) => (
  <Card>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    <Card.Content>
      <Title>{props.title}</Title>
      <Paragraph>{props.description}</Paragraph>
    </Card.Content>
    <Card.Cover source={props.image}/>
    <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
    </Card.Actions>
  </Card>
);


export default RecipeCard;