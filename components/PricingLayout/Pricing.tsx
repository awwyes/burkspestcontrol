import { Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { GiAmberMosquito, GiAnts } from 'react-icons/gi'
import { MdPestControl } from 'react-icons/md'
import { ActionButton } from './ActionButton'
import { PricingCard } from './PricingCard'

export default function Pricing () {
  return (
    <Box
    as="section"
    bg="none"
    py="14"
    px={{ base: '4', md: '8' }}
  >
    <SimpleGrid
      columns={{ base: 1, lg: 3 }}
      spacing={{ base: '8', lg: '0' }}
      maxW="7xl"
      mx="auto"
      justifyItems="center"
      alignItems="center"
    >
      <PricingCard
        data={{
          price: '$145',
          name: 'One Time Pest Control Treatment',
          features: [
            'No Long Term Contract',
            'Ooltewah/Cleveland area only',
            'Covers ants, spiders, and roaches'
          ],
        }}
        color={useColorModeValue("white", "black")}
        icon={MdPestControl}
        button={
          <ActionButton variant="outline" borderWidth="2px">
            Buy now
          </ActionButton>
        }
      />
      <PricingCard
        zIndex={1}
        isPopular
        transform={{ lg: 'scale(1.05)' }}
        data={{
          price: '$105',
          name: 'Quarterly Pest Control',
          features: [
            'Covers over 50 common household pest',
            'Eco friendly products used',
            'American made products 🇺🇸',
            'Every service has 3 layers of defense'
          ],
        }}
        color={useColorModeValue("white", "black")}
        icon={GiAnts}

        button={<ActionButton variant="outline" borderWidth="2px">Buy now</ActionButton>}
      />
      <PricingCard
        data={{
          price: '$75',
          name: 'Monthly Mosquito',
          features: [
            'Seasonal Service March - October',
            'Can reduce occasional invaders by 99%',
            'Eco friendly products used',
          ],
        }}
        color={useColorModeValue("white", "black")}
        icon={GiAmberMosquito}
        button={
          <ActionButton variant="outline" borderWidth="2px">
            Buy now
          </ActionButton>
        }
      />
    </SimpleGrid>
  </Box>
  )
}