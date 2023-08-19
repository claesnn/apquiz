import React from "react";
import { Box, Text, Pressable, HStack } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function QuizOption(props) {
    return <Box alignItems="center">
        <Pressable disabled={props.disabled} key={props.key} onPress={props.onPress} mb='2'>
            {({
                isHovered,
                isFocused,
                isPressed
            }) => {
                return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
                    transform: [{
                        scale: isPressed ? 0.96 : 1
                    }]
                }} p="2" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">
                    <HStack>
                        <Text fontSize="sm" color="coolGray.700">
                            {props.text}

                        </Text>
                        {
                            props.text == props.correct ? (
                                <MaterialCommunityIcons name='check-bold' color='green' size={18} />
                            ) : props.text == props.selected ? (
                                <MaterialCommunityIcons name='skull-crossbones' color='red' size={18} />
                            ) : null
                        }
                    </HStack>
                </Box>;
            }}
        </Pressable>
    </Box>;
}

export default QuizOption;