import { Flex, Stack, useColorModeValue } from '@chakra-ui/react'
import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../components/FooterLayout/Footer'));
import Testimonals from '../components/TestimonalsLayout/Testimonals'
import Pricing from '../components/PricingLayout/Pricing'
import Features from '../components/FeaturesLayout/Features'
import { Banner } from '../components/BannerLayout/Banner'
import Carousel from '../components/ImageCTALayout/Carousel'
import SatisfactionGuarantee from '../components/SatisfactionGuaranteeLayout/SatisfactionGuarantee';

export default function Home() {
    return (
        <>
        <NavBar />
        <Banner />
        <Carousel />
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
            <SatisfactionGuarantee />
            <Footer />
        </Stack>
        </>
    );
}