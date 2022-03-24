import dynamic from 'next/dynamic';
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
      <Footer />
    </>
  );
}