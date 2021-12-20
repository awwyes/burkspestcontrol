import React from 'react'
import NavBar from '../components/NavBarLayout/NavBar'
import PestControl from '../components/PestControlLayout/PestControl'
import PestControlCTA from '../components/PestControlLayout/PestControlCTALayout/PestControlCTA'
import PestControlFeature from '../components/PestControlLayout/PestControlFeature/PestControlFeature'
import PestControlSeasonalFeature from '../components/PestControlLayout/PestControlSeasonalCTALayout/PestControlSeasonal'

export default function PestControlPage() {
  return (
    <>
      <NavBar />
      <PestControl />
      <PestControlCTA />
      <PestControlFeature />
      <PestControlSeasonalFeature />
    </>
  );
}