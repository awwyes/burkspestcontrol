import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import SEO from '../components/SEO/SEO'
import theme from '../theme'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ga from '../lib/ga'

export default function App({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url)
        }
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])
    
    return (
        <ChakraProvider theme={theme} >
            <CSSReset />
            <SEO />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}