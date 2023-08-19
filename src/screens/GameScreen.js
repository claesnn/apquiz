import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Modal, Text, Progress, Center } from 'native-base';
import data from '../constants/QuizData';
import QuizOption from '../components/QuizOption';
import ConfettiCannon from 'react-native-confetti-cannon';
import { useHeaderHeight } from '@react-navigation/elements';

function GameScreen({ navigation, route }) {
    const maxCountdown = 45;

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
    const [countdown, setCountdown] = useState(maxCountdown);


    const validateAnswer = (selectedOption) => {
        let correct_option = data[currentQuestion]['correct'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionDisabled(true);
        if (selectedOption == correct_option) {
            setScore(score + 1);
        }
    }

    useEffect(() => {
        const timer = (countdown > 0) && setInterval(() => setCountdown(countdown - 1), 1000);
        if (countdown == 0) {
            setShowScore(true);
        }
        return () => clearInterval(timer);
    }, [countdown]);

    useEffect(() => {
        navigation.setOptions({ title: route.params['spil'] })
    })



    const handleNext = () => {
        let possibleOptions = Array.from(Array(data.length).keys())
        const validOptions = possibleOptions.filter(i => !previousQuestions.includes(i))
        const validOptionsInCategory = validOptions.filter(i => (gameCategory == 'Alle kategorier') ? i : data[i]['category'].includes(gameCategory))

        if ((previousQuestions.length == 5) || (validOptionsInCategory.length == 0)) {
            setShowScore(true);
            setCountdown(0);
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
            <>
                <Modal
                    isOpen={showScore}
                    onClose={() => navigation.navigate('Quiz')}
                    size="lg"
                >
                    {showScore && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />}
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Quiz Status!</Modal.Header>
                        <Modal.Body>
                            {
                                score == 5 ? (<Text>Tillykke! Du svarede korrekt på alle!</Text>) : (<Text>Du svarede korrekt på {score} ud af 5. Prøv igen!</Text>)
                            }
                        </Modal.Body>
                    </Modal.Content>
                </Modal>
            </>
        );
    }






    const renderOptions = () => {
        return (
            <>
                {
                    data[currentQuestion]?.answers.map(answer => (
                        <QuizOption
                            key={answer}
                            onPress={() => validateAnswer(answer)}
                            disabled={isOptionDisabled}
                            text={answer}
                            correct={correctOption}
                            selected={currentOptionSelected}
                        />
                    ))
                }
            </>
        );
    }

    return (
        <>


            <ScrollView contentContainerStyle={{ padding: 10 }}>
                <Progress marginTop={65} value={countdown} max={maxCountdown} size="xs" colorScheme="darkBlue" />
                <Text style={{ marginBottom: 20, marginTop: 20, fontSize: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>Spørgsmål {previousQuestions.length}/5: </Text>
                    {data[currentQuestion]['question']}
                </Text>
                {renderOptions()}
                <Button style={{ marginTop: 20 }} onPress={() => handleNext()}>Næste spørgsmål</Button>
            </ScrollView>
            <View>
                {showModal()}
            </View>
        </>
    );
}

export default GameScreen;