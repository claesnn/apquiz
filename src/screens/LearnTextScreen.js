import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import LearnData from '../constants/LearnData';

function LearnTextScreen({ navigation, route }) {
    useEffect(() => {
        navigation.setOptions({ title: route.params['learnCategory'] })
    })

    return (
        <ScrollView contentContainerStyle={{ padding: 10, marginVertical: 60, paddingBottom: 70 }}>
            {LearnData[route.params['learnCategory']]}
        </ScrollView>
    );
}

export default LearnTextScreen;