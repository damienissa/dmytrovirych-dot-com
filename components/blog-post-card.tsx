import Link from "next/link";
import { BlogPost } from "@/lib/types";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card-hover group flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-5"
    >
      <div className="flex items-center gap-2 text-sm text-zinc-500">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
      <h3 className="font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
        {post.title}
      </h3>
      <p className="text-sm leading-relaxed text-zinc-600">
        {post.description}
      </p>
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
