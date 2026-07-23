import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1 className="text-2xl font-medium tracking-tight">Blog</h1>
      <p className="mt-3 text-zinc-500 dark:text-zinc-400">
        Notes on GPU programming, scientific computing, and more.
      </p>

      <hr />

      {posts.map((post, i) => (
        <div key={post.slug}>
          <div className="flex items-baseline justify-between gap-4">
            <Link
              href={`/blog/${post.slug}`}
              className="text-[15px] font-medium text-zinc-900 no-underline hover:underline dark:text-zinc-100"
            >
              {post.title}
            </Link>
            <time className="shrink-0 text-sm text-zinc-400 dark:text-zinc-500">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
          <p className="mt-1 text-[15px] text-zinc-500 dark:text-zinc-400">
            {post.description}
          </p>
          {i < posts.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}
