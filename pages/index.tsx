import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";
import ExternalLinkIcon from "../components/ExternalLinkIcon";
import avatar from "../public/dennis-avatar.webp";

interface WorkItem {
  title: string;
  url: string;
  meta: string;
  description: string;
  tags: string[];
  external?: boolean;
}

interface LatestItem {
  kind: string;
  title: string;
  href: string;
  excerpt?: string;
}

const linkStyles =
  "font-medium underline decoration-slate-500 underline-offset-[6px] text-slate-900 dark:text-white";

const sectionHeadingStyles =
  "text-lg font-bold text-slate-900 dark:text-slate-200";

const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900";

const linkedTitleStyles =
  "items-center gap-1 text-lg font-bold text-blue-700 transition-colors group-hover:text-blue-600 dark:text-blue-300 dark:group-hover:text-blue-400";

const workItems: WorkItem[] = [
  {
    title: "OpenMRS 3",
    url: "https://openmrs.org/o3/",
    meta: "OpenMRS / Platform",
    description:
      "Frontend platform work for OpenMRS, a widely used open-source EMR, with module federation, extensions, and ways for implementers to ship without forking core.",
    tags: ["React", "TypeScript", "Platform"],
    external: true,
  },
  {
    title: "O3 Docs",
    url: "https://o3-docs.vercel.app",
    meta: "Documentation / Contributor onboarding",
    description:
      "Documentation shaped around the path a new implementer or contributor walks, from first install to production-ready frontend modules.",
    tags: ["Docs", "MDX", "DX"],
    external: true,
  },
  {
    title: "create-o3-app",
    url: "https://github.com/openmrs/create-o3-app",
    meta: "Tooling / Scaffolding",
    description:
      "A CLI for scaffolding OpenMRS 3 frontend modules with the boring-but-important setup handled.",
    tags: ["Node", "TypeScript", "CLI"],
    external: true,
  },
  {
    title: "O3 Form Builder",
    url: "https://github.com/openmrs/openmrs-esm-form-builder",
    meta: "Clinical workflows / Forms",
    description:
      "A calmer path for building, testing, and publishing OpenMRS forms used in real clinical workflows.",
    tags: ["Forms", "OpenMRS", "UX"],
    external: true,
  },
];

const latestItems: LatestItem[] = [
  {
    kind: "Note",
    title: "Health software should feel calm",
    href: "/notes",
    excerpt:
      "Clinical tools carry pressure from the room into the interface. The best work is often quiet.",
  },
  {
    kind: "Bookmark",
    title: "Quality Software",
    href: "/bookmarks",
    excerpt:
      "A saved essay on polish, care, and the little signs that someone paid attention.",
  },
  {
    kind: "Reading",
    title: "Working in Public",
    href: "/reading",
    excerpt:
      "Important for understanding why maintainers burn out and what healthier stewardship asks for.",
  },
  {
    kind: "Uses",
    title: "React, TypeScript, Playwright, and the tools nearby",
    href: "/uses",
  },
];

export default function Home() {
  return (
    <Container description="Helping build O3, the modern OpenMRS frontend used by implementers around the world. Notes on frontend craft, documentation, and developer experience.">
      <div className="flex grow flex-col items-start justify-center">
        <Hero />
        <Currently />
        <SelectedWork />
        <Latest />
        <Connect />
      </div>
    </Container>
  );
}

function Hero() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <Image
          alt="Dennis Kigen"
          className="h-[96px] w-[96px] rounded-full object-cover p-px shadow-lg"
          src={avatar}
          height={128}
          width={128}
          sizes="96px"
          priority={true}
          placeholder="blur"
        />
        <div className="min-w-0 flex-1 space-y-3">
          <h1 className="text-2xl font-bold leading-tight text-slate-950 dark:text-slate-100 sm:text-4xl">
            I&apos;m Dennis Kigen, a frontend engineer building open-source
            health software at OpenMRS.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300">
            I work on O3, the modern OpenMRS frontend used by implementers
            worldwide, with a focus on frontend systems, documentation, and
            developer experience.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-1 text-sm font-medium text-slate-600 dark:text-slate-400 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2">
        <span>Based in Eldoret, Kenya</span>
        <span>Open-source contributor</span>
        <span>React, TypeScript, Vitest, Playwright</span>
      </div>
    </section>
  );
}

function Currently() {
  return (
    <section className="mt-14 w-full">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className={sectionHeadingStyles}>Currently</h2>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          Updated May 2026
        </p>
      </div>
      <div className="mt-6 border border-gray-200 p-5 dark:border-slate-700">
        <p>
          Most of my energy is going into O3 platform improvements,
          product-facing features, and developer experience that helps
          contributors move with confidence.
        </p>
        <p className="mt-4">
          I&apos;m especially interested in thoughtful frontend systems, health
          software, documentation, and open-source collaboration.
        </p>
      </div>
    </section>
  );
}

function WorkLink({ work }: { work: WorkItem }) {
  const content = (
    <article className="group border border-gray-200 p-5 transition-colors hover:border-gray-300 hover:bg-gray-50 dark:border-slate-700 dark:hover:border-slate-600 dark:hover:bg-slate-800/70">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
        <span>{work.meta}</span>
      </div>
      <h3 className={`mt-3 flex ${linkedTitleStyles}`}>
        {work.title}
        {work.external && <ExternalLinkIcon />}
      </h3>
      <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
        {work.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {work.tags.map((tag) => (
          <span
            key={tag}
            className="border border-gray-200 px-2 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );

  if (work.external) {
    return (
      <ExternalLink href={work.url} styles={`block !no-underline ${focusStyles}`}>
        {content}
      </ExternalLink>
    );
  }

  return (
    <Link href={work.url} className={`block no-underline ${focusStyles}`}>
      {content}
    </Link>
  );
}

function SelectedWork() {
  return (
    <section className="mt-14 w-full">
      <h2 className={sectionHeadingStyles}>Selected work</h2>
      <p className="mt-6">
        A few things I have helped build across clinical software,
        documentation, and developer tooling.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4">
        {workItems.map((work) => (
          <WorkLink key={work.title} work={work} />
        ))}
      </div>
    </section>
  );
}

function Latest() {
  return (
    <nav aria-label="Latest" className="mt-14 w-full">
      <h2 className={sectionHeadingStyles}>Latest</h2>
      <div className="mt-6 divide-y divide-gray-200 border-y border-gray-200 dark:divide-slate-700 dark:border-slate-700">
        {latestItems.map((item) => (
          <Link
            key={`${item.kind}-${item.title}`}
            href={item.href}
            className={`group grid gap-2 py-4 no-underline transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/70 sm:grid-cols-[6rem_1fr] sm:gap-4 sm:px-4 ${focusStyles}`}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              {item.kind}
            </span>
            <span>
              <span className={`inline-flex ${linkedTitleStyles}`}>
                {item.title}
                <ExternalLinkIcon />
              </span>
              {item.excerpt && (
                <span className="mt-1 block text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {item.excerpt}
                </span>
              )}
            </span>
          </Link>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
        Archive:{" "}
        <Link className={linkStyles} href="/notes">
          notes
        </Link>
        ,{" "}
        <Link className={linkStyles} href="/bookmarks">
          bookmarks
        </Link>
        ,{" "}
        <Link className={linkStyles} href="/reading">
          reading
        </Link>
        ,{" "}
        <Link className={linkStyles} href="/uses">
          uses
        </Link>
        .
      </p>
    </nav>
  );
}

function Connect() {
  return (
    <section className="mt-16 w-full border-t border-gray-200 pt-10 dark:border-slate-700">
      <h2 className={sectionHeadingStyles}>Connect</h2>
      <p className="mt-8 max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-950 dark:text-slate-100">
        If you&apos;re in Eldoret, let&apos;s go for a walk, coffee, or a
        casual five-a-side.
      </p>
      <p className="mt-6">
        Email is best for frontend systems, health software, docs work, or
        open-source collaboration:{" "}
        <ExternalLink href="mailto:kigen.work@gmail.com">
          <span>kigen.work@gmail.com</span>
        </ExternalLink>
        .
      </p>
    </section>
  );
}
