import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('../../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../../components/FooterLayout/Footer'));
const Mosquito = dynamic(() => import('../../components/MosquitoLayout/Mosquito'));


export default function MosquitoPage() {
    return (
        <>
            <NavBar />
            <Mosquito />
            <Footer />
        </>
    )
}