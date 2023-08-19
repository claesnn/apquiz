import React from 'react';
import { ScrollView } from 'react-native';
import QuizCard from '../components/QuizCard';
import styles from '../constants/styles';
import { useHeaderHeight } from '@react-navigation/elements';

function QuizScreen({ navigation }) {
    return (
        <>
            <ScrollView contentContainerStyle={{ padding: 10, marginTop: useHeaderHeight() }} style={[styles.container]}>
                <QuizCard navigation={navigation} title="Alle kategorier" text="Den ultimative test med blandede spørgsmål fra alle kategorier" />
                <QuizCard navigation={navigation} title="Syntaks" text="Quiz med fokus på syntaks" />
                <QuizCard navigation={navigation} title="Verber" text="Quiz med fokus på verber" />
                <QuizCard navigation={navigation} title="Substantiver" text="Quiz med fokus på substantiver" />
            </ScrollView>
        </>
    );
}

export default QuizScreen;