import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function LikedRecipesScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', 
                   alignItems: 'center' }}>
        <Text>All liked recipes will go here!</Text>
        </View>
    );
}