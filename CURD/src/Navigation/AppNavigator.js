import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddUser from '../Screens/AddUser';
import UserScreen from '../Screens/UserScreen';

const AppNavigator = () => {
    const Stack = createNativeStackNavigator(); // Capitalized variable name
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='UserScreen'>
                <Stack.Screen name='UserScreen' component={UserScreen}/>
                <Stack.Screen name='AddUser' component={AddUser}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
