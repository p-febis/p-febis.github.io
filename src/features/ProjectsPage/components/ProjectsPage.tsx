import { TextHeader } from "@/components/TextHeader";
import { ShowcasedProjects } from "./ShowcasedProjects";

const ProjectsPage = () => {
  return (
    <>
      <TextHeader title="My Projects">
        <p className="text-muted-foreground text-xl">
          Showcasing technical skills and problem-solving through development
          projects.
        </p>
      </TextHeader>
      <ShowcasedProjects />
    </>
  );
};

export default ProjectsPage;
