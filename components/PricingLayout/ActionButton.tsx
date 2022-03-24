import { Button, ButtonProps, useColorModeValue } from '@chakra-ui/react'
import NextLink from "next/link"

export const ActionButton = (props: ButtonProps) => (
  <NextLink passHref href="https://burkspestcontrol.securepayments.cardpointe.com/pay?">
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
  </NextLink>
)