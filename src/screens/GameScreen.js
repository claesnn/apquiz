import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Card, Portal, Modal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import data from '../constants/QuizData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function GameScreen({ navigation, route }) {
    const [previousQuestions, setPreviousQuestions] = useState([])
    var gameCategory = route.params['spil']

    const getNewQuestion = () => {
        let possibleOptions = Array.from(Array(data.length).keys())
        const validOptions = possibleOptions.filter(i => !previousQuestions.includes(i))
        const validOptionsInCategory = validOptions.filter(i => (gameCategory == 'Alle kategorier') ? i : data[i]['category'].includes(gameCategory))
        const randomElement = validOptionsInCategory[Math.floor(Math.random() * validOptionsInCategory.length)];

        setPreviousQuestions(previousQuestions + [randomElement]);

        return randomElement;
    }

    const [currentQuestion, setCurrentQuestion] = useState(() => getNewQuestion());
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionDisabled, setIsOptionDisabled] = useState(null);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);


    useEffect(() => {
        navigation.setOptions({ title: route.params['spil'] })
    })

    const validateAnswer = (selectedOption) => {
        let correct_option = data[currentQuestion]['correct'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionDisabled(true);
        if (selectedOption == correct_option) {
            setScore(score + 1);
        }
    }



    const handleNext = () => {
        let possibleOptions = Array.from(Array(data.length).keys())
        const validOptions = possibleOptions.filter(i => !previousQuestions.includes(i))
        const validOptionsInCategory = validOptions.filter(i => (gameCategory == 'Alle kategorier') ? i : data[i]['category'].includes(gameCategory))

        if ((previousQuestions.length == 5) || (validOptionsInCategory.length == 0)) {
            setShowScore(true);
        } else {
            setCurrentQuestion(getNewQuestion());
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionDisabled(null);
        }

    }


    const showModal = () => {
        const navigation = useNavigation();

        return (
            <Portal>
                <Modal
                    visible={showScore}
                    onDismiss={() => navigation.navigate('Quiz')}
                    contentContainerStyle={{ backgroundColor: 'white', padding: 30 }}
                >
                    {
                        score == 5 ? (<Text>Tillykke! Du svarede korrekt på alle!</Text>) : (<Text>Du svarede korrekt på {score} ud af 5. Prøv igen!</Text>)
                    }
                </Modal>
            </Portal>
        );
    }


    const renderOptions = () => {
        return (
            <>
                {
                    data[currentQuestion]?.answers.map(answer => (
                        <TouchableOpacity
                            activeOpacity={0.6}
                            key={answer}
                            onPress={() => validateAnswer(answer)}
                            disabled={isOptionDisabled}
                        >
                            <Card
                                mode='contained'
                                style={{ marginBottom: 8 }}>
                                <Card.Content>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Text>{answer}</Text>
                                        {
                                            answer == correctOption ? (
                                                <MaterialCommunityIcons name='check-bold' color='green' size={18} />
                                            ) : answer == currentOptionSelected ? (
                                                <MaterialCommunityIcons name='skull-crossbones' color='red' size={18} />
                                            ) : null
                                        }
                                    </View>
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    ))
                }
            </>
        );
    }

    return (
        <>
            <View>
                {showModal()}
            </View>
            <ScrollView style={{ marginTop: 70, padding: 10 }}>
                <Text style={{ marginBottom: 30, fontSize: 20 }}><Text style={{ fontWeight: 'bold' }}>Spørgsmål:</Text> {data[currentQuestion]['question']}</Text>
                {renderOptions()}
                <Button style={{ marginTop: 20 }} onPress={() => handleNext()}>Næste spørgsmål</Button>
            </ScrollView>
        </>
    );
}

export default GameScreen;