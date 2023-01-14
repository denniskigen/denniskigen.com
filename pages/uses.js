import Link from "next/link";
import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";

export default function Uses() {
  return (
    <Container title="Dennis Kigen - Uses">
      <article className="flex w-full flex-col items-start justify-center">
        <h1 className="text-2xl font-semibold">Uses</h1>
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
            <h2 className="text-xl font-semibold text-neutral-600 dark:text-neutral-400">
              Hardware
            </h2>
            <ul className="mt-8 list-none space-y-6">
              <li className="space-y-2">
                <p className="font-medium leading-normal">
                  <ExternalLink href="https://www.amazon.com/gp/product/B083Z22L3H/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B083Z22L3H&linkCode=as2&tag=denniskigen-20&linkId=ed7232d0baed4a85880d157f0fb49cbc">
                    15" Macbook Pro, 2.3 GHz 8-Core Intel Core i9 16GB of RAM,
                    Intel UHD Graphics 630 1.5GB (2019)
                  </ExternalLink>
                </p>
                <p>
                  It's no M1 but it's without doubt the most performant laptop
                  I've ever owned. I switched to this after carrying around a
                  13" for a couple years and I'm still amazed how easily I
                  adapted to the additional screen real estate and weight. It's
                  handled everything I've thrown at it with aplomb.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://www.amazon.com/gp/product/B07PX8JMJV/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07PX8JMJV&linkCode=as2&tag=denniskigen-20&linkId=cc60a0f2b8ebcc9291f0b8a27840f34a">
                    LG 27UL550-W 27 Inch 4K UHD IPS LED HDR Monitor
                  </ExternalLink>
                </p>
                <p>
                  I snagged a great deal on this monitor on a Black Friday
                  several moons ago for more than $100 off the list price.
                  Reading and writing code on this monitor is pretty comfortable
                  at 4k resolution. The stand is a bit lacking but not a deal
                  breaker.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://www.amazon.com/gp/product/B01NABDNPH/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01NABDNPH&linkCode=as2&tag=denniskigen-20&linkId=a1c85b07bdf64ecdd74d82029d602169">
                    Apple Magic Keyboard 2
                  </ExternalLink>
                </p>
                <p>
                  Just works. Decent enough travel, holds charge for an age and
                  works perfect with Mac OS.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://www.amazon.com/gp/product/B08PL57CBR/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08PL57CBR&linkCode=as2&tag=denniskigen-20&linkId=870a264473e0a5b7c4cea263c0977b9f">
                    Apple Magic Mouse 2
                  </ExternalLink>
                </p>
                <p>
                  I use my laptop in clamshell mode so a mouse is essential.
                  This does the job reasonably well enough.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://www.amazon.com/gp/product/B07H2DBFQZ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=denniskigen-20&creative=9325&linkCode=as2&creativeASIN=B07H2DBFQZ&linkId=004d2fdee5b27c381a6ab039a2ed4e63">
                    Sony WH-1000XM3 Noise Cancelling Headphones
                  </ExternalLink>
                </p>
                <p>
                  Comfortable, crisp-sounding and incredibly adept at
                  noise-cancelling. One of my all time best purchases.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-neutral-600 dark:text-neutral-400">
              Development
            </h2>
            <ul className="mt-8 list-none space-y-6">
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://code.visualstudio.com/">
                    VS Code
                  </ExternalLink>
                </p>
                <p>
                  I love the integrated terminal and the incredible power you
                  can unlock with extensions. You can find all my VS Code
                  settings{" "}
                  <ExternalLink
                    href="https://gist.github.com/denniskigen/ff67d014e8f7150bf5de4df5518ef696"
                    styles="text-blue-500 dark:text-slate-300"
                  >
                    here.
                  </ExternalLink>
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme">
                    GitHub Dark Theme
                  </ExternalLink>
                </p>
                <p>
                  I've tried a lot of themes but this is the one I keep coming
                  back to.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://developer.apple.com/fonts/">
                    SF Mono
                  </ExternalLink>
                </p>
                <p>
                  Used to love Menlo and Fira Mono but SF Mono is perfect for
                  me.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://www.google.com/chrome/">
                    Chrome
                  </ExternalLink>
                </p>
                <p>
                  I'd like to give Firefox a fair go someday but for now I'm
                  still on Chrome for both development and general browsing.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://octolinker.vercel.app/">
                    OctoLinker
                  </ExternalLink>
                </p>
                <p>
                  Browser extension that turns keywords like{" "}
                  <span className="bg-gray-200 text-slate-500 dark:bg-gray-700">
                    include
                  </span>
                  ,{" "}
                  <span className="bg-gray-200 text-slate-500 dark:bg-gray-700">
                    require
                  </span>
                  , or{" "}
                  <span className="bg-gray-200 text-slate-500 dark:bg-gray-700">
                    import
                  </span>
                  , into links, essentially enabling you to rapidly navigate
                  through repositories on GitHub.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://tableplus.com/">
                    TablePlus
                  </ExternalLink>
                  <a className="text-black underline"></a>
                </p>
                <p>I use this for all my MySQL stuff.</p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://hyper.is/">
                    Hyper / zsh
                  </ExternalLink>
                </p>
                <p>
                  I feel pretty productive with this combo. I highly recommend
                  setting up{" "}
                  <ExternalLink
                    href="https://fig.io"
                    styles="text-blue-500 dark:text-slate-300"
                  >
                    fig
                  </ExternalLink>
                  ,{" "}
                  <ExternalLink
                    href="https://ohmyz.sh/"
                    styles="text-blue-500 dark:text-slate-300"
                  >
                    oh my zsh
                  </ExternalLink>
                  , and{" "}
                  <ExternalLink
                    href="https://github.com/zsh-users/zsh-autosuggestions"
                    styles="text-blue-500 dark:text-slate-300"
                  >
                    zsh-autosuggestions
                  </ExternalLink>{" "}
                  to get the most out of this combo. You can find my dotfiles{" "}
                  <ExternalLink
                    href="https://github.com/denniskigen/dotfiles"
                    styles="text-blue-500 dark:text-slate-300"
                  >
                    here
                  </ExternalLink>
                  .
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://github.com/">GitHub</ExternalLink>
                </p>
                <p>
                  Industry staple. It works, everyone uses it. It's gotten
                  really good over the last few years. Kudos Microsoft!
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://vercel.com/">Vercel</ExternalLink>
                </p>
                <p>
                  Phenomenal developer experience. I was blown away the first
                  time I tried Zeit out and they've been knocking it out of the
                  park ever since.{" "}
                  <ExternalLink
                    href="https://nextjs.org/"
                    styles="text-blue-500 dark:text-slate-300"
                  >
                    Next.js
                  </ExternalLink>
                  ,{" "}
                  <ExternalLink
                    href="https://swr.vercel.app/"
                    styles="text-blue-500 dark:text-slate-300"
                  >
                    SWR
                  </ExternalLink>{" "}
                  and Vercel is my holy trinity for most things. Blazing fast
                  from minute one.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://getkap.co/">Kap</ExternalLink>
                </p>
                <p>
                  Great little screen recording tool. I use this every day to
                  record a GIF or video of my screen.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-neutral-600 dark:text-neutral-400">
              Design
            </h2>
            <ul className="mt-8 list-none space-y-6">
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://www.figma.com/">
                    Figma
                  </ExternalLink>
                </p>
                <p>
                  I've hacked my way around Figma to decent levels of success in
                  the past. It's too good a tool to not learn well so I plan on
                  giving it a real go and learning the ropes at some point.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://affinity.serif.com/">
                    Affinity Designer
                  </ExternalLink>
                </p>
                <p>
                  For someone jaded with Adobe's whole subscription system,
                  Affinity Designer is a pretty good alternative. I use it for
                  all my vector image design needs.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://jakearchibald.github.io/svgomg/">
                    SVGOMG
                  </ExternalLink>
                </p>
                <p>
                  My staple choice for quickly optimizing SVGs. I use SVGs
                  everywhere in my projects and invariably end up using this
                  tool multiple times each week.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://imageoptim.com/">
                    ImageOptim
                  </ExternalLink>
                </p>
                <p>
                  Pretty great for optimizing raster image formats like PNGs and
                  JPEGs. Reduces the file size dramatically with no discernible
                  difference in quality.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-neutral-600 dark:text-neutral-400">
              Productivity
            </h2>
            <ul className="mt-8 list-none space-y-6">
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://www.alfredapp.com/">
                    Alfred
                  </ExternalLink>
                </p>
                <p>
                  First app I install on every Mac. It's so baked into my
                  workflow that I even forget it's there. I use it to launch
                  apps, manage my clipboard, find files, do calculations and a
                  ton more things.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://raycast.com/">
                    Raycast
                  </ExternalLink>
                </p>
                <p>
                  I use Raycast lately a lot more than Alfred. It's got a great
                  ecosystem of extensions and is a great alternative to Alfred.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://ublockorigin.com/">
                    uBlock Origin
                  </ExternalLink>
                </p>
                <p>
                  Efficient general-purpose blocker for Chromium and Firefox. I
                  can't imagine life browsing without this.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://www.notion.so/">
                    Notion
                  </ExternalLink>
                </p>
                <p>
                  Notion is where I build my second brain. It's the blank canvas
                  where I ideate, plan, build and store knowledge. It's an
                  invaluable component of my digital toolkit.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://1password.com/">
                    1Password
                  </ExternalLink>
                </p>
                <p>
                  There's no way back after installing 1Password. It's literally
                  one of those life-changing things.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://www.grammarly.com">
                    Grammarly
                  </ExternalLink>
                </p>
                <p>
                  In an era where we're leveraged by our writing, it's essential
                  to keep your writing clear and devoid of mistakes. Grammarly
                  checks each sentence I put out into the world.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink href="https://apps.apple.com/app/twenttty/id1534796314?mt=12">
                    Twenttty
                  </ExternalLink>
                </p>
                <p>
                  It's premise is pretty straightforward, it reminds me to look
                  away from my screen every 20 minutes at an object that is
                  about 20 feet away for a full 20 seconds. Eye strain begone.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mt-12">
          <svg
            className="mx-1"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <Link
            className="underline underline-offset-4 decoration-zinc-500 hover:decoration-zinc-200"
            href="/"
          >
            Return home
          </Link>
        </div>
      </article>
    </Container>
  );
}
