import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";

const Section = ({ title, items }) => (
  <div>
    <h2 className="text-lg font-bold">{title}</h2>
    <ul className="mt-8 space-y-3 list-disc list-inside">
      {items.map((item, index) => (
        <li key={index} className="space-y-2">
          <span className="font-medium">
            {item.link ? <ExternalLink href={item.link}>{item.name}</ExternalLink> : item.name}
          </span>
          {item.description && <span> - {item.description}</span>}
        </li>
      ))}
    </ul>
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
          name: "GitHub Dark dimmed theme",
          link: "https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme",
          description: "My default theme for Cursor.",
        },
        {
          name: "Geist Mono font",
          link: "https://vercel.com/font",
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
        },
        {
          name: "1Password extension",
          link: "https://1password.com",
        },
        {
          name: "JSON Viewer",
          link: "https://chromewebstore.google.com/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh",
        },
        {
          name: "OctoLinker",
          link: "https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp?hl=en",
        },
        {
          name: "Perplexity - AI Search",
          link: "https://chromewebstore.google.com/detail/perplexity-ai-search/bnaffjbjpgiagpondjlnneblepbdchol?hl=en",
        },
        {
          name: "React Developer Tools",
          link: "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en",
        },
        {
          name: "React Scan",
          link: "https://react-scan.million.dev",
        },
        {
          name: "Refined GitHub",
          link: "https://chromewebstore.google.com/detail/refined-github/hlepfoohegkhhmjieoechaddaejaokhf",
        },
        {
          name: "SWR Devtools",
          link: "https://swr-devtools.vercel.app",
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
          name: "Arc",
          link: "https://arc.net",
          description: "My default browser",
        },
        {
          name: "Claude 3.5 Sonnet",
          link: "https://claude.ai",
          description: "The best AI model for everything",
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
          name: "Obsidian",
          link: "https://obsidian.md",
          description: "Build your second brain",
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
        },
        {
          name: "Ergonomic chair",
        },
        {
          name: '14" MacBook Pro (2021)',
          link: "https://www.apple.com/shop/buy-mac/macbook-pro/14-inch",
          description: "10 Core M1 Pro / 16 GB RAM / 512 GB SSD",
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
        },
        {
          name: "iPhone 12 Pro",
          link: "https://www.amazon.com/Apple-iPhone-128GB-Pacific-Blue/dp/B08PMYLKVF",
        },
        {
          name: "Moleskine Notebook",
          link: "https://www.moleskine.com/shop/notebooks/",
        },
        {
          name: "Anker 737 Power Bank (PowerCore 24K)",
          link: "https://www.anker.com/products/a1289?variant=41974285041814",
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
          {sections.map((section, index) => (
            <Section key={index} title={section.title} items={section.items} />
          ))}
        </div>
      </article>
    </Container>
  );
}
