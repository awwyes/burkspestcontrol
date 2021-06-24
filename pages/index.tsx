import {Flex, Stack, useColorModeValue} from '@chakra-ui/react'
import Footer from '../components/FooterLayout/Footer'
import Testimonals from '../components/TestimonalsLayout/Testimonals'
import Pricing from '../components/PricingLayout/Pricing'
import NavBar from '../components/NavBarLayout/NavBar'
import Features from '../components/FeaturesLayout/Features'
import { Banner } from '../components/BannerLayout/Banner'
import CTALayout from '../components/ImageCTALayout/CTALayout'

export default function Home() {
    return (
        <>
        <NavBar />
        <Banner />
        <CTALayout />
        <Stack
            as="main"
            align="center"
            background={useColorModeValue("white", "black")}
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