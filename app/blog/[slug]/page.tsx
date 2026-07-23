import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllSlugs } from "@/lib/mdx";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { default: Post, metadata } = await import(
      `@/content/blog/${slug}.mdx`
    );

    return (
      <div>
        <Link
          href="/blog"
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          &larr; Back to blog
        </Link>
        <article className="prose prose-zinc mt-8 dark:prose-invert">
          <time className="text-sm text-zinc-500 dark:text-zinc-400">
            {new Date(metadata.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <Post />
        </article>
      </div>
    );
  } catch {
    notFound();
  }
}
