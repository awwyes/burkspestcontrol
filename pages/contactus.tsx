import React from 'react'
import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../components/FooterLayout/Footer'));
const ContactUs = dynamic(() => import('../components/ContactUsLayout/ContactUs')); 

export default function ContactUsPage() {
  return (
    <>
      <NavBar />
        <ContactUs />
      <Footer />
    </>
  );
}