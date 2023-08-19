import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuizScreen from '../screens/QuizScreen';

const Stack = createNativeStackNavigator();

function QuizStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerTransparent: true, headerBlurEffect: true, headerTitleStyle: { fontSize: 20, fontFamily: 'PlayfairDisplay_700Bold' } }} />
        </Stack.Navigator>
    );
}

export default QuizStack;