import { Container, Stack, Flex, Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
  
  export default function MosquitoWhy() {
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
                Reclaim Your Yard with Burks Pest Control!
              </Text>
            </Heading>
            <Text color={'gray.500'}>
                Mosquitos can ruin a patio picnic or cookout.
                For kids, they can take all the fun out of playing in the yard.
                For adults, they can make yard work unbearable.
                Isn’t it time for your and your family to enjoy your yard and patio without feeling like you’re being “eaten alive” by mosquitos? 
                Burks Mosquito Control is guaranteed to rapidly reduce the number of mosquitoes around your home. 
                Restore your yard and patio to a place of outdoor pleasure and enjoyment with Burks Mosquito Control.
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