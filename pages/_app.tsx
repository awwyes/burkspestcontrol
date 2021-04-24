import { ChakraProvider, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import theme from '../theme';

export default function App({ Component, pageProps }) {
    return (
    <ChakraProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
    </ChakraProvider>
    
    );
}