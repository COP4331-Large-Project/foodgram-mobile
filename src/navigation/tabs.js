import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../core/theme';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native-web';
import { Ionicons } from '@expo/vector-icons';

import { 
    Dashboard,
    PostScreen,
    MyRecipesScreen,
    LikedRecipesScreen,
    SettingsScreen,
} from '../screens'

const Tab = createBottomTabNavigator();

// component
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 40,
                    left: 20,
                    right: 20,
                    marginHorizontal: 20,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    height: 60,
                    shadowColor: '#000',
                    shadowOpacity: 0.06,
                    shadowOffset: {
                        width: 10,
                        height: 10
                    },
                    paddingHorizontal: 20,
                }
            }}
        >
            {/* <Tab.Screen name='Home' component={Dashboard} /> */}
            <Tab.Screen 
                name='Home' 
                component={Dashboard} 
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Ionicons 
                                name="ios-home-sharp" 
                                size={22} 
                                color={focused ? theme.colors.terciary : theme.colors.primary}
                                style={{alignItems: 'center', justifyContent: 'center', top: 10}}
                            />
                        );
                    }
                }} 
            />
            <Tab.Screen 
                name='My Recipes' 
                component={MyRecipesScreen} 
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Ionicons 
                                name="list-circle-sharp" 
                                size={24} 
                                color={focused ? theme.colors.terciary : theme.colors.primary}
                                style={{alignItems: 'center', justifyContent: 'center', top: 10}}
                            />
                        );
                    }
                }} 
            />
            <Tab.Screen 
                name='Post' 
                component={PostScreen} 
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Ionicons 
                                name="add-circle" 
                                size={32} 
                                color={focused ? theme.colors.terciary : theme.colors.primary}
                                style={{alignItems: 'center', justifyContent: 'center', top: 10}}
                            />
                        );
                    }
                }} 
            />
            <Tab.Screen 
                name='Liked Recipes' 
                component={LikedRecipesScreen} 
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Ionicons 
                                name="heart-circle-sharp" 
                                size={24} 
                                color={focused ? theme.colors.terciary : theme.colors.primary}
                                style={{alignItems: 'center', justifyContent: 'center', top: 10}}
                            />
                        );
                    }
                }} 
            />
            <Tab.Screen 
                name='Settings' 
                component={SettingsScreen} 
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Ionicons 
                                name="settings-sharp" 
                                size={22} 
                                color={focused ? theme.colors.terciary : theme.colors.primary}
                                style={{alignItems: 'center', justifyContent: 'center', top: 10}}
                            />
                        );
                    }
                }} 
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    icon: {
      position: 'absolute',
      top: 20,
    },
  })

export default Tabs;