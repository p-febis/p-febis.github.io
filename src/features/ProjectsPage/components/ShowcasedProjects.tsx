import { projects } from "@/lib/projects.ts";
import { ProjectCard } from "../../../components/ProjectCard.tsx";

export const ShowcasedProjects = () => {
  return (
    <section className="space-y-4">
      <div className="grid gap-4 md:grid-cols-4">
        {projects.map(({ description, ...project }, i) => (
          <ProjectCard key={i} {...project} showBlog={true} isWide={true}>
            {description}
          </ProjectCard>
        ))}
      </div>
    </section>
  );
};
