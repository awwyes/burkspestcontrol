import dynamic from 'next/dynamic';
const CommercialCTA = dynamic(() => import('../../components/CommercialLayout/CommercialCTA/CommercialCTA'));
const IndustryExpertise = dynamic(() => import('../../components/CommercialLayout/CommercialGrid/CommercialIndustryExpertise'));
const EasyToUpgrade = dynamic(() => import('../../components/CommercialLayout/CommercialFeature/CommercialEasyToUpgrade'));
const Commercial = dynamic(() => import ('../../components/CommercialLayout/Commercial'));
const CommercialBanner = dynamic(() => import('../../components/CommercialLayout/CommercialBanner/CommercialBanner'));
const NavBar = dynamic(() => import('../../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../../components/FooterLayout/Footer'));

export default function CommercialPage() {

  return (
    <>
      <CommercialBanner />
      <NavBar />
        <Commercial />
        <IndustryExpertise />
        <EasyToUpgrade />
        <CommercialCTA />
      <Footer />
    </>
  );
}