import FaqSection from "@/views/containers/organisms/FaqSection";
import FooterSection from "@/views/containers/organisms/FooterSection";
import OurClientSection from "@/views/containers/organisms/OurClientSection";
import HeroSection from "@/views/containers/organisms/HeroSection";
import ServiceSection from "@/views/containers/organisms/ServiceSection";
import Head from "next/head";
import icon from "../../public/assets/images/company/company-logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import WhySection from "@/views/containers/organisms/WhySection";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>{`Aflah Apparel`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={"home"} />
        <link rel="icon" href={icon.src} />
        <link rel="apple-touch-icon" href={icon.src} />
      </Head>
      <main className={`min-h-screen overflow-hidden p-8`}>
        <HeroSection />
        <ServiceSection />
        <WhySection />
        <OurClientSection />
        <FaqSection />
        <FooterSection />
      </main>
    </>
  );
}
