import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './tabs';
import {
    StartScreen,
    LoginScreen,
    RegisterScreen,
    ResetPasswordScreen,
    DetailsScreen,
    Dashboard,
  } from '../screens';

const Stack = createNativeStackNavigator();

// component
const Stacks = () => {
    return (
        <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
            headerShown: false,
            }}
        >
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="Dashboard" component={Tabs} />
            <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
            <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
        </Stack.Navigator>
    )
}

export default Stacks;