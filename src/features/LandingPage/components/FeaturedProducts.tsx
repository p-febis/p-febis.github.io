import { projects } from "@/lib/projects.ts";
import { ProjectCard } from "../../../components/ProjectCard.tsx";

export const FeaturedProjects = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Featured Projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {projects.map(({ description, ...project }, i) => (
          <ProjectCard key={i} {...project} showBlog={false}>
            {description}
          </ProjectCard>
        ))}
      </div>
    </section>
  );
};
