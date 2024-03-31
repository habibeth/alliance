import { FaCertificate, FaCheckCircle, FaHeart, FaStar } from "react-icons/fa";
import CategoryBannerTitle from "../shared/category-title";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaLocationDot, FaMapLocationDot, FaPhoneVolume } from "react-icons/fa6";


const GetInTouch = () => {
    return (
        <div className="mt-20 max-w-6xl md:mx-auto ml-5 mr-5">
            <CategoryBannerTitle heading="Get In Touch" />
            <div className="grid grid-cols-2 md:grid-cols-4 bg-blue-700 mt-10">
                <div className="text-center border-r-2 border-white my-7 py-2 px-5 text-white">
                    <div className="flex justify-center text-7xl">
                        <MdOutlineAttachEmail />
                    </div>
                    <h2 className="text-lg font-normal my-3">Email Address</h2>
                    <p>info@akclbd.com</p>
                </div>
                <div className="text-center md:border-r-2 border-white my-7 py-2 px-5 text-white">
                    <div className="flex justify-center text-7xl">
                        <FaPhoneVolume />
                    </div>
                    <h2 className="text-lg font-normal my-3">Contact</h2>
                    <p>+8801777 777777</p>
                </div>
                <div className="text-center border-r-2 border-white my-7 py-2 px-5 text-white">
                    <div className="flex justify-center text-7xl">
                        <FaLocationDot />
                    </div>
                    <h2 className="text-lg font-normal my-3">Head Office</h2>
                    <p>Holding: 08/118, Pukurpar, Zirabo, Ashulia, Savar</p>
                </div>
                <div className="text-center my-7 py-2 px-5 text-white">
                    <div className="flex justify-center text-7xl">
                        <FaMapLocationDot />
                    </div>
                    <h2 className="text-lg font-normal my-3">Corporate Office</h2>
                    <p>Holding: 08/118, Pukurpar, Zirabo, Ashulia, Savar</p>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;