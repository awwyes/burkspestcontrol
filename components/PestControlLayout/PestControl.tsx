import { Box, Flex, chakra, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import FreeQuoteButton from '../FreeQuoteButton/FreeQuoteButton'


export default function PestControl() {
    return (
        <Flex
            backgroundImage={'https://www.cookspest.com/static/7ffb49f4db371ccf0cd0d96eba693de8/front-page-header.jpg'}
            height={100}
            w="full"
        >
            <Flex
                justify="left"
                backgroundImage='url(https://www.cookspest.com/static/7ffb49f4db371ccf0cd0d96eba693de8/front-page-header.jpg)'
                w="full"
            >
                <Box
                    w={{ base: "full", md: "75%", lg: "50%" }}
                    px={100}
                    py={100}
                    textAlign={{ base: "left", md: "left" }}
                >
                    <chakra.span
                        fontSize={{ base: "3xl", sm: "4xl" }}
                        fontWeight="extrabold"
                        letterSpacing="tight"
                        lineHeight="shorter"
                        color={useColorModeValue("black", "yellow.500")}
                        mb={6}
                    >
                        <chakra.span display="block" textAlign={'center'}>Pest Control</chakra.span>
                            <chakra.span
                                display="block"
                                fontSize={{ base: "1xl", sm: 'xl' }}
                                color={useColorModeValue("yellow.500", "black")}
                            >
                                Having Pest Issues? Need a real pro to give you a solution?
                            </chakra.span>
                        </chakra.span>
                    <FreeQuoteButton />
                </Box>
            </Flex>
        </Flex>
    )
}