import Link from "next/link";
import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";

export default function Uses() {
  return (
    <Container title="Dennis Kigen - Uses">
      <article className="flex w-full flex-col items-start justify-center">
        <h1 className="text-2xl font-bold">Uses</h1>
        <p className="mt-8">
          This page covers the different tools I use for my work.
        </p>
        <p className="mt-8">
          A few of the links below are affiliate links which means I get paid or
          rewarded in some way if you use them to purchase, but rest assured
          these are all tools and services I actually use.
        </p>
        <div className="mt-8 space-y-10">
          <div>
            <h2 className="text-lg font-bold">Services</h2>
            <ul className="mt-8 list-inside list-disc space-y-3">
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://github.com">GitHub</ExternalLink>
                </span>
                <span>
                  {" "}
                  - Where I host my code. I also run CI/CD pipelines via GitHub
                  Actions.
                </span>
              </li>
              <li className="space-y-2">
                <span className="font-medium">
                  <ExternalLink href="https://vercel.com">Vercel</ExternalLink>
                </span>
                <span>
                  {" "}
                  - The fastest frontend platform for deploying software.
                  Phenomenal DX.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Tech</h2>
            <ul className="mt-8 list-inside list-disc space-y-3">
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://beta.reactjs.org/">
                    React
                  </ExternalLink>
                </span>
                <span>
                  {" "}
                  - The most popular frontend framework in the world.
                </span>
              </li>
              <li className="space-y-2">
                <span className="font-medium">
                  <ExternalLink href="https://typescriptlang.org">
                    TypeScript
                  </ExternalLink>
                </span>
                <span>
                  {" "}
                  - Type-safety for JavaScript. I use it for almost all my
                  projects.
                </span>
              </li>
              <li className="space-y-2">
                <span className="font-medium">
                  <ExternalLink href="https://testing-library.com">
                    Testing Library
                  </ExternalLink>
                </span>
                <span>
                  {" "}
                  - Testing utilities that encourage good testing practices.
                </span>
              </li>
              <li className="space-y-2">
                <span className="font-medium">
                  <ExternalLink href="https://prettier.io/">
                    Prettier
                  </ExternalLink>
                </span>
                <span> - Automatically format your code. A must-have.</span>
              </li>
              <li className="space-y-2">
                <span className="font-medium">
                  <ExternalLink href="https://jestjs.io">Jest</ExternalLink>
                </span>
                <span> - Brilliant testing framework</span>
              </li>
              <li className="space-y-2">
                <span className="font-medium">
                  <ExternalLink href="https://tailwindcss.com">
                    TailwindCSS
                  </ExternalLink>
                </span>
                <span> - The defacto API for styling. Great DX.</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Editor</h2>
            <ul className="mt-8 list-inside list-disc space-y-3">
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://code.visualstudio.com">
                    Visual Studio Code
                  </ExternalLink>
                </span>
                <span>
                  {" "}
                  - Find all my VS Code settings{" "}
                  <ExternalLink href="https://gist.github.com/denniskigen/ff67d014e8f7150bf5de4df5518ef696">
                    here
                  </ExternalLink>
                  .
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://aka.ms/nightowl">
                    Night Owl (No Italics) theme
                  </ExternalLink>
                </span>
                <span> - by Sarah Drasner</span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://philpl.gumroad.com/l/dank-mono">
                    Dank Mono font
                  </ExternalLink>
                  <span> - by Phil Plückthun</span>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Browser extensions</h2>
            <ul className="mt-8 list-inside list-disc space-y-3">
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://1password.com">
                    1Password extension
                  </ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://grammarly.com">
                    Grammarly
                  </ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://www.joinhoney.com">
                    Honey
                  </ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp?hl=en">
                    OctoLinker
                  </ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en">
                    React Developer Tools
                  </ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://swr-devtools.vercel.app">
                    SWR Devtools
                  </ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://ublockorigin.com/">
                    uBlock Origin
                  </ExternalLink>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Desktop apps</h2>
            <ul className="mt-8 list-inside list-disc space-y-3">
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://1password.com">
                    1Password
                  </ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://brave.com">
                    Brave Browser
                  </ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://fig.io">Fig</ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://figma.com">Figma</ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://grammarly.com">
                    Grammarly
                  </ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://getkap.co">Kap</ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://magnet.crowdcafe.com/">
                    Magnet
                  </ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://notion.so">Notion</ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://raycast.com">
                    Raycast
                  </ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://github.com">Slack</ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://spotify.com">
                    Spotify
                  </ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://zeplin.io">Zeplin</ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://zoom.us">Zoom</ExternalLink>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Hardware</h2>
            <ul className="mt-8 list-inside list-disc space-y-3">
              <li>
                <span className="font-medium">Basic wood desk</span>
              </li>
              <li>
                <span className="font-medium">Ergonomic chair</span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://www.apple.com/shop/buy-mac/macbook-pro/14-inch">
                    14" MacBook Pro (2021)
                  </ExternalLink>
                  <span> - 10 Core M1 Pro / 16 GB RAM / 512 GB SSD</span>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://www.amazon.com/gp/product/B07PX8JMJV/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07PX8JMJV&linkCode=as2&tag=denniskigen-20&linkId=cc60a0f2b8ebcc9291f0b8a27840f34a">
                    LG 27UL550-W 27 Inch 4K UHD IPS LED HDR Monitor
                  </ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://www.amazon.com/gp/product/B01NABDNPH/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01NABDNPH&linkCode=as2&tag=denniskigen-20&linkId=a1c85b07bdf64ecdd74d82029d602169">
                    Apple Magic Keyboard 2
                  </ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://www.amazon.com/Logitech-Master-Advanced-Wireless-Mouse/dp/B07S395RWD">
                    Logitech MX Master 3 Mouse
                  </ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://www.apple.com/airpods-pro/">
                    Apple Airpods Pro
                  </ExternalLink>
                </span>
              </li>
              <li>
                <span className="font-medium">
                  <ExternalLink href="https://www.amazon.com/Apple-iPhone-128GB-Pacific-Blue/dp/B08PMYLKVF">
                    iPhone 12 Pro
                  </ExternalLink>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mt-12">
          <svg
            viewBox="0 0 3 6"
            class="mr-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300"
          >
            <path
              d="M3 0L0 3L3 6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <Link
            className="text-slate-700 font-semibold flex items-center dark:text-slate-200"
            href="/"
          >
            Return home
          </Link>
        </div>
      </article>
    </Container>
  );
}
