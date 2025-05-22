import { TextHeader } from "@/components/TextHeader";
import { getAllBlogs } from "../lib/blogs";
import { BlogDisplayCard } from "./BlogDisplayCard";

const BlogPage = () => {
  const blogs = getAllBlogs();

  return (
    <>
      <TextHeader title="Blog" />
      <div className="grid md:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <BlogDisplayCard blog={blog} key={blog.slug} />
        ))}
      </div>
    </>
  );
};

export default BlogPage;
