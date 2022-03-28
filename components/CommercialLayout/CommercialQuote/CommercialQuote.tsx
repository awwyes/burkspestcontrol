import dynamic from "next/dynamic";
const CommercialStepper = dynamic(() => import ('../CommercialStepper/CommercialStepper'));

export default function Quote() {
    return (
        <>
            <CommercialStepper />
        </>
    )
}