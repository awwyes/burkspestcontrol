import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, useColorModeValue, Heading } from '@chakra-ui/react';
import { GiFlowerPot, GiOakLeaf } from 'react-icons/gi'
import { BsFillSunFill, BsSnow } from 'react-icons/bs'

interface PestControlSeasonalFeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const PestControlSeasonalFeature = ({ title, text, icon }: PestControlSeasonalFeatureProps) => {
  return (
    <Stack>
      <Flex
        w={32}
        h={32}
        alignSelf={'center'}
        justify={'center'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontSize={30} fontWeight={500} color={useColorModeValue('black', 'gray.200')} alignSelf={'center'}>{title}</Text>
      <Text color={useColorModeValue('gray.500', 'gray.400')} alignSelf={'center'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={16} bg={useColorModeValue('white', 'black')}>
        <Heading fontFamily={'sans-serif'} fontWeight={400} fontSize={'5xl'} mb={10}>Seasonal Pest Activity</Heading>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        <PestControlSeasonalFeature
            icon={<Icon as={GiFlowerPot} w={32} h={32} color={useColorModeValue('green.500', 'green.500')} />}
            title={'Spring'}
            text={'Nuisance "House" Ants, Flies, Spiders, Stinging Insects (Wasp, Hornets, and Bees), Earwigs, Thrips, Clover Mites, Crickets, Springtails, Boxelder Bugs, Chiggers, Fleas, Carpet Beetles'} />
        <PestControlSeasonalFeature
            icon={<Icon as={BsFillSunFill} w={32} h={32} color={useColorModeValue('yellow.500', 'yellow.500')} />}
            title={'Summer'}
            text={'Stinging Insects, Nuisance “House” Ants (Argentine), Flies, Ticks, Fire Ants, Brown Recluse Spiders, Black Widow Spiders, Large Outdoor Roaches, Millipedes/Centipedes, Ground Beetles, Hard Shell Bugs'} />
        <PestControlSeasonalFeature
            icon={<Icon as={GiOakLeaf} w={32} h={32} color={useColorModeValue('orange.500', 'orange.500')} />}
            title={'Fall'}
            text={'Spiders, Rodents, Fleas, Stinkbugs, Kudzu Bugs, Lady Bugs, Large Outdoor Roaches (Water Bugs/Palmetto Bugs), Odorous House Ants'} />
        <PestControlSeasonalFeature
            icon={<Icon as={BsSnow} w={32} h={32} color={useColorModeValue('blue.500', 'blue.500')} />}
            title={'Winter'}
            text={'Rodents, Roaches, Ladybugs, Stink Bugs, Silverfish, Odorous House Ants, Mice, Rats, Birds, Indian Meal Moths'} />
      </SimpleGrid>
    </Box>
  );
}