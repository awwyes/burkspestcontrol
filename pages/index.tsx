import DarkModeSwitch from '../components/DarkModeSwitch'
import {Text, Heading, Flex, Stack} from '@chakra-ui/react'
import NavMenu from '../components/NavMenu'
import Footer from '../components/FooterLayout/Footer'
import Testimonals from '../components/TestimonalsLayout/Testimonals';
import Pricing from '../components/PricingLayout/Pricing'

export default function Home() {
    return (
        <Stack
            as="main"
            align="center"
        >
            <Flex
                flexDirection="column"
                maxWidth="700px"
            >
                <Flex
                    flexDirection="row"
                    w="700px"
                    pt={4}
                    justify="space-between"
                >
                    <NavMenu />
                </Flex>
                <Heading
                    as="h1"
                    size="2xl"
                >
                    Hello, World!
                </Heading>
                <Text
                    my={4}
                >
                    Hello, again
                </Text>
            </Flex>
            <Pricing />
            <Testimonals />
            <Footer />
        </Stack>
    );
}