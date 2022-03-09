import { Container, Stack, Flex, Box, Heading, Text, useColorModeValue, } from '@chakra-ui/react';
  
  export default function TermiteWhy() {
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
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                fontFamily={'sans-serif'}
                >
                Why Trelona?
              </Text>
            </Heading>
            <Text color={'gray.500'}>
                Research indicates the Trelona® System is the superior choice for termite protection and treatment. 
                Entomologist were impressed by the Trelona® System’s unmatched effectiveness during early trials
                and, subsequently, Burks Pest Control was chosen among the first authorized installers of Trelona. 
                Upon seeing a dramatic reduction in new termite infestations, Burks Pest Control chose to make
                Trelona® our company’s exclusive method of termite protection. Call Burks Pest Control today for a free evaluation.
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
                <iframe 
                    width="560" 
                    height="300"
                    src="https://www.youtube.com/embed/ECvftMCzh9I" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
    );
}