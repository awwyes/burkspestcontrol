import Mosquito from '../../components/MosquitoLayout/Mosquito'
import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('../../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../../components/FooterLayout/Footer'));


export default function ResidentialQuote() {
    return (
        <>
            <NavBar />
            <Mosquito />
            <Footer />
        </>
    )
}