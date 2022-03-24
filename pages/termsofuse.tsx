import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../components/FooterLayout/Footer'));
const TermsOfUse = dynamic(() => import('../components/TermsOfUseLayout/TermsOfUse'));


export default function termsofusePage() {
    return (
        <>
            <NavBar />
            <TermsOfUse />
            <Footer />
        </>
    )
}