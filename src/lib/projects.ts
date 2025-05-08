import PythonLogo from "@/assets/icons/python.svg";
import NextJsLogo from "@/assets/icons/nextjs.svg";
import TypeScriptLogo from "@/assets/icons/typescript.svg";
import GraphQLLogo from "@/assets/icons/graphql.svg";

export type Project = {
  iconsSource: string[];
  title: string;
  description: string;
  githubLink: string;
  blogSlug?: string;
  isWide?: boolean;
  showBlog?: boolean;
};

export const projects: Project[] = [
  {
    iconsSource: [PythonLogo],
    title: "Theseus",
    description:
      "Theseus is an importer written for the saleor Ecommerce engine.",
    githubLink: "https://github.com/p-febis/theseus",
    isWide: true,
    showBlog: true,
    blogSlug: "theseus-importer",
  },
  {
    iconsSource: [NextJsLogo, TypeScriptLogo, GraphQLLogo],
    title: "Winkri",
    description:
      "Winkri is a Saas ecommorce solution. It is not currently open source.",
    githubLink: "https://github.com/p-febis/winkri",
    showBlog: true,
    blogSlug: "winkri-commerce",
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
