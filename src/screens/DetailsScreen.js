import * as React from 'react';
import { ScrollView, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import Header from '../components/Header';
import { theme } from '../core/theme';
import { 
  Avatar, 
  Card, 
  Title, 
  Paragraph, 
} from 'react-native-paper';

const rightContent = props => <Avatar.Icon {...props} icon="folder" />

export default function DetailsScreen({ route, goBack, navigation }) {

    const {
      recipeId, 
      image, 
      title, 
      ingredients, 
      description, 
      firstName, 
      lastName 
    } = route.params;

    return (
      <SafeAreaView style={styles.Safe}>
          <TouchableOpacity onPress={navigation.goBack} style={styles.container}>
            <Image
              style={styles.image}
              source={require('../assets/arrow_back.png')}
          />
          </TouchableOpacity>
          <Header>
            {route.params.title}
          </Header>
          <Card.Title style={styles.cardHeader} title="Recipe Details" subtitle="Get in my Belly!" right={rightContent}/>
          <Card style={styles.card}>
            <Card.Content>
            <Title>{route.params.title}</Title>
            <Card.Cover source={{uri: route.params.image}}/>
            <Paragraph>By: {route.params.firstName} {route.params.lastName}</Paragraph>
            <Paragraph></Paragraph>
            <Paragraph>Ingredients:</Paragraph>
            <Paragraph>{route.params.ingredients}</Paragraph>
            <Paragraph></Paragraph>
            <Paragraph>Instructions:</Paragraph>
            <Paragraph>{route.params.description}</Paragraph>
            </Card.Content>
          </Card>
      </SafeAreaView>
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
      backgroundColor: '#F8F8F8',
    },
    container: {
      position: 'absolute',
      top: 50,
      left: 20,
    },
    image: {
      width: 30,
      height: 30,
    },
    recipeImage: {
      marginTop: 30,
      width: 370,
      height: 270,
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
    Scroll: {
      // backgroundColor: '#C3B1E1',
      backgroundColor: theme.colors.surface,
    },
})