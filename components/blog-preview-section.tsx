import Link from "next/link";
import { getRecentPosts } from "@/lib/blog";
import { BlogPostCard } from "./blog-post-card";
import { ArrowRightIcon } from "./icons";

export function BlogPreviewSection() {
  const posts = getRecentPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="flex flex-col gap-4 pt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
          Recent Posts
        </h2>
        <Link
          href="/blog"
          className="flex items-center gap-1 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
        >
          View all
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-4">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
