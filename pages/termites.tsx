import React from 'react'
import NavBar from '../components/NavBarLayout/NavBar'
import Termite from '../components/TermiteLayout/Termite'
import Footer from '../components/FooterLayout/Footer'

export default function TermitePage() {
  return (
    <>
      <NavBar />
        <Termite />
      <Footer />
    </>
  );
}