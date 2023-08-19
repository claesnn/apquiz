import React from 'react';
import { ScrollView } from 'react-native';
import WordCard from '../components/WordCard';
import styles from '../constants/styles';
import { useHeaderHeight } from '@react-navigation/elements';

function WordScreen({ navigation }) {
    return (
        <>
            <ScrollView contentContainerStyle={{ padding: 10, marginVertical: useHeaderHeight() }} style={[styles.container]}>
                <WordCard navigation={navigation} title='Syntaksleg' text='Det er bare så dejligt' />
                <WordCard navigation={navigation} title='Verber igen!' text='Fordi vi skal ikke hjem. Vi skal videre' />
                <WordCard navigation={navigation} title='Substantiver en-masse' text='E=MC2' />
            </ScrollView>
        </>
    );
}

export default WordScreen;