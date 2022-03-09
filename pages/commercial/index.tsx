import React from 'react'
import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('../../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../../components/FooterLayout/Footer'));


export default function PestControlPage() {
  return (
    <>
      <NavBar />
        <div>Insert components here</div>
      <Footer />
    </>
  );
}