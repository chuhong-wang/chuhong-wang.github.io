import Image from "next/image";

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
    </div>
  );
}
