import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, useColorModeValue, Heading } from '@chakra-ui/react';
import { FcDocument, FcInspection, FcStatistics, FcSurvey } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack alignItems={'center'}>
      <Flex
        w={128}
        h={128}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={useColorModeValue('yellow.500', 'yellow.500')}
        m={5}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function EasyToUpgrade() {
  return (
    <Box p={4} bgColor={useColorModeValue('gray.100', 'black')}>
      <Box m={5}>
        <Heading as={'h1'} textAlign={'center'} fontFamily={'sans-serif'}>We Make It Easy To Upgrade To Burks Pest Control</Heading>
        <Text as={'p'} textAlign={'center'} fontFamily={'sans-serif'}>Burks Pest Control starts by performing an industry-specific audit to help identify areas for improvement.</Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        <Feature
          icon={<Icon as={FcInspection} w={'62px'} h={'62px'} />}
          title={'Free On-Site Audit'}
          text={
            'Burks Pest Control free industry-specific audit of your current pest control services can shine a light on recurring problems and how to solve them.'
          }
        />
        <Feature
          icon={<Icon as={FcSurvey} w={'62px'} h={'62px'} />}
          title={'Industry-Specific Plans'}
          text={
            'We protect against pests that are common to your industry.'
          }
        />
        <Feature
          icon={<Icon as={FcDocument} w={'62px'} h={'62px'} />}
          title={'Internal Quality Assurance'}
          text={
            'We offer internal audits performed by Certified Entomologists to ensure detailed documentation and quality service.'
          }
        />
        <Feature
          icon={<Icon as={FcStatistics} w={'62px'} h={'62px'} />}
          title={'Internal Quality Assurance'}
          text={
            'We offer internal audits performed by Certified Entomologists to ensure detailed documentation and quality service.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}