import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";
import ExternalLinkIcon from "../components/ExternalLinkIcon";

interface Item {
  name: string;
  link?: string;
  description?: string;
}

interface SectionProps {
  title: string;
  items: Item[];
}

const getSectionId = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const Section = ({ title, items }: SectionProps) => (
  <section id={getSectionId(title)} className="scroll-mt-24">
    <h2 className="text-lg font-bold">{title}</h2>
    <div className="mt-8 space-y-4">
      {items.map((item) => (
        <div key={item.name}>
          <div
            className="font-medium"
            style={{
              fontFamily:
                '"Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif',
            }}
          >
            {item.link ? (
              <ExternalLink
                href={item.link}
                styles="!no-underline text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <span className="flex gap-1 items-center">
                  {item.name}
                  <ExternalLinkIcon />
                </span>
              </ExternalLink>
            ) : (
              item.name
            )}
          </div>
          {item.description && (
            <div className="mt-1 text-base leading-relaxed">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default function Uses() {
  const sections = [
    {
      title: "Services",
      items: [
        {
          name: "GitHub",
          link: "https://github.com",
          description:
            "Where most of my work lands, gets reviewed, and eventually turns into a release.",
        },
        {
          name: "Vercel",
          link: "https://vercel.com",
          description:
            "My default place for small sites and frontend experiments because deployment disappears into the background.",
        },
      ],
    },
    {
      title: "Tech",
      items: [
        {
          name: "React",
          link: "https://beta.reactjs.org/",
          description:
            "Still the UI model I reach for when I want components, state, and product surface area to stay understandable.",
        },
        {
          name: "TypeScript",
          link: "https://typescriptlang.org",
          description:
            "The quiet safety net. It makes refactors calmer and forces useful conversations with future me.",
        },
        {
          name: "Testing Library",
          link: "https://testing-library.com",
          description:
            "Keeps tests closer to what people actually do in the interface.",
        },
        {
          name: "Playwright",
          link: "https://playwright.dev",
          description:
            "My favorite tool for proving that important flows still work after everything compiles.",
        },
        {
          name: "Prettier",
          link: "https://prettier.io/",
          description: "One less thing for humans to negotiate in code review.",
        },
        {
          name: "Jest",
          link: "https://jestjs.io",
          description:
            "Still shows up in a lot of the codebases I care about and know well.",
        },
        {
          name: "TailwindCSS",
          link: "https://tailwindcss.com",
          description:
            "Fast enough for sketching, precise enough for production, and easy to read once the patterns settle.",
        },
        {
          name: "shadcn/ui",
          link: "https://ui.shadcn.com",
          description:
            "Useful when I want solid primitives without adopting a whole design system wholesale.",
        },
      ],
    },
    {
      title: "Editor",
      items: [
        {
          name: "Cursor",
          link: "https://www.cursor.com",
          description:
            "My daily editor right now. Fast enough to stay out of the way, helpful enough to change how I work.",
        },
        {
          name: "Cursor Dark theme",
          link: "https://docs.cursor.com/en/configuration/themes",
          description:
            "Low-contrast enough for long sessions without making the code feel muddy.",
        },
        {
          name: "JetBrains Mono font",
          link: "https://www.jetbrains.com/lp/mono/",
          description:
            "Readable, compact, and familiar. I notice it most when I have to use something else.",
        },
      ],
    },
    {
      title: "Browser extensions",
      items: [
        {
          name: "uBlock Origin",
          link: "https://ublockorigin.com/",
          description: "Keeps the web quiet enough to think.",
        },
        {
          name: "1Password extension",
          link: "https://1password.com",
          description:
            "Password management is not a place where I want personality. I want boring reliability.",
        },
        {
          name: "JSON Viewer",
          link: "https://chromewebstore.google.com/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh",
          description:
            "A small mercy when debugging APIs directly in the browser.",
        },
        {
          name: "OctoLinker",
          link: "https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp?hl=en",
          description:
            "Makes GitHub feel a little more like an editor when I am reading unfamiliar code.",
        },
        {
          name: "Perplexity - AI Search",
          link: "https://chromewebstore.google.com/detail/perplexity-ai-search/bnaffjbjpgiagpondjlnneblepbdchol?hl=en",
          description:
            "Good for getting oriented quickly, especially when I want sources close at hand.",
        },
        {
          name: "React Developer Tools",
          link: "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en",
          description:
            "Still one of the fastest ways to understand what a React tree is really doing.",
        },
        {
          name: "React Scan",
          link: "https://react-scan.million.dev",
          description:
            "Helpful when performance feels off and I want a visual clue before digging deeper.",
        },
        {
          name: "Refined GitHub",
          link: "https://chromewebstore.google.com/detail/refined-github/hlepfoohegkhhmjieoechaddaejaokhf",
          description:
            "A pile of tiny GitHub improvements that I miss immediately on a fresh browser.",
        },
        {
          name: "SWR Devtools",
          link: "https://swr-devtools.vercel.app",
          description: "Useful when cache state starts hiding in the walls.",
        },
      ],
    },
    {
      title: "Desktop apps",
      items: [
        {
          name: "1Password",
          link: "https://1password.com",
          description:
            "The grown-up drawer for secrets, license keys, and all the things I do not want in my head.",
        },
        {
          name: "Comet",
          link: "https://perplexity.ai/comet",
          description:
            "My default browser at the moment, mostly because search and browsing feel closer together.",
        },
        {
          name: "Claude Sonnet 4",
          link: "https://claude.ai",
          description:
            "The model I reach for when I want a careful second mind on writing, code, or messy thinking.",
        },
        {
          name: "Claude Code",
          link: "https://claude.ai/code",
          description:
            "Most useful when I want an agent to hold a codebase in view and work through a change with me.",
        },
        {
          name: "Figma",
          link: "https://figma.com",
          description:
            "Where I go to inspect intent, test layout ideas, and argue gently with spacing.",
        },
        {
          name: "Kap",
          link: "https://getkap.co",
          description:
            "Quick recordings for bug reports, demos, and explaining what words would make slower.",
        },
        {
          name: "Lunar",
          link: "https://lunar.fyi/",
          description:
            "Keeps external monitor brightness from becoming a daily annoyance.",
        },
        {
          name: "Obsidian",
          link: "https://obsidian.md",
          description:
            "A private place for notes that are not ready to become documents.",
        },
        {
          name: "Raycast",
          link: "https://raycast.com",
          description:
            "The launcher, calculator, clipboard, and tiny automation surface I use without thinking.",
        },
        {
          name: "Slack",
          link: "https://slack.com",
          description:
            "Where most open-source coordination and work chatter happens.",
        },
        {
          name: "Spotify",
          link: "https://spotify.com",
          description:
            "Mostly for focus blocks, walks, and the occasional playlist rabbit hole.",
        },
        {
          name: "TablePlus",
          link: "https://tableplus.com",
          description:
            "My default database client when I need to inspect data without making it a ceremony.",
        },
        {
          name: "Warp",
          link: "https://www.warp.dev/",
          description:
            "A terminal that feels tuned for command history, sharing, and long-running work.",
        },
        {
          name: "Zeplin",
          link: "https://zeplin.io",
          description:
            "Useful when a team still works through handoff specs and design assets.",
        },
        {
          name: "Zoom",
          link: "https://zoom.us",
          description:
            "Not glamorous, but dependable enough for distributed work.",
        },
      ],
    },
    {
      title: "Hardware",
      items: [
        {
          name: "Motorized standing desk",
          description:
            "I switch positions when focus starts getting stale. The movement helps.",
        },
        {
          name: "Ergonomic chair",
          description:
            "A boring investment that pays rent every day I sit down to work.",
        },
        {
          name: '14" MacBook Pro (2024)',
          link: "https://www.apple.com/macbook-pro/",
          description:
            "14 Core M4 Max / 14 Core GPU / 36 GB RAM / 1 TB SSD. Small enough to carry, strong enough to disappear.",
        },
        {
          name: "LG 27UL550-W and LG 27UN850-W",
          description:
            "Dual 27 inch 4K monitors on an arm. Space for code, browser, docs, and one thing too many.",
          link: "https://www.amazon.com/gp/product/B07PX8JMJV/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07PX8JMJV&linkCode=as2&tag=denniskigen-20&linkId=cc60a0f2b8ebcc9291f0b8a27840f34a",
        },
        {
          name: "Keychron K3 Pro",
          description:
            "Low-profile enough for daily use, tactile enough to make typing feel deliberate.",
          link: "https://www.keychron.com/products/keychron-k3-pro-qmk-via-wireless-custom-mechanical-keyboard",
        },
        {
          name: "Logitech MX Master 3S",
          description:
            "Comfortable, boringly good, and hard to replace once the shortcuts settle into muscle memory.",
          link: "https://www.amazon.com/Logitech-Master-Advanced-Wireless-Mouse/dp/B07S395RWD",
        },
        {
          name: "Apple Airpods Pro",
          link: "https://www.apple.com/airpods-pro/",
          description:
            "For calls, focus, and softening noisy rooms without making a production of it.",
        },
        {
          name: "iPhone 15 Pro",
          link: "https://www.apple.com/iphone-15-pro/",
          description:
            "Mostly communication, photos, notes, and being reachable without being at the desk.",
        },
        {
          name: "Moleskine Notebook",
          link: "https://www.moleskine.com/shop/notebooks/",
          description:
            "Paper slows my thinking down in a good way, especially for planning and rough sketches.",
        },
        {
          name: "Anker 737 Power Bank (PowerCore 24K)",
          link: "https://www.anker.com/products/a1289?variant=41974285041814",
          description:
            "Travel insurance for devices. Heavy, useful, and usually worth carrying.",
        },
      ],
    },
  ];

  return (
    <Container
      title="Dennis Kigen - Uses"
      description="Tools, services, and gear I use for focused work."
    >
      <article className="flex flex-col justify-center items-start w-full text-balance">
        <h1 className="text-2xl font-bold">Uses</h1>
        <p className="mt-8">
          The tools and objects that currently earn a place in my day. I like
          things that reduce friction, make careful work easier, and quietly get
          out of the way.
        </p>

        <nav
          aria-label="Uses sections"
          className="mt-8 grid w-full grid-cols-2 gap-3 text-sm sm:grid-cols-3"
        >
          {sections.map((section) => (
            <a
              key={section.title}
              href={`#${getSectionId(section.title)}`}
              className="border border-gray-200 px-3 py-2 font-medium no-underline transition-colors text-slate-700 hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800/70 dark:focus-visible:ring-offset-slate-900"
            >
              {section.title}
            </a>
          ))}
        </nav>
        <div className="mt-8 space-y-10">
          {sections.map((section) => (
            <Section
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
      </article>
    </Container>
  );
}
