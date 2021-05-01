import {Flex, Stack} from '@chakra-ui/react'
import Footer from '../components/FooterLayout/Footer'
import Testimonals from '../components/TestimonalsLayout/Testimonals'
import Pricing from '../components/PricingLayout/Pricing'
import NavBar from '../components/NavBarLayout/NavBar'
import Features from '../components/FeaturesLayout/Features'
import { Banner } from '../components/BannerLayout/Banner'

export default function Home() {
    return (
        <>
        <NavBar />
        <Banner />
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
            <Features />
            <Testimonals />
            <Footer />
        </Stack>
        </>
    );
}