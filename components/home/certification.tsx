import Image from "next/image";
import CategoryBannerTitle from "../shared/category-title";

import certificate1 from "@/assets/certificate/alliance.png"
import certificate2 from "@/assets/certificate/amfori.png"
import certificate3 from "@/assets/certificate/betterCotton.png"
import certificate4 from "@/assets/certificate/costco.png"
import certificate5 from "@/assets/certificate/ctpat.png"
import certificate6 from "@/assets/certificate/gateway.png"
import certificate7 from "@/assets/certificate/global.png"
import certificate8 from "@/assets/certificate/higindex.png"
import certificate9 from "@/assets/certificate/ics.png"
import certificate10 from "@/assets/certificate/iso1.png"
import certificate11 from "@/assets/certificate/iso2.png"
import certificate12 from "@/assets/certificate/okeo.png"
import certificate13 from "@/assets/certificate/rsc.png"
import certificate14 from "@/assets/certificate/sedex.png"
import certificate15 from "@/assets/certificate/wrap.png"
import certificate16 from "@/assets/certificate/zhdc.png"


const Certification = () => {
    return (
        <div className="mt-20">
            <CategoryBannerTitle heading="Certification" />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-5 max-w-6xl md:mx-auto ml-5 mr-5 mt-10">
                <div className="">
                    <Image src={certificate1} alt="certificate" />
                </div>
                <div className="">
                    <Image src={certificate2} alt="certificate" />
                </div>
                <div className="">
                    <Image src={certificate3} alt="certificate" />
                </div>
                <div className="">
                    <Image src={certificate4} alt="certificate" />
                </div>
                <div className="">
                    <Image src={certificate5} alt="certificate" />
                </div>
                <div className="">
                    <Image src={certificate6} alt="certificate" />
                </div>
                <div className="">
                    <Image src={certificate7} alt="certificate" />
                </div>
                <div className="">
                    <Image src={certificate8} alt="certificate" />
                </div>
                <div className="">
                    <Image src={certificate9} alt="certificate" />
                </div>
                <div className="">
                    <Image src={certificate10} alt="certificate" />
                </div>
                <div className="">
                    <Image src={certificate11} alt="certificate" />
                </div>
                <div className="">
                    <Image src={certificate12} alt="certificate" />
                </div>
                <div className="">
                    <Image src={certificate13} alt="certificate" />
                </div>
                <div className="">
                    <Image src={certificate14} alt="certificate" />
                </div>
                <div className="">
                    <Image src={certificate15} alt="certificate" />
                </div>
                <div className="">
                    <Image src={certificate16} alt="certificate" />
                </div>
            </div>
        </div>
    );
};

export default Certification;