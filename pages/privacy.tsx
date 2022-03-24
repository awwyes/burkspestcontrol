import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../components/FooterLayout/Footer'));
const PrivacyPolicy = dynamic(() => import('../components/PrivacyPolicyLayout/PrivacyPolicy')); 

export default function PrivacyPage() {
    return (
        <>
            <NavBar />
            <PrivacyPolicy />
            <Footer />
        </>
    )
}