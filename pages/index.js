import Link from "next/link";
import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";

export default function Home() {
  return (
    <Container>
      <main className="flex flex-grow flex-col items-start justify-center">
        <div>
          <h1 className="font-medium">Dennis Kigen</h1>
          <p className="mt-8">
            I'm a Frontend Engineer living in Eldoret, Kenya. I'm currently
            building the future of electronic medical records software for the
            developing world at{" "}
            <svg
              className="mx-2 inline-flex mb-1 h-6 w-6"
              width="20"
              height="20"
              clipRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 206 233"
            >
              <path
                transform="matrix(.96533 0 0 1 -26.125 -14.65)"
                d="m217.6 180.46c-6.666-4.186-8.706-12.989-4.529-19.68 4.2-6.681 12.991-8.709 19.672-4.548 6.696 4.2 8.721 12.989 4.56 19.685-4.19 6.672-13.021 8.725-19.703 4.543m13.082-105.33s-5.758 103.5-104.23 172.39c5.013-4.134 71.279-73.305 58.775-85.259-7.929-10.279-33.758-24.929-57.171-32.242 0 0 39.875-3.387 68.296 8.242 4.575-4.337 28.45-37.258 34.329-63.129"
                fill="#54b947"
              />
              <path
                transform="matrix(.96533 0 0 1 -26.125 -14.65)"
                d="m38.514 187.16c6.811-3.985 15.552-1.672 19.529 5.125 3.973 6.814 1.67 15.558-5.126 19.521-6.814 3.987-15.551 1.69-19.529-5.116-3.988-6.8-1.669-15.549 5.126-19.53m87.937 60.35s-97.288-51.667-99.388-175.8c1.329 6.346 26.217 100.78 42.621 95.238 12.808-2.242 37.754-18.304 55.129-35.633 0 0-15.55 36.875-39.05 56.641 1.713 6.067 20.479 42.325 40.688 59.555"
                fill="#71cbd2"
              />
              <path
                transform="matrix(.96533 0 0 1 -26.125 -14.65)"
                d="M129.035 30.128c-.66 7.86-7.584 13.685-15.441 13-7.836-.646-13.674-7.57-12.998-15.421.662-7.872 7.567-13.674 15.421-13.005 7.853.651 13.683 7.571 13.018 15.426M27.063 71.707s97.363-52.792 203.617 3.413c-5.98-2.596-98.138-28.484-103.075-11.875-5.521 11.745-6.784 41.416-2.604 65.57 0 0-21.196-33.925-23.817-64.533-5.942-2.087-48.417.85-74.121 7.425"
                fill="#0055a5"
              />
            </svg>
            <ExternalLink href="https://www.ampathkenya.org/">
              AMPATH
            </ExternalLink>{" "}
            and
            <svg
              className="mx-2 inline-flex mb-1 h-6 w-6"
              height="108.174"
              width="108.126"
              viewBox="0 0 108.174 108.126"
            >
              <path
                d="M29.14 29.497c6.298-6.375 15.029-10.349 24.7-10.41 9.647-.06 18.406 3.787 24.776 10.054l-.12-23.32C71.06 2.05 62.633-.055 53.722.001c-8.916.056-17.36 2.537-24.752 6.404l.17 23.092"
                fill="#f1511b"
              />
              <path
                d="M78.95 78.676c-6.295 6.376-15.022 10.35-24.694 10.41-9.646.06-18.405-3.786-24.78-10.054l.12 23.32a53.897 53.897 0 0 0 24.779 5.821c8.916-.056 17.315-2.265 24.704-6.13l-.128-23.367"
                fill="#eea00c"
              />
              <path
                d="M29.497 79.015c-6.375-6.296-10.35-15.022-10.41-24.695-.06-9.646 3.787-18.405 10.054-24.78l-23.32.12C2.049 37.1-.055 45.524 0 54.44s2.264 17.315 6.131 24.706l23.365-.13"
                fill="#564ca9"
              />
              <path
                d="M78.629 29.14c6.375 6.295 10.35 15.027 10.41 24.7.06 9.645-3.786 18.405-10.055 24.775l23.322-.12c3.772-7.437 5.875-15.864 5.82-24.775-.056-8.917-2.265-17.317-6.131-24.71l-23.366.13"
                fill="#159281"
              />
            </svg>
            <ExternalLink href="https://openmrs.org/">OpenMRS</ExternalLink>.
          </p>
          <p className="mt-8">
            I'm interested in designing and building polished interfaces, UX/DX
            and documentation. I'm open to opportunities that would allow me to
            grow and scale my craft.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="font-medium text-neutral-600 dark:text-neutral-400">
            Projects
          </h2>
          <section className="mt-4 flex space-x-10">
            <div className="mt-4 space-y-2 flex-1">
              <h3>
                <ExternalLink href="https://ampath-forms.vercel.app">
                  <span className="flex items-center">
                    AMPATH Forms{" "}
                    <svg
                      className="ml-1 w-5 h-5 text-neutral-600 dark:text-neutral-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </span>
                </ExternalLink>
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Documenting how to build, test and validate OpenMRS form
                schemas.
              </p>
            </div>
            <div className="mt-4 space-y-2 flex-1">
              <h3>
                <ExternalLink href="https://dev3.openmrs.org/openmrs/spa">
                  <span className="flex items-center">
                    OpenMRS 3.x{" "}
                    <svg
                      className="ml-1 w-5 h-5 text-neutral-600 dark:text-neutral-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </span>
                </ExternalLink>
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Building the new frontend for the world's most popular
                open-source EMR.
              </p>
            </div>
            <div className="mt-4 hidden md:block space-y-2 flex-1">
              <h3>
                <ExternalLink href="https://react-weather.denniskigen.com">
                  <span className="flex items-center">
                    React Weather{" "}
                    <svg
                      className="ml-1 w-5 h-5 text-neutral-600 dark:text-neutral-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </span>
                </ExternalLink>
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Weather that's easy on the eyes.
              </p>
            </div>
          </section>
        </div>
        <div className="mt-12">
          <h1 className="font-medium text-neutral-600 dark:text-neutral-400">
            Now
          </h1>
          <p className="mt-8">
            Focused on <em>learning</em> and <em>building</em>. Mindful of my
            time and attention so that I can produce quality work and feel
            productive.
          </p>
          <p className="mt-8">
            Building fast, polished software for the web using modern features
            in JavaScript, HTML and CSS. Betting my future on React and Next.js
            for user interfaces. Setting my stall out on Tailwind and
            TypeScript. Experimenting with Vite for tooling and Zustand for
            state management. Loving Nextra for documentation and SWR for data
            fetching. Curious about Svelte and Prisma.
          </p>
          <p className="mt-8">
            Enjoying Chillhop when working, and Afrobeats whenever else. Reading{" "}
            <Link href="/bookshelf">
              <a className="underline underline-offset-4 decoration-zinc-500 hover:decoration-zinc-200">
                timeless wisdom
              </a>
            </Link>{" "}
            from Naval Ravikant, Paul Graham, Swyx, Kent C. Dodds, Krishnamurti,
            Nassim Taleb and more .
          </p>
          <p className="mt-8">
            Curious about my{" "}
            <ExternalLink href="https://jaredpalmer.com/blog/sharpen-your-axe">
              tools
            </ExternalLink>{" "}
            ? Check out my{" "}
            <Link href="/uses">
              <a className="underline underline-offset-4 decoration-zinc-500 hover:decoration-zinc-200">
                uses
              </a>
            </Link>{" "}
            page .
          </p>
        </div>
        <div className="mt-12">
          <h1 className="font-medium text-neutral-600 dark:text-neutral-400">
            Connect
          </h1>
          <p className="mt-8">
            If you're in Eldoret, let's go for a walk. Reach me at{" "}
            <ExternalLink href="https://twitter.com/dennisforthewin">
              @dennisforthewin
            </ExternalLink>{" "}
            or{" "}
            <ExternalLink href="mailto:kigen.work@gmail.com">
              kigen.work@gmail.com
            </ExternalLink>
          </p>
        </div>
      </main>
    </Container>
  );
}
