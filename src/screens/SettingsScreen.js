import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../core/theme'

export default function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', 
                   alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.replace('StartScreen')}>
            <Text style={{color: theme.colors.terciary, fontWeight: 'bold', fontSize: 70, lineHeight: 70,}}>Logout</Text>
            {/* <MaterialIcons 
              name="logout" 
              size={24} 
              color={theme.colors.terciary} 
              style={{alignItems: 'center', justifyContent: 'center'}}
            /> */}
        </TouchableOpacity>
        </View>
    );
}