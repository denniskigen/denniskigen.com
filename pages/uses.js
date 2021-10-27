import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";

export default function Uses() {
  return (
    <Container title="Dennis Kigen - Uses">
      <article className="flex flex-col justify-center items-start mb-16 w-full dark:text-white">
        <h1 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
          My Gear
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          This page covers the different tools I use for my work.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          A few of the links below are affiliate links which means I get paid or
          rewarded in some way if you use them to purchase, but rest assured
          these are all tools and services I actually use.
        </p>
        <div className="mt-6 space-y-10 text-gray-700 ">
          <div>
            <h2 className="text-xl text-black font-bold dark:text-white">
              Workstation
            </h2>
            <ul className="mt-4 space-y-6 pl-5 list-disc dark:text-gray-400">
              <li className="space-y-2">
                <p className="font-medium leading-normal">
                  <ExternalLink
                    href="https://www.amazon.com/gp/product/B083Z22L3H/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B083Z22L3H&linkCode=as2&tag=denniskigen-20&linkId=ed7232d0baed4a85880d157f0fb49cbc"
                    styles="underline text-black dark:text-gray-300"
                  >
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
                  <ExternalLink
                    href="https://www.amazon.com/gp/product/B07PX8JMJV/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07PX8JMJV&linkCode=as2&tag=denniskigen-20&linkId=cc60a0f2b8ebcc9291f0b8a27840f34a"
                    styles="underline text-black dark:text-gray-300"
                  >
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
                  <ExternalLink
                    href="https://www.amazon.com/gp/product/B01NABDNPH/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01NABDNPH&linkCode=as2&tag=denniskigen-20&linkId=a1c85b07bdf64ecdd74d82029d602169"
                    styles="underline text-black dark:text-gray-300"
                  >
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
                  <ExternalLink
                    href="https://www.amazon.com/gp/product/B08PL57CBR/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08PL57CBR&linkCode=as2&tag=denniskigen-20&linkId=870a264473e0a5b7c4cea263c0977b9f"
                    styles="underline text-black dark:text-gray-300"
                  >
                    Apple Magic Mouse 2
                  </ExternalLink>
                </p>
                <p>
                  I use my laptop in clamshell mode so a mouse is essential.
                  This does the job reasonably well enough.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-black font-bold dark:text-white">
              Development
            </h2>
            <ul className="mt-4 space-y-6 pl-5 list-disc dark:text-gray-400">
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink
                    href="https://code.visualstudio.com/"
                    styles="underline text-black dark:text-gray-300"
                  >
                    VS Code
                  </ExternalLink>
                </p>
                <p>
                  I love the integrated terminal and the incredible power you
                  can unlock with extensions. You can find all my VS Code
                  settings here.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink
                    href="https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme"
                    styles="underline text-black dark:text-gray-300"
                  >
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
                  <ExternalLink
                    href="https://developer.apple.com/fonts/"
                    styles="underline text-black dark:text-gray-300"
                  >
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
                  <ExternalLink
                    href="https://www.google.com/chrome/"
                    styles="underline text-black dark:text-gray-300"
                  >
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
                  <ExternalLink
                    href="https://octolinker.vercel.app/"
                    styles="underline text-black dark:text-gray-300"
                  >
                    OctoLinker
                  </ExternalLink>
                </p>
                <p>
                  Browser extension that turns keywords like{" "}
                  <span className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-white">
                    include
                  </span>
                  ,{" "}
                  <span className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-white">
                    require
                  </span>
                  , or{" "}
                  <span className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-white">
                    import
                  </span>
                  , into links, essentially enabling you to rapidly navigate
                  through repositories on GitHub.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink
                    href="https://tableplus.com/"
                    styles="underline text-black dark:text-gray-300"
                  >
                    TablePlus
                  </ExternalLink>
                  <a className="underline text-black"></a>
                </p>
                <p>I use this for all my MySQL stuff.</p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink
                    href="https://hyper.is/"
                    styles="underline text-black dark:text-gray-300"
                  >
                    Hyper / zsh
                  </ExternalLink>
                </p>
                <p>
                  I feel pretty productive with this combo. I highly recommend
                  setting up{" "}
                  <ExternalLink
                    href="https://fig.io"
                    styles="text-blue-500 dark:text-gray-300"
                  >
                    fig
                  </ExternalLink>
                  ,{" "}
                  <ExternalLink
                    href="https://ohmyz.sh/"
                    styles="text-blue-500 dark:text-gray-300"
                  >
                    oh my zsh
                  </ExternalLink>
                  , and{" "}
                  <ExternalLink
                    href="https://github.com/zsh-users/zsh-autosuggestions"
                    styles="text-blue-500 dark:text-gray-300"
                  >
                    zsh-autosuggestions
                  </ExternalLink>{" "}
                  to get the most out of this combo. You can find my dotfiles{" "}
                  <ExternalLink
                    href="https://github.com/denniskigen/dotfiles"
                    styles="text-blue-500 dark:text-gray-300"
                  >
                    here
                  </ExternalLink>
                  .
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink
                    href="https://github.com/"
                    styles="underline text-black dark:text-gray-300"
                  >
                    GitHub
                  </ExternalLink>
                </p>
                <p>
                  Industry staple. It works, everyone uses it. It's gotten
                  really good over the last few years. Kudos Microsoft!
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink
                    href="https://vercel.com/"
                    styles="underline text-black dark:text-gray-300"
                  >
                    Vercel
                  </ExternalLink>
                </p>
                <p>
                  Phenomenal developer experience. I was blown away the first
                  time I tried Zeit out and they've been knocking it out of the
                  park ever since.
                  <ExternalLink
                    href="https://nextjs.org/"
                    styles="text-blue-500 dark:text-gray-300"
                  >
                    Next.js
                  </ExternalLink>
                  ,{" "}
                  <ExternalLink
                    href="https://swr.vercel.app/"
                    styles="text-blue-500 dark:text-gray-300"
                  >
                    SWR
                  </ExternalLink>{" "}
                  and Vercel is my holy trinity for most things. Blazing fast
                  from minute one.
                </p>
              </li>
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink
                    href="https://getkap.co/"
                    styles="underline text-black dark:text-gray-300"
                  >
                    Kap
                  </ExternalLink>
                </p>
                <p>
                  Great little screen recording tool. I use this every day to
                  record a GIF or video of my screen.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-black font-bold dark:text-white">
              Design
            </h2>
            <ul className="mt-4 space-y-6 pl-5 list-disc dark:text-gray-400">
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink
                    href="https://www.figma.com/"
                    styles="underline text-black dark:text-gray-300"
                  >
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
                  <ExternalLink
                    href="https://affinity.serif.com/"
                    styles="underline text-black dark:text-gray-300"
                  >
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
                  <ExternalLink
                    href="https://jakearchibald.github.io/svgomg/"
                    styles="underline text-black dark:text-gray-300"
                  >
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
                  <ExternalLink
                    href="https://imageoptim.com/"
                    styles="underline text-black dark:text-gray-300"
                  >
                    ImageOptim
                  </ExternalLink>
                </p>
                <p>
                  Pretty great for optimizing raster images like PNGs and JPEGs.
                  Reduces the file size dramatically with no discernible
                  difference in quality.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-black font-bold dark:text-white">
              Productivity
            </h2>
            <ul className="mt-4 space-y-6 pl-5 list-disc dark:text-gray-400">
              <li className="space-y-2">
                <p className="font-medium">
                  <ExternalLink
                    href="https://www.alfredapp.com/"
                    styles="underline text-black dark:text-gray-300"
                  >
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
                  <ExternalLink
                    href="https://ublockorigin.com/"
                    styles="underline text-black dark:text-gray-300"
                  >
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
                  <ExternalLink
                    href="https://www.notion.so/"
                    styles="underline text-black dark:text-gray-300"
                  >
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
                  <ExternalLink
                    href="https://1password.com/"
                    styles="underline text-black dark:text-gray-300"
                  >
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
                  <ExternalLink
                    href="https://www.grammarly.com"
                    styles="underline text-black dark:text-gray-300"
                  >
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
                  <ExternalLink
                    href="https://apps.apple.com/app/twenttty/id1534796314?mt=12"
                    styles="underline text-black dark:text-gray-300"
                  >
                    Twenttty
                  </ExternalLink>
                </p>
                <p>
                  It's premise is pretty straightforward, it reminds me to look
                  away every 20 minutes at an object that is about 20 feet away
                  for a full 20 seconds. Eye strain begone.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </Container>
  );
}