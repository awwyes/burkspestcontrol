import { Box, Flex, chakra, Stack, Link, Icon, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

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
                        <Stack
                            justifyContent={{ base: "left", md: "center" }}
                            direction={{ base: "column", sm: "row" }}
                            spacing={2}
                            mt={2}
                        >
                            <Box display="inline-flex" rounded="md" shadow="md">
                                <Link
                                    w="full"
                                    display="inline-flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    px={5}
                                    py={3}
                                    border="solid transparent"
                                    fontWeight="bold"
                                    rounded="md"
                                    href="/residential/quote"
                                    color={useColorModeValue("black", "black")}
                                    bg={useColorModeValue("yellow.500", "yellow.500")}
                                    _hover={{
                                        bg: useColorModeValue("black", "black"),
                                        color: useColorModeValue("yellow.500", "yellow.500")
                                    }}
                                >
                                    Free Quote &nbsp;<Icon as={IoIosArrowForward}  />
                                </Link>
                            </Box>
                        </Stack>
                </Box>
            </Flex>
        </Flex>
    )
}