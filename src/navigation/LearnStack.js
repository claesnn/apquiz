import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LearnScreen from "../screens/LearnScreen";

const Stack = createNativeStackNavigator();

function LearnStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Lær" component={LearnScreen} options={{ headerTransparent: true, headerBlurEffect: true, headerTitleStyle: { fontSize: 20, fontFamily: 'PlayfairDisplay_700Bold' } }} />
        </Stack.Navigator>
    );
}

export default LearnStack;