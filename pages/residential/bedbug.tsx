import Bedbug from '../../components/BegbugLayout/Bedbug'
import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('../../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../../components/FooterLayout/Footer'));


export default function BedbugPage() {
    return (
        <>
            <NavBar />
            <Bedbug />
            <Footer />
        </>
    )
}