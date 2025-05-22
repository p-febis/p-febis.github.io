import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import type { ReactNode } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        <Link to="/">
          <span className="text-lg font-bold">Preston Febis</span>
        </Link>
        <div className="hidden gap-4 md:flex">
          {links.map(({ component, link }, i) => (
            <Button asChild variant="ghost" key={i}>
              <Link to={link}>{component}</Link>
            </Button>
          ))}
        </div>
        <div className="relative flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent className="md:hidden">
              {links.map(({ component, link }, i) => (
                <DropdownMenuItem asChild key={i}>
                  <Link to={link}>{component}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};
