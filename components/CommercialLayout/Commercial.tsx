import { Stack, Flex, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import CommercialQuoteButton from './CommercialQuote/CommercialQuoteButton';

export default function Commercial() {
    return (
        <Flex
        w={'full'}
        h={'2xl'}
        backgroundImage={
          '/commercial.webp'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          justify={'left'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6} paddingTop={'150px'}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              textAlign={'left'}
              fontSize={useBreakpointValue({ base: '4xl', md: '4xl' })}>
              The Experts in Commercial Pest Control
            </Text>
            <Text
            textAlign={'left'}
            fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}>
                Whether you&apos;re in healthcare, manufacturing, or another commercial field, we know how to prevent pest problems in your industry.
            </Text>
            <Stack direction={'row'}>
                <CommercialQuoteButton text={'Request a Free Audit'} />
            </Stack>
          </Stack>
        </VStack>
      </Flex>   
    )
}