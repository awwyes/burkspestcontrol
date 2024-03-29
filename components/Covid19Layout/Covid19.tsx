import { ReactElement } from 'react'
import { Container, Box, SimpleGrid, Flex, Heading, Text, Stack, StackDivider, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaHardHat }  from 'react-icons/fa'
import { GiFamilyHouse, GiGloves } from 'react-icons/gi'
import { BiCheckShield } from 'react-icons/bi'

interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
export default function Covid19() {
    return (
        <>
          <Box background={useColorModeValue('white', 'black')}>
            <Container maxW={'5xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
              <Stack spacing={4}>
                <Heading color={useColorModeValue("black", "yellow.500")} fontFamily="sans-serif">Dear Burks Pest Control clients,</Heading>
                <Text color={useColorModeValue("gray.600", 'gray.500')} fontSize={'lg'}>
                    Protecting your family and home is at the heart of everything we do, 
                    and the safety and well-being of our employees, 
                    customers and communities will always be our first priority. 
                    As the Coronavirus (COVID-19) begins to have a greater impact on the communities we serve, 
                    we have taken additional actions to ensure that <strong>we will continue to provide our essential services to protect your family and home safely and without interruption.</strong>
                </Text>
                <Stack
                  spacing={4}
                  divider={
                    <StackDivider
                      borderColor={useColorModeValue('gray.100', 'gray.700')}
                    />
                  }>
                  <Feature
                    icon={
                      <Icon as={FaHardHat} color={'yellow.500'} w={10} h={10} />
                    }
                    iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                    text={'Prior to arriving at your home, your technician will call to confirm your appointment as normal. If you are scheduled for an interior service, we will ask if anyone in your residence is ill with viral symptoms or quarantined. If so, we will only perform exterior services. We will not enter your home.'}
                  />
                  <Feature
                    icon={<Icon as={GiFamilyHouse} color={'green.500'} w={10} h={10} />}
                    iconBg={useColorModeValue('green.100', 'green.900')}
                    text={'In most cases, our services can be performed outside your home without entry or human contact. If entry to your home is required or requested, it can be done with limited human contact.'}
                  />
                  <Feature
                    icon={
                      <Icon as={GiGloves} color={'purple.500'} w={10} h={10} />
                    }
                    iconBg={useColorModeValue('purple.100', 'purple.900')}
                    text={'When servicing indoors, we will always utilize applicable personal protective equipment such as: face coverings, goggles, shoe covers, disposable cloths and waste bags with ties.'}
                  />
                  <Feature
                    icon={
                      <Icon as={BiCheckShield} color={'purple.500'} w={10} h={10} />
                    }
                    iconBg={useColorModeValue('blue.100', 'blue.900')}
                    text={'Our team members remain vigilant with existing health precautions such as regular hand washing and disinfecting service tools and equipment after every home visit. In addition, our team members know that we are committed to taking care of their needs, and they have been advised to stay home if they feel ill or may have come into contact with someone who has been exposed.'}
                  />
                </Stack>
                <Text color={useColorModeValue("gray.600", 'gray.500')} fontSize={'lg'}>
                    We know the safety of your family and comfort of your home is more important now than ever
                    before. Pest activity doesn’t stop during this time, and neither will we. 
                    We are closely following guidelines from the Centers for Disease 
                    Control and Prevention (CDC), the World Health Organization (WHO) and other local and 
                    federal health officials. We remain committed to responding to the needs of our customers
                    and employees as this situation evolves.
                </Text>
                <Text color={useColorModeValue("gray.600", 'gray.500')} fontSize={'lg'}>
                    Thank you for being a valued Burks Pest Control client. We are grateful for the 
                    opportunity to help protect your home and family. Be well and know that Burks Pest Control
                    is here for you.
                </Text>
              </Stack>
            </SimpleGrid>
          </Container>
          </Box>
      </>
    );
  }