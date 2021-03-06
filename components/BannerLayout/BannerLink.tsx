import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const BannerLink = (props: HTMLChakraProps<'a'>) => (
  <chakra.a
    {...props}
    href="/covid-19"
    px="4"
    py="1.5"
    textAlign="center"
    borderWidth="1px"
    borderColor={useColorModeValue("black", "yellow.500")}
    fontWeight="medium"
    rounded="base"
    _hover={{ bg: useColorModeValue('black', 'yellow.500'), color: useColorModeValue('yellow.500', 'black') }}
  />
)