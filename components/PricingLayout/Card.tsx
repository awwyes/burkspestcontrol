import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'
import { CardBadge } from './CardBadge'

export interface CardProps extends BoxProps {
  isPopular?: boolean
}

export const Card = (props: CardProps) => {
  const { children, isPopular, ...rest } = props
  return (
    <Box
      bg={useColorModeValue('black', 'white')}
      position="relative"
      px="6"
      pb="6"
      pt="16"
      overflow="hidden"
      shadow="lg"
      maxW="md"
      {...rest}
    >
      {isPopular && <CardBadge>Popular</CardBadge>}
      {children}
    </Box>
  )
}