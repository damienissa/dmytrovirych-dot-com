import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogPostCard } from "@/components/blog-post-card";

export const metadata: Metadata = {
  title: "Blog — Dmytro Virych",
  description: "Thoughts on indie hacking, building products, and shipping solo.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900">
        Blog
      </h1>
      {posts.length === 0 ? (
        <p className="text-zinc-600">No posts yet. Check back soon!</p>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}
