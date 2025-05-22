import { Card, CardContent } from "@/components/ui/card";

export const AboutMeCards = () => {
  return (
    <div className="flex justify-between gap-4">
      <Card className="w-full">
        <CardContent className="space-y-4">
          <p>
            Hello! I'm Preston, a full-stack developer based in Suriname with a
            passion for building digital products that are both beautiful and
            functional. I enjoy tackling complex problems and turning them into
            simple, elegant solutions.
          </p>
          <p>
            I'm constantly learning and exploring new technologies to stay at
            the forefront of web development. When I'm not coding for work, you
            can find me contributing to open-source projects. I believe in
            writing clean, tested and maintainable code.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
