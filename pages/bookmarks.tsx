import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";
import ExternalLinkIcon from "../components/ExternalLinkIcon";

interface Bookmark {
  title: string;
  url: string;
  category: "Software" | "Work" | "Career" | "Thinking" | "Health";
  note: string;
}

const bookmarks: Bookmark[] = [
  {
    title: "103 Bits of Advice I Wish I Had Known",
    url: "https://kk.org/thetechnium/103-bits-of-advice-i-wish-i-had-known/",
    category: "Thinking",
    note: "A dense little shelf of practical reminders. I return to this when I want common sense with edges.",
  },
  {
    title: "Being Productive",
    url: "https://www.arcana.computer/industry/being-productive",
    category: "Work",
    note: "A useful antidote to performative productivity. Output still has to meet reality.",
  },
  {
    title: "Don't End The Week With Nothing",
    url: "https://training.kalzumeus.com/newsletters/archive/do-not-end-the-week-with-nothing",
    category: "Work",
    note: "A good nudge to leave visible progress behind, even in fuzzy weeks.",
  },
  {
    title: "Don't follow Your Passion, Follow Your Effort",
    url: "https://blogmaverick.com/2012/03/18/dont-follow-your-passion-follow-your-effort/",
    category: "Career",
    note: "A better way to think about passion: watch where effort naturally compounds.",
  },
  {
    title: "Embrace Asynchronous Communication For Remote Work",
    url: "https://about.gitlab.com/company/culture/all-remote/asynchronous/",
    category: "Work",
    note: "Remote work makes more sense when writing, context, and trust are treated as infrastructure.",
  },
  {
    title: "Energy is Passion",
    url: "https://wsparchive.substack.com/p/energy-is-passion-original",
    category: "Thinking",
    note: "A crisp reminder that energy is often a stronger signal than identity.",
  },
  {
    title: "Foundational Health Protocol",
    url: "https://www.bowtiedphys.io/p/foundational-health-protocol",
    category: "Health",
    note: "Useful when I want health basics framed as systems, not vibes.",
  },
  {
    title: "Health Value Tool Stack",
    url: "https://www.bowtiedphys.io/p/btps-health-value-tool-stack",
    category: "Health",
    note: "A practical lens for deciding which health tools are actually worth the attention.",
  },
  {
    title: "123 Health Hacks To Take With You Into 2026",
    url: "https://www.bowtiedphys.io/p/123-health-hacks-to-take-with-you",
    category: "Health",
    note: "A long menu of ideas to sample, not gospel.",
  },
  {
    title: "High Agency",
    url: "https://www.highagency.com/",
    category: "Thinking",
    note: "The kind of page that makes excuses feel expensive.",
  },
  {
    title: "Things I Believe",
    url: "https://leerob.com/beliefs",
    category: "Thinking",
    note: "A compact operating manual for shipping, writing clearly, and staying allergic to career ceilings.",
  },
  {
    title: "How to Do What You Love",
    url: "http://www.paulgraham.com/love.html",
    category: "Career",
    note: "Still one of the better essays on work, ambition, and choosing what to take seriously.",
  },
  {
    title: "How to Get Rich",
    url: "https://nav.al/rich",
    category: "Career",
    note: "Compact enough to revisit and broad enough to keep arguing with.",
  },
  {
    title: "Quality Software",
    url: "https://brianlovin.com/writing/quality-software",
    category: "Software",
    note: "Good taste in product form: polish, care, and the little signs that someone paid attention.",
  },
  {
    title: "Salary Negotiation",
    url: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/",
    category: "Career",
    note: "Clear, practical writing about money conversations people avoid until they need them.",
  },
  {
    title: "What Makes a Great Developer Experience",
    url: "https://leerob.io/blog/developer-experience-examples",
    category: "Software",
    note: "A nice articulation of developer experience as product work, not just docs or tooling.",
  },
  {
    title: "Write Fewer, Longer Tests",
    url: "https://kentcdodds.com/blog/write-fewer-longer-tests",
    category: "Software",
    note: "A testing philosophy that rewards confidence over counting test cases.",
  },
  {
    title: "Writing Resilient Components",
    url: "https://overreacted.io/writing-resilient-components/",
    category: "Software",
    note: "One of those React essays that still ages well because it is about boundaries.",
  },
];

const categories: Bookmark["category"][] = [
  "Software",
  "Work",
  "Career",
  "Thinking",
  "Health",
];

const BookmarkLink = ({ bookmark }: { bookmark: Bookmark }) => {
  return (
    <ExternalLink href={bookmark.url} styles="block !no-underline group">
      <div className="border-b border-gray-200 py-4 transition-colors last:border-0 hover:bg-gray-50 dark:border-slate-700 dark:hover:bg-slate-800/70 sm:px-4">
        <span className="flex items-center gap-1 font-semibold text-blue-700 transition-colors group-hover:text-blue-600 dark:text-blue-300 dark:group-hover:text-blue-400">
          {bookmark.title}
          <ExternalLinkIcon />
        </span>
        <p className="mt-2 text-base leading-relaxed text-slate-700 dark:text-slate-300">
          {bookmark.note}
        </p>
        <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 dark:text-blue-300">
          Open bookmark
          <ExternalLinkIcon className="h-3.5 w-3.5 opacity-70 transition-opacity group-hover:opacity-100" />
        </span>
      </div>
    </ExternalLink>
  );
};

export default function Bookmarks() {
  return (
    <Container
      title="Dennis Kigen - Bookmarks"
      description="Links I keep around for software, work, health, and thinking."
    >
      <article className="flex flex-col justify-center items-start w-full">
        <h1 className="text-2xl font-bold">Bookmarks</h1>
        <p className="mt-8">
          Links I keep around because they changed how I think about software,
          work, health, or agency. More field guide than inbox.
        </p>
        <div className="mt-8 mb-16 w-full space-y-10">
          {categories.map((category) => {
            const categoryBookmarks = bookmarks.filter(
              (bookmark) => bookmark.category === category,
            );

            return (
              <section key={category} className="w-full">
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-200">
                  {category} ({categoryBookmarks.length})
                </h2>
                <div className="mt-4 w-full">
                  {categoryBookmarks.map((bookmark) => (
                    <BookmarkLink key={bookmark.title} bookmark={bookmark} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </article>
    </Container>
  );
}
