import type { PropsWithChildren } from "react";
import { GithubIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export const ProjectCard = ({
  children,
  iconsSource,
  title,
  githubLink,
  isWide,
}: PropsWithChildren<{
  iconsSource: string[];
  title: string;
  githubLink: string;
  isWide?: boolean;
}>) => {
  return (
    <Card
      className={`transition hover:-translate-y-2 ${isWide ? "col-span-2" : "col-span-1"}`}
    >
      <CardHeader>
        <div className="inline-flex gap-3">
          {iconsSource.map((source, i) => (
            <img src={source} key={i} width={32} height={32} />
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <span className="text-2xl font-bold">{title}</span>
        {children}
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link to={githubLink} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            Source Code
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
