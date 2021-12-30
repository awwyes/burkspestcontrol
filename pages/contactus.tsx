import React, { useState } from 'react'
import NavBar from '../components/NavBarLayout/NavBar'
import Footer from '../components/FooterLayout/Footer'
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