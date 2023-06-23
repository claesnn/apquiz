import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabNavigator from './MainTabNavigator';
import GameScreen from '../screens/GameScreen';
import LearnTextScreen from '../screens/LearnTextScreen';

const Stack = createNativeStackNavigator();

function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={MainTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Spil" component={GameScreen} />
            <Stack.Screen name="LærTekst" component={LearnTextScreen} />
        </Stack.Navigator>
    );
};

export default MainStack;