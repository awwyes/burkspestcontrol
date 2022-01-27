import React from 'react'
import NavBar from '../../components/NavBarLayout/NavBar'
import Termite from '../../components/TermiteLayout/Termite'
import Footer from '../../components/FooterLayout/Footer'
import TermiteWhy from '../../components/TermiteLayout/TermiteWhy';

export default function TermitePage() {
  return (
    <>
      <NavBar />
        <Termite />
        <TermiteWhy />
      <Footer />
    </>
  );
}