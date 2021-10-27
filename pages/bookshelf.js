import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";

export default function BookShelf() {
  return (
    <Container title="Dennis Kigen - Bookshelf">
      <article className="flex flex-col justify-center items-start mb-16 w-full dark:text-white">
        <h1 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
          My Bookshelf
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          Here's the books I'm currently reading for the first time or
          re-reading.
        </p>
        <div className="mt-6 space-y-10 text-gray-700">
          <ul className="mt-4 space-y-6 pl-5 list-disc dark:text-gray-400">
            <li className="space-y-2">
              <span className="font-bold dark:text-white">
                Skin in the Game
              </span>{" "}
              by Nassim Taleb
            </li>
            <li className="space-y-2">
              <span className="font-bold dark:text-white">Zero to One</span> by
              Peter Thiel
            </li>
            <li className="space-y-2">
              <span className="font-bold dark:text-white">
                Antifragile: Things That Gain from Disorder
              </span>{" "}
              by Nassim Taleb
            </li>
            <li className="space-y-2">
              <span className="font-bold dark:text-white">
                The Bed of Procrustes
              </span>{" "}
              by Nassim Taleb
            </li>
            <li className="space-y-2">
              <span className="font-bold dark:text-white">Atomic Habits</span>{" "}
              by James Clear
            </li>
            <li className="space-y-2">
              <span className="font-bold dark:text-white">Show Your Work</span>{" "}
              by Austin Kleon
            </li>
            <li className="space-y-2">
              <span className="font-bold dark:text-white">Tools of Titans</span>{" "}
              by Tim Ferriss
            </li>
            <li className="space-y-2">
              <span className="font-bold dark:text-white">
                The Almanack of Naval Ravikant
              </span>{" "}
              by Eric Jorgenson
            </li>
            <li className="space-y-2">
              <span className="font-bold dark:text-white">Hell Yeah or No</span>{" "}
              by Derek Sivers
            </li>
            <li className="space-y-2">
              <span className="font-bold dark:text-white">Deep Work</span> by
              Cal Newport
            </li>
            <li className="space-y-2">
              <span className="font-bold dark:text-white">
                Founders at Work
              </span>{" "}
              by Jessica Livingston
            </li>
            <li className="space-y-2">
              <span className="font-bold dark:text-white">
                Hackers and Painters
              </span>{" "}
              by Paul Graham
            </li>
            <li className="space-y-2">
              <span className="font-bold dark:text-white">
                The Psychology of Money
              </span>{" "}
              by Morgan Housel
            </li>
            <li className="space-y-2">
              <span className="font-bold dark:text-white">
                The Coding Career Handbook
              </span>{" "}
              by Shawn 'Swyx' Wang
            </li>
            <li className="space-y-2">
              <span className="font-bold dark:text-white">
                Working in Public
              </span>{" "}
              by Nadia Eghbal
            </li>
            <li className="space-y-2">
              <span className="font-bold dark:text-white">Meditations</span> by
              Marcus Aurelius
            </li>
          </ul>
        </div>
      </article>
    </Container>
  );
}
