import React from "react";
import MainStack from "./MainStack";
import { NavigationContainer } from "@react-navigation/native";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
};

export default AppNavigator;