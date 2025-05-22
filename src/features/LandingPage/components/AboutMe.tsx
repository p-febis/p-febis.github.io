import PythonLogo from "@/assets/icons/python.svg";
import NextJsLogo from "@/assets/icons/nextjs.svg";
import TypeScriptLogo from "@/assets/icons/typescript.svg";
import GraphQLLogo from "@/assets/icons/graphql.svg";
import GoLogo from "@/assets/icons/go.svg";
import PostgresLogo from "@/assets/icons/postgresql.svg";

import { Card, CardContent } from "@/components/ui/card";

const icons: { alt: string; src: string }[] = [
  { alt: "NextJs", src: NextJsLogo },
  { alt: "Python", src: PythonLogo },
  { alt: "TypeScript", src: TypeScriptLogo },
  { alt: "Go", src: GoLogo },
  { alt: "GraphQL", src: GraphQLLogo },
  { alt: "PostgreSQL", src: PostgresLogo },
];

export const AboutMe = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">About Me</h2>

      <Card className="w-full">
        <CardContent className="flex flex-col items-center justify-center gap-4">
          <span className="text-lg font-semibold">My Skills</span>
          <div className="flex flex-wrap gap-3">
            {icons.map(({ alt, src }, i) => (
              <img
                src={src}
                alt={alt}
                title={alt}
                width={48}
                height={48}
                key={i}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
