import { TextHeader } from "@/components/TextHeader";
import { getBlogBySlug } from "../lib/blogs";
import { useParams } from "react-router";

const NoBlog = () => (
  <div className="w-full text-center">
    <p>No blog to show!</p>
  </div>
);

const BlogDisplayPage = () => {
  const params = useParams();

  if (!params.slug) {
    return <NoBlog />;
  }

  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return <NoBlog />;
  }

  return (
    <>
      <TextHeader title={blog.title} />
      <main dangerouslySetInnerHTML={{ __html: blog.content }}></main>
    </>
  );
};

export default BlogDisplayPage;
