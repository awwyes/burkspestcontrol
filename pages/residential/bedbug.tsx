import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('../../components/NavBarLayout/NavBar'));
const Footer = dynamic(() => import('../../components/FooterLayout/Footer'));
const Bedbug = dynamic(() => import('../../components/BegbugLayout/Bedbug'));


export default function BedbugPage() {
    return (
        <>
            <NavBar />
            <Bedbug />
            <Footer />
        </>
    )
}