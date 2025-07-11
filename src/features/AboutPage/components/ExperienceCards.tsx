import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timelineItems = [
  {
    from: "2023",
    to: "Present",
    title: "IT Support & Web Developer",
    bullets: [
      "Provided IT support and troubleshooting for various clients.",
      "Developed and maintained websites using HTML, CSS, React, Typescript, Python and Postgres.",
      "Built fully functional e-commerce platform to enable online sales.",
    ],
  },
  {
    from: "2022",
    to: "2025",
    title: "VWO Onderwijs S-pakket",
  },
];

export const ExperienceTimeline = () => {
  return (
    <div className="space-y-6">
      {timelineItems.map((item, idx) => (
        <Card key={idx} className="relative border-l-4 border-primary pl-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <Badge variant="outline" className="text-sm">
                {item.from} – {item.to}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {item.bullets?.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
