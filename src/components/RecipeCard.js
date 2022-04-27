import * as React from 'react';
import { 
    Avatar, 
    Button, 
    Card, 
    Title, 
    Paragraph 
} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const RecipeCard = (props) => (
  <Card>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    <Card.Content>
      <Title>{props.title}</Title>
      <Paragraph>{props.description}</Paragraph>
    </Card.Content>
    <Card.Cover source={props.image} /> 
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default RecipeCard;