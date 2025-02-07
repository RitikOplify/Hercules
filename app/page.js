import History from "@/components/History";
import ImageCarousel from "@/components/ImageCarousel";
import WatchLandingPage from "@/components/LandingPage";
import Section from "@/components/Section";
import ShopGallery from "@/components/ShopGallery";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <>
      <WatchLandingPage />
      <History />
      <Section />
      <WhoWeAre />
      <ShopGallery />
      <ImageCarousel />
    </>
  );
}
