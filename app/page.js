import History from "@/components/Home/History";
import ImageCarousel from "@/components/Home/ImageCarousel";
import WatchLandingPage from "@/components/Home/LandingPage";
import Section from "@/components/Home/Section";
import ShopGallery from "@/components/Home/ShopGallery";

export default function Home() {
  return (
    <>
      <WatchLandingPage />
      <History />
      <Section />
      <ShopGallery title={"Shop Gallary"} />
      <ImageCarousel />
    </>
  );
}
