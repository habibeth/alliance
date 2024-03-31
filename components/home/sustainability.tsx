import Image from "next/image";
import CategoryBannerTitle from "../shared/category-title";

import social from "@/assets/sustain/socialSustainability.png"
import material from "@/assets/sustain/materialsSustainability.png"
import environmental from "@/assets/sustain/environmentalSustainability.png"
import sustainableGoal from "@/assets/sustain/sustainable-development-goals.jpg"


const Sustainability = () => {
    return (
        <div className="max-w-6xl md:mx-auto ml-5 mr-5 mt-20">
            <CategoryBannerTitle heading="Sustainability" />
            <p className="mt-5 mb-16 text-center">Believing the concept of Sustainable Continuous Development, Alliance Group has been in the track of implementing sustainable management process in all its concerns for last several years. It has, since beginning of the endeavor, successfully contributed to many areas of its production or operational processes.</p>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="px-10 py-7 transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-700">
                    <h2 className="text-2xl text-center">Social <br />Sustainability</h2>
                    <div className="flex justify-center items-center">
                        <Image src={social} alt="social" />
                    </div>
                </div>
                <div className="px-10 py-7 transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-700">
                    <h2 className="text-2xl text-center">Material <br />Sustainability</h2>
                    <div className="flex justify-center items-center">
                        <Image src={material} alt="social" />
                    </div>
                </div>
                <div className="px-10 py-7 transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-700">
                    <h2 className="text-2xl text-center">Environmental <br />Sustainability</h2>
                    <div className="flex justify-center items-center">
                        <Image src={environmental} alt="social" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Image src={sustainableGoal} alt="sustainable goal" />
            </div>
        </div>
    );
};

export default Sustainability;