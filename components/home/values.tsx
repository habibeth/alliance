import values1 from "@/assets/values/1.png"
import values2 from "@/assets/values/2.png"
import values3 from "@/assets/values/3.png"
import values4 from "@/assets/values/4.png"
import values5 from "@/assets/values/5.png"
import values6 from "@/assets/values/6.png"
import Image from "next/image"
import CategoryBannerTitle from "../shared/category-title"

const ValuesOurFactory = () => {
    return (
        <div className="mt-20">
            <CategoryBannerTitle heading="Values" />
            <div className="grid grid-cols-2 md:grid-cols-6 md:gap-5 gap-5 gap-y-8 ml-5 mr-5 max-w-6xl md:mx-auto mt-10">
                <div className="border rounded-full hover:border-indigo-700 px-10 py-7 transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-700 shadow-2xl">
                    <Image src={values1} alt="valuse" />
                    <h2 className="text-center">Integrity</h2>
                </div>
                <div className="border rounded-full hover:border-indigo-700 px-10 py-7 transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-700 shadow-2xl">
                    <Image src={values2} alt="valuse" />
                    <h2 className="text-center">Adaptability</h2>
                </div>
                <div className="border rounded-full hover:border-indigo-700 px-10 py-7 transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-700 shadow-2xl">
                    <Image src={values3} alt="valuse" />
                    <h2 className="text-center">Passion</h2>
                </div>
                <div className="border rounded-full hover:border-indigo-700 px-10 py-7 transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-700 shadow-2xl">
                    <Image src={values4} alt="valuse" />
                    <h2 className="text-center">Commitment</h2>
                </div>
                <div className="border rounded-full hover:border-indigo-700 px-10 py-7 transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-700 shadow-2xl">
                    <Image src={values5} alt="valuse" />
                    <h2 className="text-center">Impartiality</h2>
                </div>
                <div className="border rounded-full hover:border-indigo-700 px-10 py-7 transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-700 shadow-2xl">
                    <Image src={values6} alt="valuse" />
                    <h2 className="text-center">Innovation</h2>
                </div>
            </div>
        </div>
    );
};

export default ValuesOurFactory;