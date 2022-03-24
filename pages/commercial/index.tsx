import React from 'react'
import dynamic from 'next/dynamic';
import Commercial from '../../components/CommercialLayouts/Commercial';
const NavBar = dynamic(() => import('../../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../../components/FooterLayout/Footer'));

export default function CommercialPage() {

  return (
    <>
      <NavBar />
        <Commercial />
      <Footer />
    </>
  );
}