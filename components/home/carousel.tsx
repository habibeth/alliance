"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerbg1 from "@/assets/1.jpeg"
import bannerbg2 from "@/assets/2.jpeg"
import bannerbg3 from "@/assets/3.jpeg"
import bannerbg4 from "@/assets/4.jpeg"
import bannerbg5 from "@/assets/5.jpeg"
import Image from "next/image";

const HomeBanner = () => {


    return (
        <div className="">
            <Carousel
                showStatus={false}
                showArrows={true} 
                showThumbs={true}
                autoPlay
                infiniteLoop={true}
                swipeable={false}
                emulateTouch={true}
                //@ts-ignore
                animationHandler="fade"
                // transitionTime={5000}
            >
                <div>
                    <Image src={bannerbg1} alt="image all" className="z-0" />
                </div>
                <div>
                    <Image src={bannerbg2} alt="image" />
                </div>
                <div>
                    <Image src={bannerbg3} alt="image" />
                </div>
                <div>
                    <Image src={bannerbg4} alt="image" />
                </div>
                <div>
                    <Image src={bannerbg5} alt="image" />
                </div>
            </Carousel>
        </div>
    );
};

export default HomeBanner;