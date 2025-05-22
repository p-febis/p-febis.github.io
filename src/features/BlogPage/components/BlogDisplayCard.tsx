import type { Blog } from "../lib/blogs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "react-router";

export const BlogDisplayCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link to={`/blog/${blog.slug}`}>
      <Card className="relative transition hover:-translate-y-2">
        <CardHeader>
          <span className="truncate text-2xl font-bold text-ellipsis">
            {blog.title}
          </span>
        </CardHeader>
        <CardContent>
          <span className="text-muted-foreground">{blog.shortDescription}</span>
        </CardContent>
        <CardFooter>
          <span className="text-muted-foreground">{blog.date}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};
