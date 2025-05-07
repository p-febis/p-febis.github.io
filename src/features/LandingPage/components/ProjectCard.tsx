import type { PropsWithChildren } from "react";
import { Github } from "lucide-react";

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
    <Card className={isWide ? "col-span-2" : "col-span-1"}>
      <CardHeader>
      <div className="inline-flex gap-3">
        {iconsSource.map((source, i) => (
          <img src={source} key={i} width={32} height={32} />
        ))}
      </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <span className="font-bold text-2xl">{title}</span>
        {children}
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link to={githubLink} target="_blank" rel="noopener noreferrer">
            <Github />
            Source Code
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
