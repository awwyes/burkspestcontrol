import { ChakraProvider, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import SEO from '../components/SEO/SEO'
import theme from '../theme';

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <SEO />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}