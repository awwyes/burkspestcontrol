import { Box, SimpleGrid, Text, Image, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'


export default function SatisfactionGuarantee() {
    return (
        <Box as="section" maxW={'5xl'} mx="auto" py="12" px={{ base: '6', md: '8' }}>
            <Text as={'h1'} align={'center'} pb={10} fontFamily={'sans-serif'} fontSize={'3xl'}>Burks Pest Control products used and trusted</Text>
            <SimpleGrid columns={{ base: 1, md: 4 }} spacingX="10" spacingY={{ base: '8', md: '14' }}>
                <Image
                    bgColor={useColorModeValue('yellow.500', 'white')}
                    boxShadow={'2xl'}
                    borderRadius={'2xl'}
                    objectFit="contain"
                    boxSize="100%"
                    src={'/bayer.png'}
                />
                <Image
                    bgColor={useColorModeValue('yellow.500', 'white')}
                    boxShadow={'2xl'}
                    borderRadius={'2xl'}
                    objectFit="contain"
                    boxSize="100%"
                    src={'/Basf.png'}
                />
                <Image
                    bgColor={useColorModeValue('yellow.500', 'white')}
                    boxShadow={'2xl'}
                    borderRadius={'2xl'}
                    objectFit="contain"
                    boxSize="100%"
                    src={'/zoecon.png'}
                />
                <Image
                    bgColor={useColorModeValue('yellow.500', 'white')}
                    boxShadow={'2xl'}
                    borderRadius={'2xl'}
                    objectFit="contain"
                    boxSize="100%"
                    src={'/aprehend.png'}
                />
            </SimpleGrid>
        </Box>
    )
}