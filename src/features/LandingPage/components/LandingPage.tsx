import { Layout } from "@/components/Layout";
import { HeroSection } from "./HeroSection";
import { FeaturedProjects } from "./FeaturedProducts";

export const LandingPage = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProjects />
    </Layout>
  );
};
