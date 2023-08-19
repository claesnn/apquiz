import React from 'react';
import { ScrollView } from 'react-native';
import LearnCard from '../components/LearnCard';
import styles from '../constants/styles';
import { useHeaderHeight } from '@react-navigation/elements';

function LearnScreen({ navigation }) {
    return (
        <>
            <ScrollView contentContainerStyle={{ padding: 10, marginTop: useHeaderHeight() }} style={[styles.container]}>
                <LearnCard navigation={navigation} title='Syntaks' />
                <LearnCard navigation={navigation} title='Verber' />
                <LearnCard navigation={navigation} title='Substantiver' />
            </ScrollView>
        </>
    );
}

export default LearnScreen;