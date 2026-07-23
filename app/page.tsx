import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex items-start gap-5">
        <div className="h-84 w-66 shrink-0 overflow-hidden rounded-lg">
          <Image
            src="/images/bio-photo.jpg"
            alt="Chuhong Wang"
            width={144}
            height={176}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="pt-10">
          <p className="mt-3 text-[16px]  leading-relaxed text-zinc-900 dark:text-zinc-100">
            Hi I&apos;m Chuhong! I grew up in Shanghai and moved to Baltimore for grad school. 
          </p>

          <p className="mt-3 text-[16px]  leading-relaxed text-zinc-900 dark:text-zinc-100">
            I am a Senior Research Scientist at <a href="https://www.sandboxaq.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-zinc-600 dark:hover:text-zinc-300">SandboxAQ</a>. I received my PhD from <a href="https://www.jhu.edu" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-zinc-600 dark:hover:text-zinc-300">JHU</a>. My research interest lies at the intersection of ML and scientific computing.
          </p>
        </div>
      </div>




      <hr />

      <section>
        <Link
          href="/projects"
          className="text-lg font-medium text-zinc-900 no-underline hover:underline dark:text-zinc-100"
        >
          Passion Projects
        </Link>
        <p className="mt-1 text-[15px] text-zinc-500 dark:text-zinc-400">
          Things I&apos;ve built for fun and learning.
        </p>
      </section>

      <hr />

      <section>
        <Link
          href="/blog"
          className="text-lg font-medium text-zinc-900 no-underline hover:underline dark:text-zinc-100"
        >
          Blog
        </Link>
        <p className="mt-1 text-[15px] text-zinc-500 dark:text-zinc-400">
          Notes on learning and experimenting.
        </p>
      </section>

      <hr />

      <section>
        <Link
          href="/publications"
          className="text-lg font-medium text-zinc-900 no-underline hover:underline dark:text-zinc-100"
        >
          Publications
        </Link>
        <p className="mt-1 text-[15px] text-zinc-500 dark:text-zinc-400">
          Research papers on ML interatomic potentials, benchmarking LLM on material science tasks,
          and ML-accelerated materials discovery.
        </p>
      </section>

      <hr />

      <p className="text-sm text-zinc-400 dark:text-zinc-500">
        Find me on{" "}
        <a
          href="https://github.com/chuhong-wang"
          className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          GitHub
        </a>
        ,{" "}
        <a
          href="https://linkedin.com/in/chuhong-wang"
          className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          LinkedIn
        </a>
        , or{" "}
        <a
          href="https://scholar.google.com/citations?hl=en&user=7z4odtAAAAAJ&view_op=list_works&sortby=pubdate"
          className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          Google Scholar
        </a>
        .
      </p>
    </div>
  );
}
