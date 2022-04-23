import * as React from 'react';
import { Text, View } from 'react-native';

export default function MyRecipesScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', 
                   alignItems: 'center' }}>
        <Text>My Recipes!</Text>
        </View>
    );
}