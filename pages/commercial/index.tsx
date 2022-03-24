import React from 'react'
import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('../../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../../components/FooterLayout/Footer'));

export default function CommercialPage() {

  return (
    <>
      <NavBar />
        <div>Something goes here</div>
      <Footer />
    </>
  );
}