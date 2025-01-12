import FooterSection from "@/views/containers/organisms/FooterSection";
import GallerySection from "@/views/containers/organisms/GallerySection";
import HeroSection from "@/views/containers/organisms/HeroSection";
import ServiceSection from "@/views/containers/organisms/ServiceSection";

export default function Home() {
  return (
    <main className={`min-h-screen overflow-hidden p-8`}>
      <HeroSection />
      <ServiceSection />
      <GallerySection />
      <FooterSection />
    </main>
  );
}
