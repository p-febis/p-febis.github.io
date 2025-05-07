import { Layout } from "@/components/Layout";
import { HeroSection } from "./HeroSection";
import { FeaturedProjects } from "./FeaturedProducts";
import { AboutMe } from "./AboutMe";

export const LandingPage = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProjects />
      <AboutMe />
    </Layout>
  );
};
