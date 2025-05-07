import PythonLogo from "@/assets/icons/python.svg";
import NextJsLogo from "@/assets/icons/nextjs.svg";
import TypeScriptLogo from "@/assets/icons/typescript.svg";
import GraphQLLogo from "@/assets/icons/graphql.svg";

import { ProjectCard } from "./ProjectCard.tsx";

type Project = {
  iconsSource: string[];
  title: string;
  description: string;
  githubLink: string;
  isWide?: boolean;
};

const projects: Project[] = [
  {
    iconsSource: [PythonLogo],
    title: "Theseus",
    description:
      "Theseus is an importer written for the saleor Ecommerce engine.",
    githubLink: "https://github.com/p-febis/theseus",
    isWide: true,
  },
  {
    iconsSource: [NextJsLogo, TypeScriptLogo, GraphQLLogo],
    title: "Winkri",
    description:
      "Winkri is a Saas ecommorce solution. It is not currently open source.",
    githubLink: "https://github.com/p-febis/winkri",
  },
  {
    iconsSource: [NextJsLogo, TypeScriptLogo, GraphQLLogo],
    title: "Saleor Storefront",
    description:
      "I've commited code to various Saleor repositories, including porting storefront to Next 15.",
    githubLink: "https://github.com/saleor/storefront",
  },
  {
    iconsSource: [NextJsLogo, TypeScriptLogo],
    title: "Saleor Auth SDK",
    description:
      "I've also commited code to Saleor Auth SDK, this need arose when I was porting storefront to Next 15.",
    githubLink: "https://github.com/saleor/storefront",
    isWide: true,
  },
];

export const FeaturedProjects = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Featured Projects</h2>
      <div className="grid grid-cols-3 gap-4">
        {projects.map(({ description, ...project }, i) => (
          <ProjectCard key={i} {...project}>
            {description}
          </ProjectCard>
        ))}
      </div>
    </section>
  );
};
