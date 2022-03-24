import React from 'react'
import dynamic from 'next/dynamic';
import CommericalStepper from '../../components/CommercialLayouts/CommercialQuote/commercialStepper';
const NavBar = dynamic(() => import('../../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../../components/FooterLayout/Footer'));

export default function CommercialQuotePage() {
    return (
        <>
        <NavBar />
            <CommericalStepper />
        <Footer />
        </>
    )
}