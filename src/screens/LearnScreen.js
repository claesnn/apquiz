import React from 'react';
import { ScrollView } from 'react-native';
import LearnCard from '../components/LearnCard';

function LearnScreen({ navigation }) {
    return (
        <>
            <ScrollView style={[styles.container, { padding: 10, marginTop: 60 }]}>
                <LearnCard navigation={navigation} title='Syntaks' />
                <LearnCard navigation={navigation} title='Verber' />
                <LearnCard navigation={navigation} title='Substantiver' />
            </ScrollView>
        </>
    );
}

export default LearnScreen;