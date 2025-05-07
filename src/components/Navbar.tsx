import { Link } from "react-router";
import { Button } from "@/components/ui/button";

type Link = {
  name: string;
  link: string;
};

const links: Link[] = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];

export const Navbar = () => {
  return (
    <header className="sticky container mt-6 h-16">
      <nav className="flex h-full items-center justify-between rounded-xl border border-gray-200 bg-white/30 px-5 shadow-xs backdrop-blur-lg backdrop-filter">
        <div className="">
          <span className="text-lg font-bold">Preston Febis</span>
        </div>
        <div className="flex gap-4">
          {links.map(({ name, link }, i) => (
            <Button asChild variant="ghost" key={i}>
              <Link to={link}>{name}</Link>
            </Button>
          ))}
        </div>
      </nav>
    </header>
  );
};
