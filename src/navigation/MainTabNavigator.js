import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import QuizStack from './QuizStack';
import LearnStack from './LearnStack';
import AboutStack from './AboutStack';

const Tab = createMaterialBottomTabNavigator();

function MainTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="QuizStack" component={QuizStack} options={{
                tabBarLabel: 'Quiz',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="cards-playing" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="LearnStack" component={LearnStack} options={{
                tabBarLabel: 'Lær',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="school" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="AboutStack" component={AboutStack} options={{
                tabBarLabel: 'Info',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default MainTabNavigator;