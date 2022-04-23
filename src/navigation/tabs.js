import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
    Dashboard,
    FindScreen,
    PostScreen,
    MyRecipesScreen,
    SettingsScreen,
} from '../screens'

const Tab = createBottomTabNavigator();

// component
const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Dashboard} />
            <Tab.Screen name='Post' component={PostScreen} />
            <Tab.Screen name='My Recipes' component={MyRecipesScreen} />
            <Tab.Screen name='Settings' component={SettingsScreen} />
        </Tab.Navigator>
    )
}

export default Tabs;