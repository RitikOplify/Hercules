import History from "@/components/History";
import ImageCarousel from "@/components/ImageCarousel";
import WatchLandingPage from "@/components/LandingPage";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import ShopGallery from "@/components/ShopGallery";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <>
      <WatchLandingPage />
      <History />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <WhoWeAre />
      <ShopGallery title={"SHOP GALLARY"} />
      <ImageCarousel />
    </>
  );
}
