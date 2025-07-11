import { LinedText } from "@/components/LinedText";
import { HeroSection } from "@/features/AboutPage/components/HeroSection";
import { AboutMeCards } from "@/features/AboutPage/components/AboutMeCards";
import { ExperienceTimeline } from "./ExperienceCards";

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <LinedText title="About Me" />
      <AboutMeCards />
      <LinedText title="Experience" />
      <ExperienceTimeline />
    </>
  );
};

export default AboutPage;
