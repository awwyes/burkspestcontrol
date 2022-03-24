import dynamic from 'next/dynamic';
const Quote = dynamic(() => import('../../components/CommercialLayout/CommercialQuote/CommercialQuote'));
const NavBar = dynamic(() => import('../../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../../components/FooterLayout/Footer'));

export default function ResidentialQuote() {
    return (
        <>
            <NavBar />
            <Quote/>
            <Footer />
        </>
    )
}