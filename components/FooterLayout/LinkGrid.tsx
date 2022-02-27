import { Box, Link, SimpleGrid, SimpleGridProps, Stack } from '@chakra-ui/react'
import * as React from 'react'
import FooterHeading from './FooterHeading'

export default function LinkGrid (props: SimpleGridProps) {
  return (
      <SimpleGrid columns={3} {...props}>
      <Box minW="130px">
        <FooterHeading mb="4">Services</FooterHeading>
        <Stack>
          <Link href='/residential/'>Pest Control</Link>
          <Link href='/residential/termites'>Termites</Link>
          <Link href='/residential/mosquitos'>Mosquitos</Link>
          <Link href='/commercial'>Commercial</Link>
        </Stack>
      </Box>
      <Box minW="130px">
        <FooterHeading mb="4">Customer Care</FooterHeading>
        <Stack>
          <Link href='https://www.facebook.com/BurksPestControl/'>Follow us on Facebook</Link>
          <Link href='/contactus'>Contact Us</Link>
        </Stack>
      </Box>
      <Box minW="130px">
        <FooterHeading mb="4">Legal</FooterHeading>
        <Stack>
          <Link href="/privacy">Privacy</Link>
          <Link href="/termsofuse">Terms of Use</Link>
          <Link href='tel:+1-423-424-9958'>Call Us Today!</Link>
        </Stack>
      </Box>
    </SimpleGrid>
  )
}