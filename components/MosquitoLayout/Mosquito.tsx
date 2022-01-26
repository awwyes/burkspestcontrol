import { Button, Flex, Heading, Image, Stack, Text, Box, useColorModeValue, } from '@chakra-ui/react';
  
  export default function Mosquito() {
    return (
    <Box bg={useColorModeValue('white', 'black')}>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'xl'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                fontFamily={'sans-serif'}
                color={useColorModeValue('black', 'yellow.500')}
              >
                Mosquito Control
              </Text>
              <br />{' '}
              <Text as={'span'} fontFamily={'sans-serif'} fontSize={40} color={useColorModeValue('yellow.500', 'white')}>
                Satisfaction Guarantee
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                Burks Mosquito Control will rapidly reduce the number of mosquitos around your home. <strong>Guaranteed.</strong> Ready to reclaim your yard and patio? Contact us today for a free quote.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button rounded={'full'} bg={useColorModeValue('yellow.500', 'yellow.500')} color={useColorModeValue('black', 'black')} _hover={{ bg: useColorModeValue('black', 'black'), color: useColorModeValue('yellow.500', 'yellow.500') }}>How It Works</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} mr={20}>
          <Image
            alt={'Login Image'}
            objectFit={'contain'}
            src={
              'https://media.istockphoto.com/photos/many-mosquitoes-fly-over-green-grass-field-picture-id1033519616?s=2048x2048'
            }
          />
        </Flex>
      </Stack>
    </Box>
    );
  }

