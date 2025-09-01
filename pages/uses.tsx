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

const Section = ({ title, items }: SectionProps) => (
  <div>
    <h2 className="text-lg font-bold">{title}</h2>
    <div className="mt-8 space-y-4">
      {items.map((item) => (
        <div key={item.name}>
          <div className="font-medium">
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
            <div className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.description}</div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default function Uses() {
  const sections = [
    {
      title: "Services",
      items: [
        {
          name: "GitHub",
          link: "https://github.com",
          description: "Where I host my code. I also run CI/CD pipelines via GitHub Actions.",
        },
        {
          name: "Vercel",
          link: "https://vercel.com",
          description: "The fastest frontend platform for deploying software. Phenomenal DX.",
        },
      ],
    },
    {
      title: "Tech",
      items: [
        {
          name: "React",
          link: "https://beta.reactjs.org/",
          description: "The most popular frontend framework.",
        },
        {
          name: "TypeScript",
          link: "https://typescriptlang.org",
          description: "Type-safety for JavaScript. I use it for almost all my projects.",
        },
        {
          name: "Testing Library",
          link: "https://testing-library.com",
          description: "Testing utilities that encourage good testing practices.",
        },
        {
          name: "Playwright",
          link: "https://playwright.dev",
          description: "End-to-end testing library for web apps.",
        },
        {
          name: "Prettier",
          link: "https://prettier.io/",
          description: "Automatically format your code. A must-have.",
        },
        {
          name: "Jest",
          link: "https://jestjs.io",
          description: "Delightful JavaScript testing framework.",
        },
        {
          name: "TailwindCSS",
          link: "https://tailwindcss.com",
          description: "The defacto API for styling. Great DX.",
        },
        {
          name: "shadcn/ui",
          link: "https://ui.shadcn.com",
          description: "Reusable UI components that you can copy and paste directly into your applications",
        },
      ],
    },
    {
      title: "Editor",
      items: [
        {
          name: "Cursor",
          link: "https://www.cursor.com",
          description: "The best AI code editor.",
        },
        {
          name: "Cursor Dark theme",
          link: "https://docs.cursor.com/en/configuration/themes",
          description: "My default theme for Cursor.",
        },
        {
          name: "JetBrains Mono font",
          link: "https://www.jetbrains.com/lp/mono/",
          description: "My default font for Cursor.",
        },
      ],
    },
    {
      title: "Browser extensions",
      items: [
        {
          name: "uBlock Origin",
          link: "https://ublockorigin.com/",
          description: "The most effective ad blocker that doesn't compromise on performance.",
        },
        {
          name: "1Password extension",
          link: "https://1password.com",
          description: "Secure password manager with browser integration for seamless login.",
        },
        {
          name: "JSON Viewer",
          link: "https://chromewebstore.google.com/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh",
          description: "Pretty-prints JSON responses in the browser for better debugging.",
        },
        {
          name: "OctoLinker",
          link: "https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp?hl=en",
          description: "Makes code references in GitHub clickable for better navigation.",
        },
        {
          name: "Perplexity - AI Search",
          link: "https://chromewebstore.google.com/detail/perplexity-ai-search/bnaffjbjpgiagpondjlnneblepbdchol?hl=en",
          description: "AI-powered search that provides comprehensive answers with sources.",
        },
        {
          name: "React Developer Tools",
          link: "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en",
          description: "Essential debugging tool for React applications and components.",
        },
        {
          name: "React Scan",
          link: "https://react-scan.million.dev",
          description: "Identifies unnecessary re-renders in React applications for performance optimization.",
        },
        {
          name: "Refined GitHub",
          link: "https://chromewebstore.google.com/detail/refined-github/hlepfoohegkhhmjieoechaddaejaokhf",
          description: "Adds useful features and improvements to the GitHub interface.",
        },
        {
          name: "SWR Devtools",
          link: "https://swr-devtools.vercel.app",
          description: "Debug and monitor SWR data fetching in React applications.",
        },
      ],
    },
    {
      title: "Desktop apps",
      items: [
        {
          name: "1Password",
          link: "https://1password.com",
          description: "Your last password manager",
        },
        {
          name: "Comet",
          link: "https://perplexity.ai/comet",
          description: "My default browser",
        },
        {
          name: "Claude Sonnet 4",
          link: "https://claude.ai",
          description: "The best AI model for everything",
        },
        {
          name: "Claude Code",
          link: "https://claude.ai/code",
          description: "The best AI model for coding",
        },
        {
          name: "Figma",
          link: "https://figma.com",
          description: "The defacto tool for designing UIs",
        },
        {
          name: "Kap",
          link: "https://getkap.co",
          description: "An open-source screen recorder built with web technology",
        },
        {
          name: "Lunar",
          link: "https://lunar.fyi/",
          description: "Control multiple monitors",
        },
        {
          name: "Raycast",
          link: "https://raycast.com",
          description: "Command center for your Mac",
        },
        {
          name: "Slack",
          link: "https://github.com",
          description: "Comms for remote teams",
        },
        {
          name: "Spotify",
          link: "https://spotify.com",
          description: "Music for everything",
        },
        {
          name: "TablePlus",
          link: "https://tableplus.com",
          description: "My default database client",
        },
        {
          name: "Warp",
          link: "https://www.warp.dev/",
          description: "Reimagined terminal",
        },
        {
          name: "Zeplin",
          link: "https://zeplin.io",
          description: "Design handoff",
        },
        {
          name: "Zoom",
          link: "https://zoom.us",
          description: "Video conferencing",
        },
      ],
    },
    {
      title: "Hardware",
      items: [
        {
          name: "Motorized standing desk",
          description: "Adjustable height desk for better posture and movement throughout the day.",
        },
        {
          name: "Ergonomic chair",
          description: "Supportive seating designed for long hours of focused work.",
        },
        {
          name: '14" MacBook Pro (2024)',
          link: "https://www.apple.com/macbook-pro/",
          description: "14 Core M4 Max / 14 Core GPU / 36 GB RAM / 1 TB SSD",
        },
        {
          name: "LG 27UL550-W and LG 27UN850-W",
          description: "Dual 27 Inch 4K monitor setup with Vivo dual monitor arm mount",
          link: "https://www.amazon.com/gp/product/B07PX8JMJV/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07PX8JMJV&linkCode=as2&tag=denniskigen-20&linkId=cc60a0f2b8ebcc9291f0b8a27840f34a",
        },
        {
          name: "Keychron K3 Pro",
          description: "QMK/VIA wireless custom mechanical keyboard with Gateron Brown switches",
          link: "https://www.keychron.com/products/keychron-k3-pro-qmk-via-wireless-custom-mechanical-keyboard",
        },
        {
          name: "Logitech MX Master 3S",
          description: "The best wireless mouse",
          link: "https://www.amazon.com/Logitech-Master-Advanced-Wireless-Mouse/dp/B07S395RWD",
        },
        {
          name: "Apple Airpods Pro",
          link: "https://www.apple.com/airpods-pro/",
          description: "Wireless earbuds with active noise cancellation for focused work and calls.",
        },
        {
          name: "iPhone 15 Pro",
          link: "https://www.apple.com/iphone-15-pro/",
          description: "Primary mobile device for communication and on-the-go productivity.",
        },
        {
          name: "Moleskine Notebook",
          link: "https://www.moleskine.com/shop/notebooks/",
          description: "Physical notebook for sketching ideas, taking notes, and planning.",
        },
        {
          name: "Anker 737 Power Bank (PowerCore 24K)",
          link: "https://www.anker.com/products/a1289?variant=41974285041814",
          description: "High-capacity portable charger for extended mobile device usage.",
        },
      ],
    },
  ];

  return (
    <Container title="Dennis Kigen - Uses">
      <article className="flex flex-col justify-center items-start w-full text-balance">
        <h1 className="text-2xl font-bold">Uses</h1>
        <p className="mt-8">This page covers the different tools I use for my work.</p>
        <div className="mt-8 space-y-10">
          {sections.map((section) => (
            <Section key={section.title} title={section.title} items={section.items} />
          ))}
        </div>
      </article>
    </Container>
  );
}
