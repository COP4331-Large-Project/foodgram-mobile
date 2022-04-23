import * as React from 'react';
import { Text, View } from 'react-native';

export default function PostScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', 
                   alignItems: 'center' }}>
        <Text>Post New Recipe Here!</Text>
        </View>
    );
}