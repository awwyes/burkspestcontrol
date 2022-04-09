import { Flex, Stack, useColorModeValue } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
const Banner = dynamic(() => import('../components/BannerLayout/Banner'))
const NavBar = dynamic(() => import('../components/NavBarLayout/NavBar'))
const Footer = dynamic(() => import('../components/FooterLayout/Footer'))
// const Testimonals = dynamic(() => import('../components/TestimonalsLayout/Testimonals'))
const Pricing = dynamic(() => import('../components/PricingLayout/Pricing'))
const Features = dynamic(() => import('../components/FeaturesLayout/Features'))
const Carousel = dynamic(() => import('../components/CarouselLayout/Carousel'))
const SatisfactionGuarantee = dynamic(() => import('../components/SatisfactionGuaranteeLayout/SatisfactionGuarantee'))

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
            {/* <Testimonals /> */}
            <SatisfactionGuarantee />
            <Footer />
        </Stack>
        </>
    );
}