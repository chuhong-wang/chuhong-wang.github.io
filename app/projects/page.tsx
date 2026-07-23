const projects = [
  {
    title: "Project One",
    description:
      "A brief description of your first project. What problem does it solve?",
    link: "https://github.com/chuhong-wang",
  },
  {
    title: "Project Two",
    description:
      "A brief description of your second project. What makes it interesting?",
    link: "https://github.com/chuhong-wang",
  },
  {
    title: "Project Three",
    description:
      "A brief description of your third project. What did you learn building it?",
    link: "https://github.com/chuhong-wang",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-medium tracking-tight">Passion Projects</h1>
      <p className="mt-3 text-zinc-500 dark:text-zinc-400">
        Things I&apos;ve built for fun and learning.
      </p>

      <hr />

      {projects.map((project, i) => (
        <div key={project.title}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-medium text-zinc-900 no-underline hover:underline dark:text-zinc-100"
          >
            {project.title}
          </a>
          <p className="mt-1 text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400">
            {project.description}
          </p>
          {i < projects.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}
