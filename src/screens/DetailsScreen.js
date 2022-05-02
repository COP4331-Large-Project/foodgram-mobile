import * as React from 'react';
import { Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import Header from '../components/Header';
import { theme } from '../core/theme';
import Paragraph from '../components/Paragraph';

export default function DetailsScreen({ route, goBack, navigation }) {

    const {recipeId} = route.params;

    return (
      <SafeAreaView style={styles.Safe}>
          <TouchableOpacity onPress={navigation.goBack} style={styles.container}>
            <Image
              style={styles.image}
              source={require('../assets/arrow_back.png')}
          />
          </TouchableOpacity>
          <Header>
            Details
          </Header>
          <Paragraph>Here are the details for: {JSON.stringify(recipeId)}!!!</Paragraph>
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
      top: 70,
      left: 20,
    },
    image: {
      width: 24,
      height: 24,
    },
})