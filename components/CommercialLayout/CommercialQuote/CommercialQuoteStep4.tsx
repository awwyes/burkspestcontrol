import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";


export default function Step4() {
    return (
        <Flex>
            <Box bgColor={useColorModeValue('white', 'black')} ml={12}>
                <br />
                <br />
                <Text color={useColorModeValue('black', 'yellow.500')}>All that is left is to click the Submit your request button ----&gt;</Text>
            </Box>
        </Flex>
    )
}