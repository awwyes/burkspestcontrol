import {Flex, Stack} from '@chakra-ui/react'
import Footer from '../components/FooterLayout/Footer'
import Testimonals from '../components/TestimonalsLayout/Testimonals'
import Pricing from '../components/PricingLayout/Pricing'
import NavBar from '../components/NavBarLayout/NavBar';

export default function Home() {
    return (
        <>
        <NavBar />
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
                    pt={4}
                    justify="space-between"
                >
                </Flex>
            </Flex>
            <Pricing />
            <Testimonals />
            <Footer />
        </Stack>
        </>
    );
}