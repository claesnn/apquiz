import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();

function AboutStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Info" component={AboutScreen} />
        </Stack.Navigator>
    );
}

export default AboutStack;