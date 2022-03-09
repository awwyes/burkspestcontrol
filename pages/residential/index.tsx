import React from 'react'
import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('../../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../../components/FooterLayout/Footer'));
const PestControl = dynamic(() => import('../../components/PestControlLayout/PestControl'));
const PestControlCTA = dynamic(() => import('../../components/PestControlLayout/PestControlCTALayout/PestControlCTA'));
const PestControlFeature = dynamic(() => import('../../components/PestControlLayout/PestControlFeature/PestControlFeature'));
const PestControlSeasonalFeature = dynamic(() => import('../../components/PestControlLayout/PestControlSeasonalCTALayout/PestControlSeasonal'));

export default function PestControlPage() {
  return (
    <>
      <NavBar />
      <PestControl />
      <PestControlCTA />
      <PestControlFeature />
      <PestControlSeasonalFeature />
      <Footer />
    </>
  );
}