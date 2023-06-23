import React from 'react';
import { ScrollView } from 'react-native';
import QuizCard from '../components/QuizCard';
import styles from '../constants/styles';

function QuizScreen({ navigation }) {
    return (
        <>
            <ScrollView style={[styles.container, { padding: 10, marginTop: 60 }]}>
                <QuizCard navigation={navigation} title="Alle kategorier" text="Den ultimative test med blandede spørgsmål fra alle kategorier" />
                <QuizCard navigation={navigation} title="Syntaks" text="Quiz med fokus på syntaks" />
                <QuizCard navigation={navigation} title="Verber" text="Quiz med fokus på verber" />
                <QuizCard navigation={navigation} title="Substantiver" text="Quiz med fokus på substantiver" />
            </ScrollView>
        </>
    );
}

export default QuizScreen;