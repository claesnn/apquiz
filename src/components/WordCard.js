import React from 'react';
import { Box, Text, Pressable, HStack, Badge, Spacer } from 'native-base';

function QuizCard({ navigation, title, text = 'placeholder', cover = '../assets/placeholder.jpg' }) {
    return <Box alignItems="center">
        <Pressable width="full" mb='3' onPress={() => {
            navigation.navigate('OrdLeg', { game: title })
        }}>
            {({
                isHovered,
                isFocused,
                isPressed
            }) => {
                return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
                    transform: [{
                        scale: isPressed ? 0.96 : 1
                    }]
                }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">
                    <HStack alignItems="center">
                        <Badge colorScheme="darkBlue" _text={{
                            color: "white"
                        }} variant="solid" rounded="4" mr="1">
                            90 sekunder
                        </Badge>
                        <Badge colorScheme="darkGreen" _text={{
                            color: "white"
                        }} variant="solid" rounded="4">
                            10 spørgsmål
                        </Badge>
                        <Spacer />
                        <Text fontSize={10} color="coolGray.800">
                            Svarstatistik: 80%
                        </Text>
                    </HStack>
                    <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                        {title}
                    </Text>
                    <Text mt="2" fontSize="sm" color="coolGray.700">
                        {text}
                    </Text>
                </Box>;
            }}
        </Pressable>
    </Box>;
}

export default QuizCard;