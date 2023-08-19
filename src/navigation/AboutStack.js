import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();

function AboutStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Info" component={AboutScreen} options={{ headerTransparent: true, headerBlurEffect: true, headerTitleStyle: { fontSize: 20, fontFamily: 'PlayfairDisplay_700Bold' } }} />
        </Stack.Navigator>
    );
}

export default AboutStack;