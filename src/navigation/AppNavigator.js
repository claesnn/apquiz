import React from "react";
import MainTabNavigator from "./MainStack";
import { NavigationContainer } from "@react-navigation/native";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <MainTabNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;