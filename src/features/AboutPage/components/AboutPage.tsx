import { LinedText } from "@/components/LinedText";
import { HeroSection } from "@/features/AboutPage/components/HeroSection";
import { AboutMeCards } from "@/features/AboutPage/components/AboutMeCards";

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <LinedText title="About Me" />
      <AboutMeCards />
    </>
  );
};

export default AboutPage;
