import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabNavigator from './MainTabNavigator';
import GameScreen from '../screens/GameScreen';
import LearnTextScreen from '../screens/LearnTextScreen';
import WordGameScreen from '../screens/WordGameScreen';

const Stack = createNativeStackNavigator();

function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={MainTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Spil" component={GameScreen} options={{ headerTransparent: true, headerBlurEffect: true, headerTitleStyle: { fontSize: 20, fontFamily: 'PlayfairDisplay_700Bold' } }} />
            <Stack.Screen name="OrdLeg" component={WordGameScreen} options={{ headerTransparent: true, headerBlurEffect: true, headerTitleStyle: { fontSize: 20, fontFamily: 'PlayfairDisplay_700Bold' } }} />
            <Stack.Screen name="LærTekst" component={LearnTextScreen} options={{ headerTransparent: true, headerBlurEffect: true, headerTitleStyle: { fontSize: 20, fontFamily: 'PlayfairDisplay_700Bold' } }} />
        </Stack.Navigator>
    );
};

export default MainStack;