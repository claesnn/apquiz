import React from 'react';
import { Box, Text, Pressable, HStack, Badge, Spacer, Flex } from 'native-base';

function LearnCard({ navigation, title, text = 'placeholder', cover = '../assets/placeholder.jpg' }) {
    return <Box alignItems="center">
        <Pressable width="full" mb='3' onPress={() => {
            navigation.navigate('LærTekst', { learnCategory: title })
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
                            Business
                        </Badge>
                        <Badge colorScheme="success" _text={{
                            color: "white"
                        }} variant="solid" rounded="4">
                            Game
                        </Badge>
                        <Spacer />
                        <Text fontSize={10} color="coolGray.800">
                            1 month ago
                        </Text>
                    </HStack>
                    <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                        {title}
                    </Text>
                    <Text mt="2" fontSize="sm" color="coolGray.700">
                        {text}
                    </Text>
                    <Flex>
                        {isFocused ? <Text mt="2" fontSize={12} fontWeight="medium" textDecorationLine="underline" color="darkBlue.600" alignSelf="flex-start">
                            Read More
                        </Text> : <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                            Read More
                        </Text>}
                    </Flex>
                </Box>;
            }}
        </Pressable>
    </Box>;
}

export default LearnCard;