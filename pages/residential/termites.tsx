import dynamic from 'next/dynamic';
const Termite = dynamic(() => import('../../components/TermiteLayout/Termite'));
const NavBar = dynamic(() => import('../../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../../components/FooterLayout/Footer'));

export default function TermitePage() {
  return (
    <>
      <NavBar />
        <Termite />
      <Footer />
    </>
  );
}