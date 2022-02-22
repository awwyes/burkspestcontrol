import React from 'react'
import NavBar from '../components/NavBarLayout/NavBar'
import Footer from '../components/FooterLayout/Footer'
import PrivacyPolicy from '../components/PrivacyPolicyLayout/PrivacyPolicy'

export default function PrivacyPage() {
    return (
        <>
            <NavBar />
            <PrivacyPolicy />
            <Footer />
        </>
    )
}