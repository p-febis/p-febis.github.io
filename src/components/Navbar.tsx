import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import type { ReactNode } from "react";

type Link = {
  component: ReactNode | string;
  link: string;
};

const links: Link[] = [
  {
    component: "About",
    link: "/about",
  },
  {
    component: "Blog",
    link: "/blog",
  },
  {
    component: "Projects",
    link: "/projects",
  },
  {
    component: <GithubIcon />,
    link: "https://github.com/p-febis",
  },
];

export const Navbar = () => {
  return (
    <header className="sticky top-4 z-10 container mt-6 h-16">
      <nav className="flex h-full items-center justify-between rounded-xl border border-gray-200 bg-white/30 px-5 shadow-xs backdrop-blur-lg backdrop-filter">
        <div className="">
          <span className="text-lg font-bold">Preston Febis</span>
        </div>
        <div className="flex gap-4">
          {links.map(({ component, link }, i) => (
            <Button asChild variant="ghost" key={i}>
              <Link to={link}>{component}</Link>
            </Button>
          ))}
        </div>
      </nav>
    </header>
  );
};
