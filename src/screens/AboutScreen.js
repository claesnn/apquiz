import React from 'react';
import { ScrollView } from 'react-native';
import { Paragraph, Text } from 'react-native-paper';
import styles from '../constants/styles';

function AboutScreen({ navigation }) {
    return (
        <>
            <ScrollView style={[styles.container, { padding: 10, marginTop: 60 }]}>
                <Paragraph>Denne app er lavet af <Text style={styles.boldText} >Nina Christensen</Text> og <Text style={styles.boldText} >Claes Nymand Nilsson</Text>.</Paragraph>
                <Paragraph style={{ marginTop: 20 }}>Hvis du har nogle spørgsmål eller feedback kan du skrive en mail til apquiz@gmail.com</Paragraph>
            </ScrollView>
        </>
    );
}

export default AboutScreen;