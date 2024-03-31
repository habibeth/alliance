import Achievement from "@/components/home/acheivement";
import HomeBanner from "@/components/home/carousel";
import CategoryItems from "@/components/home/category-items";
import Certification from "@/components/home/certification";
import GetInTouch from "@/components/home/get-in-touch";
import IntroCard from "@/components/home/intro-card";
import MeetOurManagement from "@/components/home/meet-management";

import NewsMarque from "@/components/home/news";
import OurValuableClients from "@/components/home/our-clients";
import OurVisionMission from "@/components/home/our-mission-vision";
import Sustainability from "@/components/home/sustainability";
import SustainabilityClock from "@/components/home/sustainability-clock";
import ValuesOurFactory from "@/components/home/values";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <NewsMarque />
      <IntroCard />      
      <CategoryItems />
      <OurVisionMission />
      <ValuesOurFactory />
      <MeetOurManagement />
      <Achievement />
      <OurValuableClients />
      <Sustainability />
      <SustainabilityClock />
      <Certification />
      <GetInTouch />
      <Footer />
    </div>
  );
}
