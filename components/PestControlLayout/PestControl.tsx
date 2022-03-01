import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react'
import FreeQuoteButton from '../FreeQuoteButton/FreeQuoteButton'


export default function PestControl() {
    return (
    <Flex
      w={'full'}
      h={'80vh'}
      backgroundImage={
        'url(https://www.gannett-cdn.com/presto/2019/12/05/PNAS/8671ba5f-e918-4f32-882c-d7d3df55b706-6_Black_White_Farmhouse_Carbine__Assoc._Photo_by_Leslie_Brown.jpg?crop=4797,2699,x0,y457&width=1320&height=744&format=pjpg&auto=webp)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        alignItems={'flex-start'}
      >
        <Stack align={'flex-start'} spacing={6} mb={10} ml={6}>
          <Text
            color={useColorModeValue('white', 'yellow.500')}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Pest Control
          </Text>
          <Text
            color={useColorModeValue('yellow.500','white')}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}>
            Having Pest Issues? Need a real pro to give you a solution?
          </Text>
          <Stack direction={'row'}>
            <FreeQuoteButton />
          </Stack>
        </Stack>
      </VStack>
    </Flex>
    )
}