import { Button, ButtonProps, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const ActionButton = (props: ButtonProps) => (
  <Button
    bg="yellow.500"
    color="black"
    _active={{bg: 'yellow', color: "black"}}
    _hover={{bg: "black", color: "yellow"}}
    borderColor={useColorModeValue("yellow.500", "yellow.500")}
    size="lg"
    w="full"
    fontWeight="extrabold"
    py={{ md: '8' }}
    {...props}
  />
)