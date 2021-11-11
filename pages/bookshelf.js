import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";

export default function BookShelf() {
  return (
    <Container title="Dennis Kigen - Bookshelf">
      <article className="flex flex-col justify-center items-start mb-16 w-full dark:text-white">
        <h1 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
          My Bookshelf
        </h1>
        <p className="prose text-gray-700 dark:text-gray-300 mb-3">
          Here's the books I'm currently reading for the first time or
          re-reading.
        </p>
        <p className="prose text-gray-700 dark:text-gray-300 mb-3">
          A few of the links below are affiliate links which means I get paid or
          rewarded in some way if you use them to purchase.
        </p>
        <div className="mt-6 space-y-10 text-gray-700">
          <ul className="mt-4 space-y-6 pl-5 list-disc dark:text-gray-400">
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/0425284646/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0425284646&linkCode=as2&tag=denniskigen-20&linkId=f27fa4c2e30a4647b001d8c7192426f7"
                styles="font-bold underline text-black dark:text-gray-300"
              >
                Skin in the Game
              </ExternalLink>{" "}
              by Nassim Taleb
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://amzn.to/3C78HyH"
                styles="font-bold underline text-black dark:text-gray-300"
              >
                Starting Strength
              </ExternalLink>{" "}
              by Mark Rippetoe
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/0804139296/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0804139296&linkCode=as2&tag=denniskigen-20&linkId=cd7315b6f19fe3b724c063b163ce4928"
                styles="font-bold underline text-black dark:text-gray-300"
              >
                Zero to One
              </ExternalLink>{" "}
              by Peter Thiel
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/0812979680/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0812979680&linkCode=as2&tag=denniskigen-20&linkId=fee33df45819f09620b202c63ae694a9"
                styles="font-bold underline text-black dark:text-gray-300"
              >
                Antifragile: Things That Gain from Disorder
              </ExternalLink>{" "}
              by Nassim Taleb
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/0812982401/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0812982401&linkCode=as2&tag=denniskigen-20&linkId=a6cdad8c1676d76ce685af8f2ed368cb"
                styles="font-bold underline text-black dark:text-gray-300"
              >
                The Bed of Procrustes: Philosophical and Practical Aphorisms
              </ExternalLink>{" "}
              by Nassim Taleb
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/B07D23CFGR/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07D23CFGR&linkCode=as2&tag=denniskigen-20&linkId=59ec32e014dd475784ddb161f084f61f"
                styles="font-bold underline text-black dark:text-gray-300"
              >
                Atomic Habits
              </ExternalLink>{" "}
              by James Clear
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/076117897X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=076117897X&linkCode=as2&tag=denniskigen-20&linkId=20581caec9c463184d3d8c5f831bf754"
                styles="font-bold underline text-black dark:text-gray-300"
              >
                Show Your Work
              </ExternalLink>{" "}
              by Austin Kleon
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/B01HSMRWNU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01HSMRWNU&linkCode=as2&tag=denniskigen-20&linkId=3afee6b76b5fe59f399262fe1c2b8964"
                styles="font-bold underline text-black dark:text-gray-300"
              >
                Tools of Titans
              </ExternalLink>{" "}
              by Tim Ferriss
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/1544514212/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1544514212&linkCode=as2&tag=denniskigen-20&linkId=af6535e8677ac24c2bc925c75a4a59"
                styles="font-bold underline text-black dark:text-gray-300"
              >
                The Almanack of Naval Ravikant
              </ExternalLink>{" "}
              by Eric Jorgenson
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://sive.rs/n"
                styles="font-bold underline text-black dark:text-gray-300"
              >
                Hell Yeah or No
              </ExternalLink>{" "}
              by Derek Sivers
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/B00X47ZVXM/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=denniskigen-20&creative=9325&linkCode=as2&creativeASIN=B00X47ZVXM&linkId=37183228c299d307b0afb875feb3d051"
                styles="font-bold underline text-black dark:text-gray-300"
              >
                Deep Work
              </ExternalLink>{" "}
              by Cal Newport
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/1430210788/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=denniskigen-20&creative=9325&linkCode=as2&creativeASIN=1430210788&linkId=ac88db153a6282d9c1df7e8327ead232"
                styles="font-bold underline text-black dark:text-gray-300"
              >
                Founders at Work
              </ExternalLink>{" "}
              by Jessica Livingston
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/1430210788/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=denniskigen-20&creative=9325&linkCode=as2&creativeASIN=1430210788&linkId=ac88db153a6282d9c1df7e8327ead232"
                styles="font-bold underline text-black dark:text-gray-300"
              >
                Hackers and Painters
              </ExternalLink>{" "}
              by Paul Graham
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/0857197681/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=denniskigen-20&creative=9325&linkCode=as2&creativeASIN=0857197681&linkId=3fe17267fdf269ab0f7c8310aa7bb5b6"
                styles="font-bold underline text-black dark:text-gray-300"
              >
                The Psychology of Money
              </ExternalLink>{" "}
              by Morgan Housel
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.learninpublic.org/"
                styles="font-bold underline text-black dark:text-gray-300"
              >
                The Coding Career Handbook
              </ExternalLink>{" "}
              by Shawn 'Swyx' Wang
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/0578675862/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=denniskigen-20&creative=9325&linkCode=as2&creativeASIN=0578675862&linkId=b44d7d7e2835752557898a66ce407578"
                styles="font-bold underline text-black dark:text-gray-300"
              >
                Working in Public
              </ExternalLink>{" "}
              by Nadia Eghbal
            </li>
            <li className="space-y-2">
              <ExternalLink
                href="https://www.amazon.com/gp/product/0812968255/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=denniskigen-20&creative=9325&linkCode=as2&creativeASIN=0812968255&linkId=7f0b13a6e5a19f6b2c3bafafc7774fe7"
                styles="font-bold underline text-black dark:text-gray-300"
              >
                Meditations
              </ExternalLink>{" "}
              by Marcus Aurelius
            </li>
          </ul>
        </div>
      </article>
    </Container>
  );
}
