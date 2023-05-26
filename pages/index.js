import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";
import avatar from "../public/dennis-avatar.png";

export default function Home() {
  return (
    <Container>
      <main className="flex flex-grow flex-col items-start justify-center">
        <About />
        <Projects />
        <Ethos />
        <Current />
        <Connect />
      </main>
    </Container>
  );
}

function About() {
  return (
    <div>
      <div className="flex space-x-6 items-center">
        <Image
          alt="Dennis' avatar"
          className="h-[96px] w-[96px] object-cover rounded-full shadow-lg p-px"
          src={avatar}
          height={128}
          width={128}
        />
        <div className="flex-col ml-2 align-middle dark:text-slate-200 font-medium space-y-1">
          <h1 className="text-2xl font-bold">Dennis Kigen</h1>
          <h2 className="hidden sm:inline dark:text-slate-300 text-slate-700 text-sm">
            Software Craftsman. Frontend Engineer
          </h2>
          <h2 className="inline sm:hidden dark:text-slate-300 text-slate-700 text-sm">
            Frontend Engineer
          </h2>
        </div>
      </div>

      <svg
        aria-hidden="true"
        width="80"
        height="16"
        viewBox="0 0 432 38"
        className="fill-sky-400 my-12"
      >
        <path d="M402.74 37.5899C390.193 37.5899 374.767 21.3129 374.111 20.6249C367.068 12.4335 359.943 5.14795 349.463 5.14795C337.975 5.14795 324.479 20.406 324.338 20.558L323.17 21.8313C315.729 29.9329 308.701 37.5893 296.186 37.5893C283.639 37.5893 268.213 21.3123 267.557 20.6243C260.514 12.4329 253.389 5.14734 242.909 5.14734C231.421 5.14734 217.925 20.4053 217.784 20.5573L216.683 21.7175C208.186 30.5847 201.48 37.5885 189.636 37.5885C177.085 37.5885 161.656 21.3115 161.007 20.6235C153.96 12.4321 146.831 5.14655 136.359 5.14655C124.871 5.14655 111.375 20.4045 111.234 20.5565L110.054 21.8417C102.62 29.9394 95.5889 37.5837 83.0769 37.5837C70.5259 37.5837 55.0969 21.3067 54.4479 20.6187C47.401 12.4273 40.2719 5.14175 29.7999 5.14175C19.3699 5.14175 9.86587 10.8722 4.98787 20.0987C4.3824 21.2549 2.94488 21.6964 1.78478 21.087C0.628579 20.4698 0.187069 19.0401 0.800389 17.8839C6.50349 7.10691 17.6124 0.403931 29.7964 0.403931C42.2694 0.403931 50.5504 8.82583 57.9644 17.4469C61.941 21.6774 74.3554 32.8419 83.0734 32.8419C93.5074 32.8419 99.2644 26.5724 106.557 18.6349L107.702 17.3888C108.268 16.7404 122.733 0.404816 136.35 0.404816C148.823 0.404816 157.104 8.82671 164.518 17.4478C168.494 21.6783 180.909 32.8428 189.627 32.8428C199.447 32.8428 204.943 27.1123 213.256 18.4368L214.295 17.3509C214.83 16.7337 229.295 0.401917 242.908 0.401917C255.388 0.401917 263.67 8.82382 271.076 17.4449C275.053 21.6676 287.467 32.8359 296.185 32.8359C306.623 32.8359 312.388 26.5625 319.685 18.6129L320.822 17.3785C321.388 16.7301 335.853 0.394531 349.463 0.394531C361.943 0.394531 370.225 8.81643 377.631 17.4375C381.607 21.6602 394.022 32.8285 402.74 32.8285C412.744 32.8285 422.06 27.4379 427.064 18.7625C427.716 17.6258 429.161 17.2313 430.302 17.8914C431.435 18.5438 431.822 19.993 431.173 21.1258C425.321 31.2898 414.427 37.5908 402.739 37.5908L402.74 37.5899Z"></path>
      </svg>

      <p className="my-8">
        Frontend Engineer crafting user interfaces. Interested in crafting
        magical web experiences, DX, documentation, and shipping maintainable
        code.
      </p>

      <p className="my-8">
        Currently building the future of open-source electronic medical records
        software for the developing world at{" "}
        <ExternalLink href="https://openmrs.org/">
          <span>OpenMRS</span>
        </ExternalLink>
        .
      </p>
      <p className="mt-8">
        Previously, I helped build{" "}
        <ExternalLink href="https://www.ampathkenya.org/pointofcare">
          <span>AMPATH Point of Care</span>
        </ExternalLink>{" "}
        at{" "}
        <ExternalLink href="https://www.ampathkenya.org/">
          <span>AMPATH</span>
        </ExternalLink>
        .
      </p>
    </div>
  );
}

function Projects() {
  return (
    <div className="mt-12">
      <h2 className="text-lg text-slate-900 dark:text-slate-200 font-bold">
        Projects
      </h2>
      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-8">
        <div className="flex-col h-full relative cursor-default">
          <h3>
            <ExternalLink href="https://dev3.openmrs.org/openmrs/spa">
              <span className="flex items-center">
                OpenMRS 3.x{" "}
                <svg
                  viewBox="0 0 3 6"
                  className="ml-3 w-1.5 h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </ExternalLink>
          </h3>
          <p className="text-slate-900 dark:text-slate-200 mt-2.5">
            Building the new frontend for the world's most popular open-source
            EMR.
          </p>
        </div>
        <div className="flex-col h-full relative cursor-default">
          <h3>
            <ExternalLink href="https://github.com/openmrs/openmrs-esm-form-builder">
              <span className="flex items-center">
                O3 Form Builder{" "}
                <svg
                  viewBox="0 0 3 6"
                  className="ml-3 h-1.5 w-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </ExternalLink>
            <p className="text-slate-900 dark:text-slate-200 mt-2.5">
              Build, test and publish OpenMRS forms, without the tears.
            </p>
          </h3>
        </div>
        <div className="flex-col h-full relative cursor-default">
          <h3>
            <ExternalLink href="https://ampath-forms.vercel.app">
              <span className="flex items-center">
                AMPATH Forms{" "}
                <svg
                  viewBox="0 0 3 6"
                  className="ml-3 h-1.5 w-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </ExternalLink>
          </h3>
          <p className="text-slate-900 dark:text-slate-200 mt-2.5">
            Documenting how to build, test and validate form schemas for
            OpenMRS.
          </p>
        </div>
        <div className="flex-col h-full relative cursor-default">
          <h3>
            <ExternalLink href="https://react-weather.denniskigen.com">
              <span className="flex items-center">
                React Weather{" "}
                <svg
                  viewBox="0 0 3 6"
                  className="ml-3 h-1.5 w-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </ExternalLink>
          </h3>
          <p className="text-slate-900 dark:text-slate-200 mt-2.5">
            Weather that's easy on the eyes.
          </p>
        </div>
      </section>
    </div>
  );
}

function Ethos() {
  return (
    <div className="mt-12">
      <h2 className="text-lg text-slate-900 dark:text-slate-200 font-bold">
        Ethos
      </h2>
      <p className="mt-8">
        Focused on <em>learning</em> and <em>building</em>. Relentlessly devoted
        to fine, detailed polish. Deriving joy in novel interface experiences
        and design. Passionate about scaling myself through writing clear and
        inviting documentation.
      </p>
      <p className="mt-4">
        In pursuit of crafting experiences that both delight and inspire users.
        Mindful of my time and attention so that I can produce quality work and
        feel productive.
      </p>
    </div>
  );
}

function Current() {
  return (
    <div className="mt-12">
      <h2 className="dark:text-slate-200 font-bold text-lg text-slate-900">
        Present
      </h2>
      <p className="mt-8">
        Building fast, polished software for the web using modern features in
        JavaScript, HTML and CSS. Betting my future on React and Next.js for
        user interfaces. Setting my stall out on Tailwind for styling and
        TypeScript for type safety. Experimenting with Vite and Turbo for
        tooling and Zustand for state management. Loving Nextra for
        documentation and SWR for data fetching. Reaching for Testing Library,
        Jest, Vitest, MSW and Playwright for testing components. Curious about
        tRPC, Astro, Svelte and Prisma.
      </p>
      <p className="mt-8">
        <Link
          className="underline underline-offset-[6px] font-medium  decoration-gray-500 text-slate-900 dark:text-white"
          href="/bookshelf"
        >
          Reading
        </Link>{" "}
        and{" "}
        <Link
          className="underline underline-offset-[6px] font-medium  decoration-gray-500 text-slate-900 dark:text-white"
          href="/bookmarks"
        >
          bookmarking
        </Link>{" "}
        timeless wisdom from Naval Ravikant, Paul Graham, Swyx, Kent C. Dodds,
        Krishnamurti, Nassim Taleb and more.
      </p>
      <p className="mt-8">
        Curious about how I work? Check out my{" "}
        <Link
          className="underline underline-offset-[6px] font-medium  decoration-gray-500 text-slate-900 dark:text-white"
          href="/uses"
        >
          uses
        </Link>{" "}
        page.
      </p>
    </div>
  );
}

function Connect() {
  return (
    <div className="mt-12">
      <h2 className="dark:text-slate-200 font-bold text-lg text-slate-900">
        Connect
      </h2>
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
  );
}
