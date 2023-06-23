import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LearnScreen from "../screens/LearnScreen";

const Stack = createNativeStackNavigator();

function LearnStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Lær" component={LearnScreen} />
        </Stack.Navigator>
    );
}

export default LearnStack;