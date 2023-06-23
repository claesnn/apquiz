import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

function QuizCard({ navigation, title, text = 'placeholder', cover = '../assets/placeholder.jpg' }) {
    const imageCover = require('../assets/placeholder.jpg')

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => {
            navigation.navigate('Spil', { spil: title })
        }}>
            <Card mode='contained' style={{ marginBottom: 10 }}>
                <Card.Cover source={imageCover} />
                <Card.Content>
                    <Title>{title}</Title>
                    <Paragraph>{text}</Paragraph>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    );
}

export default QuizCard;