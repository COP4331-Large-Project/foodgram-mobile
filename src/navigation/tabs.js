import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../core/theme';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native-web';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

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
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 5,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    height: 75,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen 
                name='Home' 
                component={Dashboard} 
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <FontAwesome 
                                name="home" 
                                size={25} 
                                color={focused ? theme.colors.terciary : theme.colors.primary}
                                style={{alignItems: 'center', justifyContent: 'center', top: 15}}
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
                            <FontAwesome 
                                name="list-alt" 
                                size={25} 
                                color={focused ? theme.colors.terciary : theme.colors.primary}
                                style={{alignItems: 'center', justifyContent: 'center', top: 15}}
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
                                size={48} 
                                color={focused ? theme.colors.terciary : theme.colors.primary}
                                style={{
                                    top: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    // ...styles.shadow
                                }}
                            />
                        );
                    },
                }} 
            />
            <Tab.Screen 
                name='Liked Recipes' 
                component={LikedRecipesScreen} 
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <FontAwesome 
                                name="heart" 
                                size={25} 
                                color={focused ? theme.colors.terciary : theme.colors.primary}
                                style={{alignItems: 'center', justifyContent: 'center', top: 15}}
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
                            <FontAwesome 
                                name="user" 
                                size={25} 
                                color={focused ? theme.colors.terciary : theme.colors.primary}
                                style={{alignItems: 'center', justifyContent: 'center', top: 15}}
                            />
                        );
                    }
                }} 
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,

    },
    icon: {
      position: 'absolute',
      top: 20,
    },
  })

export default Tabs;