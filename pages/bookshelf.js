import Link from "next/link";
import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";

export default function BookShelf() {
  return (
    <Container title="Dennis Kigen - Bookshelf">
      <article className="flex w-full flex-col items-start justify-center">
        <h1 className="font-medium text-neutral-600 dark:text-neutral-400">
          Bookshelf
        </h1>
        <p className="mt-8">
          Here's the books I'm currently reading for the first time or
          re-reading.
        </p>
        <p className="mt-8">
          A few of the links below are affiliate links which means I get paid or
          rewarded in some way if you use them to purchase.
        </p>
        <div className="mt-6 space-y-10">
          <ul className="mt-4 list-none space-y-6">
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/0425284646/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0425284646&linkCode=as2&tag=denniskigen-20&linkId=f27fa4c2e30a4647b001d8c7192426f7"
                styles="underline"
              >
                Skin in the Game
              </ExternalLink>{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                by Nassim Taleb
              </span>
            </li>
            <li className="space-y-2">
              <ExternalLink href="https://amzn.to/3C78HyH" styles="underline">
                Starting Strength
              </ExternalLink>{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                by Mark Rippetoe
              </span>
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/0804139296/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0804139296&linkCode=as2&tag=denniskigen-20&linkId=cd7315b6f19fe3b724c063b163ce4928"
                styles="underline"
              >
                Zero to One
              </ExternalLink>{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                by Peter Thiel
              </span>
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/0812979680/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0812979680&linkCode=as2&tag=denniskigen-20&linkId=fee33df45819f09620b202c63ae694a9"
                styles="underline"
              >
                Antifragile: Things That Gain from Disorder
              </ExternalLink>{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                by Nassim Taleb
              </span>
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/0812982401/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0812982401&linkCode=as2&tag=denniskigen-20&linkId=a6cdad8c1676d76ce685af8f2ed368cb"
                styles="underline"
              >
                The Bed of Procrustes: Philosophical and Practical Aphorisms
              </ExternalLink>{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                by Nassim Taleb
              </span>
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/B07D23CFGR/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07D23CFGR&linkCode=as2&tag=denniskigen-20&linkId=59ec32e014dd475784ddb161f084f61f"
                styles="underline"
              >
                Atomic Habits
              </ExternalLink>{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                by James Clear
              </span>
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/076117897X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=076117897X&linkCode=as2&tag=denniskigen-20&linkId=20581caec9c463184d3d8c5f831bf754"
                styles="underline"
              >
                Show Your Work
              </ExternalLink>{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                by Austin Kleon
              </span>
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/B01HSMRWNU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01HSMRWNU&linkCode=as2&tag=denniskigen-20&linkId=3afee6b76b5fe59f399262fe1c2b8964"
                styles="underline"
              >
                Tools of Titans
              </ExternalLink>{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                by Tim Ferriss
              </span>
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/1544514212/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1544514212&linkCode=as2&tag=denniskigen-20&linkId=af6535e8677ac24c2bc925c75a4a59"
                styles="underline"
              >
                The Almanack of Naval Ravikant
              </ExternalLink>{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                by Eric Jorgenson
              </span>
            </li>
            <li className="space-y-2">
              <ExternalLink href="https://sive.rs/n" styles="underline">
                Hell Yeah or No
              </ExternalLink>{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                by Derek Sivers
              </span>
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/B00X47ZVXM/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=denniskigen-20&creative=9325&linkCode=as2&creativeASIN=B00X47ZVXM&linkId=37183228c299d307b0afb875feb3d051"
                styles="underline"
              >
                Deep Work
              </ExternalLink>{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                by Cal Newport
              </span>
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/1430210788/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=denniskigen-20&creative=9325&linkCode=as2&creativeASIN=1430210788&linkId=ac88db153a6282d9c1df7e8327ead232"
                styles="underline"
              >
                Founders at Work
              </ExternalLink>{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                by Jessica Livingston
              </span>
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/1430210788/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=denniskigen-20&creative=9325&linkCode=as2&creativeASIN=1430210788&linkId=ac88db153a6282d9c1df7e8327ead232"
                styles="underline"
              >
                Hackers and Painters
              </ExternalLink>{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                by Paul Graham
              </span>
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/0857197681/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=denniskigen-20&creative=9325&linkCode=as2&creativeASIN=0857197681&linkId=3fe17267fdf269ab0f7c8310aa7bb5b6"
                styles="underline"
              >
                The Psychology of Money
              </ExternalLink>{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                by Morgan Housel
              </span>
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.learninpublic.org/"
                styles="underline"
              >
                The Coding Career Handbook
              </ExternalLink>{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                by Shawn 'Swyx' Wang
              </span>
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/0578675862/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=denniskigen-20&creative=9325&linkCode=as2&creativeASIN=0578675862&linkId=b44d7d7e2835752557898a66ce407578"
                styles="underline"
              >
                Working in Public
              </ExternalLink>{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                by Nadia Eghbal
              </span>
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/0812968255/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=denniskigen-20&creative=9325&linkCode=as2&creativeASIN=0812968255&linkId=7f0b13a6e5a19f6b2c3bafafc7774fe7"
                styles="underline"
              >
                Meditations
              </ExternalLink>{" "}
              <span className="text-neutral-600 dark:text-neutral-400">
                by Marcus Aurelius
              </span>
            </li>
          </ul>
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
          <Link href="/">
            <a className="underline underline-offset-4 decoration-zinc-500 hover:decoration-zinc-200">
              Return home
            </a>
          </Link>
        </div>
      </article>
    </Container>
  );
}
