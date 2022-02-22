import React from 'react'
import Termite from '../../components/TermiteLayout/Termite'
import TermiteWhy from '../../components/TermiteLayout/TermiteWhy'
import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('../../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../../components/FooterLayout/Footer'));

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