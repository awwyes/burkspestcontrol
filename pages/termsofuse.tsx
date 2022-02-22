import React from 'react'
import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../components/FooterLayout/Footer'));
import TermsOfUse from '../components/TermsOfUseLayout/TermsOfUse'


export default function termsofusePage() {
    return (
        <>
            <NavBar />
            <TermsOfUse />
            <Footer />
        </>
    )
}