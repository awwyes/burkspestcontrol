import { Container, Stack, Flex, Box, Heading, Text, useColorModeValue, } from '@chakra-ui/react';
  
  export default function BedBugWhy() {
    return (
        <Box
            bg={useColorModeValue('white', 'black')}
        >
        <Container maxW={'7xl'} >
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                fontFamily={'sans-serif'}
                >
                You can rest easy with Burks Pest Control!
              </Text>
            </Heading>
            <Text color={'gray.500'}>
                Bed bugs are a common household pest that can be found in Tennessee and all over the world.
                They've existed for hundreds of years and were almost completely extinct a few decades ago.
                However, the rise of affordable international travel helped bed bug populations rebound and stretch all over the globe.
                Burks Pest Control is proud to be recognized as a leader in the bedbug removal in the pest control industry.
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'300px'}
              borderRadius={'2xl'}
              boxShadow={'2xl'}
              overflow={'hidden'}>
                {/* TODO:
                    Insert A Graphic Here 
                */}
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
    );
}