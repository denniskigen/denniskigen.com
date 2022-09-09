import Link from "next/link";
import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";

export default function Home() {
  return (
    <Container>
      <main className="flex flex-grow flex-col items-start justify-center">
        <div>
          <h1 className="text-2xl font-semibold">Dennis Kigen</h1>
          <p className="mt-8">
            Frontend Engineer in love with crafting user interfaces.
          </p>
          <svg
            aria-hidden="true"
            width="80"
            height="16"
            viewBox="0 0 432 38"
            className="fill-neutral-600 my-6"
          >
            <path d="M402.74 37.5899C390.193 37.5899 374.767 21.3129 374.111 20.6249C367.068 12.4335 359.943 5.14795 349.463 5.14795C337.975 5.14795 324.479 20.406 324.338 20.558L323.17 21.8313C315.729 29.9329 308.701 37.5893 296.186 37.5893C283.639 37.5893 268.213 21.3123 267.557 20.6243C260.514 12.4329 253.389 5.14734 242.909 5.14734C231.421 5.14734 217.925 20.4053 217.784 20.5573L216.683 21.7175C208.186 30.5847 201.48 37.5885 189.636 37.5885C177.085 37.5885 161.656 21.3115 161.007 20.6235C153.96 12.4321 146.831 5.14655 136.359 5.14655C124.871 5.14655 111.375 20.4045 111.234 20.5565L110.054 21.8417C102.62 29.9394 95.5889 37.5837 83.0769 37.5837C70.5259 37.5837 55.0969 21.3067 54.4479 20.6187C47.401 12.4273 40.2719 5.14175 29.7999 5.14175C19.3699 5.14175 9.86587 10.8722 4.98787 20.0987C4.3824 21.2549 2.94488 21.6964 1.78478 21.087C0.628579 20.4698 0.187069 19.0401 0.800389 17.8839C6.50349 7.10691 17.6124 0.403931 29.7964 0.403931C42.2694 0.403931 50.5504 8.82583 57.9644 17.4469C61.941 21.6774 74.3554 32.8419 83.0734 32.8419C93.5074 32.8419 99.2644 26.5724 106.557 18.6349L107.702 17.3888C108.268 16.7404 122.733 0.404816 136.35 0.404816C148.823 0.404816 157.104 8.82671 164.518 17.4478C168.494 21.6783 180.909 32.8428 189.627 32.8428C199.447 32.8428 204.943 27.1123 213.256 18.4368L214.295 17.3509C214.83 16.7337 229.295 0.401917 242.908 0.401917C255.388 0.401917 263.67 8.82382 271.076 17.4449C275.053 21.6676 287.467 32.8359 296.185 32.8359C306.623 32.8359 312.388 26.5625 319.685 18.6129L320.822 17.3785C321.388 16.7301 335.853 0.394531 349.463 0.394531C361.943 0.394531 370.225 8.81643 377.631 17.4375C381.607 21.6602 394.022 32.8285 402.74 32.8285C412.744 32.8285 422.06 27.4379 427.064 18.7625C427.716 17.6258 429.161 17.2313 430.302 17.8914C431.435 18.5438 431.822 19.993 431.173 21.1258C425.321 31.2898 414.427 37.5908 402.739 37.5908L402.74 37.5899Z"></path>
          </svg>
          <p className="">
            Building the future of open-source electronic medical records
            software for the developing world at{" "}
            <svg
              className="mx-2 inline-flex mb-1 h-4 w-4"
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
              <span className="font-medium">AMPATH</span>
            </ExternalLink>{" "}
            and
            <svg
              className="mx-2 inline-flex mb-1 h-4 w-4"
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
            <ExternalLink href="https://openmrs.org/">
              <span className="font-medium">OpenMRS</span>
            </ExternalLink>
            .
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-lg font-medium text-neutral-600 dark:text-neutral-400">
            Projects
          </h2>
          <section className="mt-4 flex space-x-5 md:space-x-10">
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
            <div className="mt-4 space-y-2 flex-1">
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
          <h2 className="text-lg font-medium text-neutral-600 dark:text-neutral-400">
            Ethos
          </h2>
          <p className="mt-8">
            Focused on <em>learning</em> and <em>building</em>. Relentlessly
            devoted to fine, detailed polish. Deriving joy in novel interface
            experiences and design. Passionate about scaling myself through
            writing clear and inviting documentation.
          </p>
          <p className="mt-4">
            In pursuit of crafting experiences that both delight and inspire
            users. Mindful of my time and attention so that I can produce
            quality work and feel productive.
          </p>
        </div>
        <div className="mt-12">
          <h1 className="text-lg font-medium text-neutral-600 dark:text-neutral-400">
            Present
          </h1>
          <p className="mt-8">
            Building fast, polished software for the web using modern features
            in JavaScript, HTML and CSS. Betting my future on React and Next.js
            for user interfaces. Setting my stall out on Tailwind and
            TypeScript. Experimenting with Vite for tooling and Zustand for
            state management. Loving Nextra for documentation and SWR for data
            fetching. Curious about Svelte and Prisma.
          </p>
          <p className="mt-8">
            <Link href="/bookshelf">
              <a className="underline underline-offset-4 decoration-zinc-500 hover:decoration-zinc-200">
                Reading
              </a>
            </Link>{" "}
            and{" "}
            <Link href="/bookmarks">
              <a className="underline underline-offset-4 decoration-zinc-500 hover:decoration-zinc-200">
                bookmarking
              </a>
            </Link>{" "}
            timeless wisdom from Naval Ravikant, Paul Graham, Swyx, Kent C.
            Dodds, Krishnamurti, Nassim Taleb and more.
          </p>
        </div>
        <div className="mt-12">
          <h1 className="text-lg font-medium text-neutral-600 dark:text-neutral-400">
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
          <p className="mt-8">
            Curious about how I work? Check out my{" "}
            <Link href="/uses">
              <a className="underline underline-offset-4 decoration-zinc-500 hover:decoration-zinc-200">
                uses
              </a>
            </Link>{" "}
            page.
          </p>
        </div>
      </main>
    </Container>
  );
}
