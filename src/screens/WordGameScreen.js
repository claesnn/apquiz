import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'native-base';
import styles from '../constants/styles';

function WordGameScreen({ navigation }) {
    return (
        <>
            <ScrollView contentContainerStyle={{ padding: 10 }}>
                <Text>Denne app er lavet med kærlighed af <Text style={styles.boldText} >Nina Christensen</Text> og <Text style={styles.boldText} >Claes Nymand Nilsson</Text>.</Text>
                <Text style={{ marginTop: 20 }}>Formålet er at hjælpe med formidling af almen sprogforståelse på en sjov og let tilgængelig måde. Vi tager meget gerne imod forslag til spil og lege, som du kunne ønske dig for at forbedre din indlæring.</Text>
                <Text style={{ marginTop: 20 }}>Hvis du har nogle spørgsmål eller feedback kan du skrive en mail til <Text style={styles.boldText} >apquiz@gmail.com</Text></Text>
            </ScrollView>
        </>
    );
}

export default WordGameScreen;