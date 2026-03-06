import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `https://dmytrovirych.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    { url: "https://dmytrovirych.com", lastModified: new Date() },
    { url: "https://dmytrovirych.com/blog", lastModified: new Date() },
    ...posts,
  ];
}
