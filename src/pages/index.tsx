import FooterSection from "@/views/containers/organisms/FooterSection";
import HeroSection from "@/views/containers/organisms/HeroSection";
import ServiceSection from "@/views/containers/organisms/ServiceSection";

export default function Home() {
  return (
    <main className={`min-h-screen overflow-hidden p-8`}>
      <HeroSection />
      <ServiceSection />
      <FooterSection />
    </main>
  );
}
