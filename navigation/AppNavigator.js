import 'react-native-gesture-handler';
import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SetupScreen from "../screens/Admin/SetupScreen"


const Stack = createStackNavigator()

export default ()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SetupScreen" component={SetupScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


