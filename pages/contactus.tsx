import React, { useState } from 'react'
import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../components/FooterLayout/Footer'));
import ContactUs from '../components/ContactUsLayout/ContactUs'

export default function ContactUsPage() {
  return (
    <>
      <NavBar />
        <ContactUs />
      <Footer />
    </>
  );
}