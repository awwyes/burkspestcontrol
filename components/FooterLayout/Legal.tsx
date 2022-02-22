import { chakra, HTMLChakraProps, Stack, Link } from '@chakra-ui/react'
import * as React from 'react'
import FooterHeading from './FooterHeading'
  
export default function Legal (props: HTMLChakraProps<'form'>) {
    return (
      <chakra.form {...props} onSubmit={(e) => e.preventDefault()}>
        <Stack spacing="4">
          <FooterHeading>Legal</FooterHeading>
          <Stack spacing="4" direction={{ base: 'column' }}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/termsofuse">Terms of Use</Link>
            <Link href='tel:+1-423-424-9958'>Call Us Today!</Link>
          </Stack>
        </Stack>
      </chakra.form>
    )
}