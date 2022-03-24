import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('../../NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../../FooterLayout/Footer'));

export default function Quote() {
    return (
        <>
            <NavBar />
            <Footer />
        </>
    )
}