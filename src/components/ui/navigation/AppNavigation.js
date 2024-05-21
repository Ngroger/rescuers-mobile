import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../../screens/AuthScreen";
import { NavigationContainer } from '@react-navigation/native';
import RegScreen from "../../screens/RegScreen";
import MainScreen from "../../screens/MainScreen";

function AppNavigation() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AuthScreen">
                <Stack.Screen name="AuthScreen" component={AuthScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="RegScreen" component={RegScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default AppNavigation;