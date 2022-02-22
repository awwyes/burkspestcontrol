import Quote from '../../components/ResidentialQuoteLayout/ResidentialQuote'
import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('../../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../../components/FooterLayout/Footer'));

export default function ResidentialQuote() {
    return (
        <>
            <NavBar />
            <Quote />
            <Footer />
        </>
    )
}