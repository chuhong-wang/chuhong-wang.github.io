# chuhong-wang.github.io

Personal site built with Next.js, Tailwind CSS, and MDX.

## Quick Start

```bash
npm install     # first time only
npm run dev     # start dev server at http://localhost:3000
```

Edit any file and the browser updates instantly.

## Common Tasks

### Update your bio or intro

Edit `app/page.tsx`. The intro text, interests list, and social links are all plain text in that file.

### Change your profile photo

Replace `public/images/bio-photo.jpg` with your new photo (keep the same filename), or update the `src` path in `app/page.tsx`.

### Add a blog post

1. Create a new `.mdx` file in `content/blog/`, e.g. `content/blog/my-new-post.mdx`
2. Add the metadata export at the top:

```mdx
export const metadata = {
  title: "My New Post",
  date: "2024-06-15",
  description: "A short summary of the post.",
}

# My New Post

Write your content here in Markdown...
```

3. It automatically appears on the `/blog` page. No other files need to change.

### Add images to a blog post

1. Put images in `public/images/`
2. Reference them in your MDX file:

```md
![Description](/images/my-image.png)
```

### Add a publication

Edit `app/publications/page.tsx`. Add an entry to the `publications` array:

```ts
{
  authors: '<strong>Wang, Chuhong</strong> and Collaborator Name',
  title: "Paper Title Here",
  journal: "Journal Name",
  year: 2024,
  doi: "https://doi.org/10.xxxx/xxxxx",
},
```

Add it at the top of the array so newest publications appear first.

### Add or edit a project

Edit `app/projects/page.tsx`. Add/modify entries in the `projects` array:

```ts
{
  title: "Project Name",
  description: "What does it do?",
  link: "https://github.com/chuhong-wang/repo-name",
},
```

### Change navigation links

Edit `components/nav.tsx`. The `navLinks` array controls page links, and `socialLinks` controls the social links below them.

### Change site title or description

Edit the `metadata` object in `app/layout.tsx`.

## Project Structure

```
app/                  # Pages (each folder = a route)
  page.tsx            # Home page (/)
  projects/page.tsx   # /projects
  blog/page.tsx       # /blog
  blog/[slug]/page.tsx # Individual blog posts
  publications/page.tsx # /publications
  layout.tsx          # Shared layout (nav + centered column)
  globals.css         # Global styles
components/
  nav.tsx             # Top navigation
content/
  blog/               # Blog posts as .mdx files
lib/
  mdx.ts              # Utility to read blog posts
public/
  images/             # Static images
```

## Deploy

The site auto-deploys via GitHub Actions on every push to `gh-pages`.

```bash
git add -A
git commit -m "describe your change"
git push
```

The workflow builds the site and publishes it to GitHub Pages. Changes go live in ~1 minute.

### First-time setup

In your GitHub repo: **Settings > Pages > Source** — select **"GitHub Actions"** (not "Deploy from a branch").

## Build Locally

```bash
npm run build   # generates static site in out/
npx serve out   # preview the production build
```
