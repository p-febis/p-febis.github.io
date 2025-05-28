import Fuse, { type IFuseOptions } from "fuse.js";

const blogFiles = import.meta.glob("../blogs/*.md", { eager: true });

export type Blog = {
  slug: string;
  title: string;
  headerImage: string;
  shortDescription: string;
  date: string;
  content: string;
};

const blogs: Blog[] = Object.entries(blogFiles).map(([path, content]) => {
  const { attributes, html } = content as {
    attributes: {
      title?: string;
      headerImage?: string;
      shortDescription?: string;
      date?: string;
    };
    html: string;
  };
  const slug = path.split("/").pop()?.replace(".md", "");

  return {
    slug: slug ?? "",
    title: attributes?.title ?? "",
    shortDescription: attributes?.shortDescription ?? "",
    date: attributes?.date ?? "",
    headerImage: attributes?.headerImage ?? "",
    content: html,
  };
}).sort((a,b) => {

  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();

  return (dateB - dateA);

});

export function getAllBlogs() {
  return blogs;
}

const fuseOptions: IFuseOptions<Blog> = {
  includeScore: false,
  keys: ["slug", "title"],
};

const fuse = new Fuse(blogs, fuseOptions);

export function searchBlogs(searchQuery: string): Blog | undefined {
  return fuse.search(searchQuery)[0].item;
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
}
