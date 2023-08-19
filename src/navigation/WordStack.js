import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WordScreen from '../screens/WordScreen';

const Stack = createNativeStackNavigator();

function WordStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Match" component={WordScreen} options={{ headerTransparent: true, headerBlurEffect: true, headerTitleStyle: { fontSize: 20, fontFamily: 'PlayfairDisplay_700Bold' } }} />
        </Stack.Navigator>
    );
}

export default WordStack;