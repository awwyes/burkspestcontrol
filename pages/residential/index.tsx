import React from 'react'
import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('../../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../../components/FooterLayout/Footer'));
import PestControl from '../../components/PestControlLayout/PestControl'
import PestControlCTA from '../../components/PestControlLayout/PestControlCTALayout/PestControlCTA'
import PestControlFeature from '../../components/PestControlLayout/PestControlFeature/PestControlFeature'
import PestControlSeasonalFeature from '../../components/PestControlLayout/PestControlSeasonalCTALayout/PestControlSeasonal'

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