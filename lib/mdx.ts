import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content", "blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const posts: PostMeta[] = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { metadata } = await import(`@/content/blog/${file}`);
      return {
        slug,
        title: metadata.title,
        date: metadata.date,
        description: metadata.description,
      };
    })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
