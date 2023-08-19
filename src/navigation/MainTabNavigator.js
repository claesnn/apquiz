import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import QuizStack from './QuizStack';
import LearnStack from './LearnStack';
import AboutStack from './AboutStack';
import WordStack from './WordStack';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="QuizStack" component={QuizStack} options={{
                tabBarLabel: 'Quiz',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="cards-playing" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="WordStack" component={WordStack} options={{
                tabBarLabel: 'Match',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="sword" color={color} size={26} />
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