import { Flex, FlexProps, Text, useColorModeValue } from '@chakra-ui/react'

export const CardBadge = (props: FlexProps) => {
  const { children, ...flexProps } = props
  return (
    <Flex
      bg={useColorModeValue('yellow.500', 'yellow.500')}
      position="absolute"
      right={-20}
      top={6}
      transform="rotate(45deg)"
      py={2}
      justifyContent="center"
      alignItems="center"
      {...flexProps}
    >
      <Text
        fontSize="xs"
        textTransform="uppercase"
        fontWeight="bold"
        letterSpacing="wider"
        color={useColorModeValue('black', 'black')}
      >
        {children}
      </Text>
    </Flex>
  )
}