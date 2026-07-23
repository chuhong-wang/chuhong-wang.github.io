"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/publications", label: "Publications" },
];

const socialLinks = [
  { href: "https://github.com/chuhong-wang", label: "GitHub" },
  { href: "https://linkedin.com/in/chuhong-wang", label: "LinkedIn" },
  {
    href: "https://scholar.google.com/citations?hl=en&user=7z4odtAAAAAJ&view_op=list_works&sortby=pubdate",
    label: "Google Scholar",
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="mb-12">
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 ${
                isActive
                  ? "font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-100"
                  : "text-zinc-500 dark:text-zinc-400"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
