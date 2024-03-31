import Image from "next/image";
import CategoryBannerTitle from "../shared/category-title";
import ClockCycle from "@/assets/sustain/clock.jpg";


const SustainabilityClock = () => {
    return (
        <div>
            <CategoryBannerTitle heading="Sustainability Clock" />
            <Image src={ClockCycle} alt="sustainability clock" className="mt-10" />
        </div>
    );
};

export default SustainabilityClock;