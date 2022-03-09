import React from 'react'
import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../components/FooterLayout/Footer'));
const Covid19 = dynamic(() => import('../components/Covid19Layout/Covid19'));

export default function Covid19Page() {
    return (
        <>
            <NavBar />
            <Covid19 />
            <Footer />
        </>
    )
}