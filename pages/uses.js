import Link from "next/link";
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
          description: "The most popular frontend framework in the world.",
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
          name: "Visual Studio Code",
          link: "https://gist.github.com/denniskigen/ff67d014e8f7150bf5de4df5518ef696",
          description: "Follow the link to see my configuration settings.",
        },
        {
          name: "Night Owl (No Italics) theme",
          link: "https://aka.ms/nightowl",
          description: "by Sarah Drasner.",
        },
        {
          name: "SF Mono font",
        },
      ],
    },
    {
      title: "Browser extensions",
      items: [
        {
          name: "1Password extension",
          link: "https://1password.com",
        },
        {
          name: "Minimal Theme for X",
          link: "https://addons.mozilla.org/en-US/firefox/addon/minimaltwitter/",
        },
        {
          name: "Grammarly",
          link: "https://grammarly.com",
        },
        {
          name: "Honey",
          link: "https://www.joinhoney.com",
        },
        {
          name: "OctoLinker",
          link: "https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp?hl=en",
        },
        {
          name: "React Developer Tools",
          link: "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en",
        },
        {
          name: "SWR Devtools",
          link: "https://swr-devtools.vercel.app",
        },
        {
          name: "uBlock Origin",
          link: "https://ublockorigin.com/",
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
          name: "Firefox Developer Edition",
          link: "https://www.mozilla.org/en-US/firefox/developer/",
          description: "My default browser",
        },
        {
          name: "Fig",
          link: "https://fig.io",
          description: "Terminal for developers",
        },
        {
          name: "Figma",
          link: "https://figma.com",
          description: "The defacto tool for designing UIs",
        },
        {
          name: "Grammarly",
          link: "https://grammarly.com",
          description: "Checks your spelling and grammar as you type",
        },
        {
          name: "Kap",
          link: "https://getkap.co",
          description: "An open-source screen recorder built with web technology",
        },
        {
          name: "Lunar",
          link: "https://lunar.fyi/",
          description: "The defacto app for controlling monitors",
        },
        {
          name: "Rectangle",
          link: "https://rectangleapp.com/",
          description: "Move and resize windows in macOS using keyboard shortcuts or snap areas",
        },
        {
          name: "Notion",
          link: "https://notion.so",
          description: "All-in-one workspace",
        },
        {
          name: "Raycast",
          link: "https://raycast.com",
          description: "Productivity app for macOS",
        },
        {
          name: "Slack",
          link: "https://github.com",
          description: "Comms for remote teams",
        },
        {
          name: "Spotify",
          link: "https://spotify.com",
          description: "Music for coding",
        },
        {
          name: "Warp",
          link: "https://www.warp.dev/",
          description: "Reimaged terminal",
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
          name: "Keychron K3",
          description: "Mechanical keyboard with Gateron Brown switches",
          link: "https://www.keychron.com/products/keychron-k3-wireless-mechanical-keyboard?variant=39319147074686",
        },
        {
          name: "Logitech MX Master 3S",
          description: "Great wireless mouse",
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
      ],
    },
  ];

  return (
    <Container title="Dennis Kigen - Uses">
      <article className="flex flex-col items-start justify-center w-full text-balance">
        <h1 className="text-2xl font-bold">Uses</h1>
        <p className="mt-8">This page covers the different tools I use for my work.</p>
        <p className="mt-8">
          A few of the links below are affiliate links which means I get paid or rewarded in some way if you use them to
          purchase, but rest assured these are all tools and services I actually use.
        </p>
        <div className="mt-8 space-y-10">
          {sections.map((section, index) => (
            <Section key={index} title={section.title} items={section.items} />
          ))}
        </div>
      </article>
    </Container>
  );
}
