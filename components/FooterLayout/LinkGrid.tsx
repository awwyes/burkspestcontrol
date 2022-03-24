import { Box, Link, SimpleGrid, SimpleGridProps, Stack } from '@chakra-ui/react'
import * as React from 'react'
import FooterHeading from './FooterHeading'

export default function LinkGrid (props: SimpleGridProps) {
  return (
      <SimpleGrid columns={3} {...props}>
      <Box minW="130px">
        <FooterHeading mb="4">Services</FooterHeading>
        <Stack as={'h2'}>
          <Link href='/residential/'>Pest Control</Link>
          <Link href='/residential/termites'>Termites</Link>
          <Link href='/residential/mosquitos'>Mosquitos</Link>
          <Link href='/commercial'>Commercial</Link>
        </Stack>
      </Box>
      <Box minW="130px">
        <FooterHeading mb="4">Social</FooterHeading>
        <Stack as={'h2'}>
          <Link href='https://www.facebook.com/BurksPestControl/'>Facebook</Link>
          <Link href='https://twitter.com/Burkspestcont'>Twitter</Link>
          <Link href='https://www.tiktok.com/@burkspestcontrol/'>TikTok</Link>
          <Link href={'/residential/quote'}>Free Quote</Link>
        </Stack>
      </Box>
      <Box minW="130px">
        <FooterHeading mb="4">Legal</FooterHeading>
        <Stack as={'h2'}>
          <Link href="/privacy">Privacy</Link>
          <Link href="/termsofuse">Terms of Use</Link>
          <Link href="/contactus">Contact Us</Link>
          <Link href='tel:+1-423-424-9958'>Call Us Today!</Link>
        </Stack>
      </Box>
    </SimpleGrid>
  )
}