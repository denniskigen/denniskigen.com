import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";
import ExternalLinkIcon from "../components/ExternalLinkIcon";
import avatar from "../public/dennis-avatar.webp";

interface Project {
  title: string;
  url: string;
  description: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <ExternalLink href={project.url} styles="!no-underline">
    <div className="relative flex-col p-4 h-full bg-white border border-gray-200 transition-all cursor-pointer group dark:border-slate-700 dark:bg-slate-800 hover:border-gray-300 dark:hover:border-slate-600">
      <h3 className="flex gap-1 items-center text-base font-semibold text-blue-700 transition-colors dark:text-blue-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
        {project.title}
        <ExternalLinkIcon />
      </h3>
      <p className="mt-2.5 text-base font-normal leading-6 text-slate-700 dark:text-slate-300">
        {project.description}
      </p>
    </div>
  </ExternalLink>
);

export default function Home() {
  return (
    <Container description="Frontend engineer building user interfaces and open-source health software.">
      <div className="flex flex-col justify-center items-start grow">
        <About />
        <Projects />
        <Ethos />
        <Current />
        <Connect />
      </div>
    </Container>
  );
}

function About() {
  return (
    <div>
      <div className="flex items-center space-x-6">
        <Image
          alt="Dennis' avatar"
          className="h-[96px] w-[96px] object-cover rounded-full shadow-lg p-px"
          src={avatar}
          height={128}
          width={128}
          sizes="96px"
          priority={true}
          placeholder="blur"
        />
        <div className="flex-col ml-2 space-y-1 font-medium align-middle dark:text-slate-200">
          <h1 className="text-2xl font-bold">Dennis Kigen</h1>
          <p className="hidden text-sm sm:inline dark:text-slate-300 text-slate-700">
            Software Craftsman. Frontend Engineer
          </p>
          <p className="inline text-sm sm:hidden dark:text-slate-300 text-slate-700">Frontend Engineer</p>
        </div>
      </div>

      <svg aria-hidden="true" width="80" height="16" viewBox="0 0 432 38" className="my-12 fill-sky-400">
        <path d="M402.74 37.5899C390.193 37.5899 374.767 21.3129 374.111 20.6249C367.068 12.4335 359.943 5.14795 349.463 5.14795C337.975 5.14795 324.479 20.406 324.338 20.558L323.17 21.8313C315.729 29.9329 308.701 37.5893 296.186 37.5893C283.639 37.5893 268.213 21.3123 267.557 20.6243C260.514 12.4329 253.389 5.14734 242.909 5.14734C231.421 5.14734 217.925 20.4053 217.784 20.5573L216.683 21.7175C208.186 30.5847 201.48 37.5885 189.636 37.5885C177.085 37.5885 161.656 21.3115 161.007 20.6235C153.96 12.4321 146.831 5.14655 136.359 5.14655C124.871 5.14655 111.375 20.4045 111.234 20.5565L110.054 21.8417C102.62 29.9394 95.5889 37.5837 83.0769 37.5837C70.5259 37.5837 55.0969 21.3067 54.4479 20.6187C47.401 12.4273 40.2719 5.14175 29.7999 5.14175C19.3699 5.14175 9.86587 10.8722 4.98787 20.0987C4.3824 21.2549 2.94488 21.6964 1.78478 21.087C0.628579 20.4698 0.187069 19.0401 0.800389 17.8839C6.50349 7.10691 17.6124 0.403931 29.7964 0.403931C42.2694 0.403931 50.5504 8.82583 57.9644 17.4469C61.941 21.6774 74.3554 32.8419 83.0734 32.8419C93.5074 32.8419 99.2644 26.5724 106.557 18.6349L107.702 17.3888C108.268 16.7404 122.733 0.404816 136.35 0.404816C148.823 0.404816 157.104 8.82671 164.518 17.4478C168.494 21.6783 180.909 32.8428 189.627 32.8428C199.447 32.8428 204.943 27.1123 213.256 18.4368L214.295 17.3509C214.83 16.7337 229.295 0.401917 242.908 0.401917C255.388 0.401917 263.67 8.82382 271.076 17.4449C275.053 21.6676 287.467 32.8359 296.185 32.8359C306.623 32.8359 312.388 26.5625 319.685 18.6129L320.822 17.3785C321.388 16.7301 335.853 0.394531 349.463 0.394531C361.943 0.394531 370.225 8.81643 377.631 17.4375C381.607 21.6602 394.022 32.8285 402.74 32.8285C412.744 32.8285 422.06 27.4379 427.064 18.7625C427.716 17.6258 429.161 17.2313 430.302 17.8914C431.435 18.5438 431.822 19.993 431.173 21.1258C425.321 31.2898 414.427 37.5908 402.739 37.5908L402.74 37.5899Z"></path>
      </svg>

      <p className="my-8">
        Frontend engineer building user interfaces. Interested in magical web experiences, DX, documentation, and
        shipping maintainable code.
      </p>

      <p className="my-8">
        Currently helping build and scale O3, the open-source EMR for the developing world at{" "}
        <ExternalLink href="https://openmrs.org/">
          <span>OpenMRS</span>
        </ExternalLink>
        .
      </p>
      <p className="mt-8">
        Previously built{" "}
        <ExternalLink href="https://www.ampathkenya.org/pointofcare">
          <span>Point of Care</span>
        </ExternalLink>
        , a tablet-and-desktop EMR used across more than 26 major{" "}
        <ExternalLink href="https://www.ampathkenya.org/">
          <span>AMPATH</span>
        </ExternalLink>{" "}
        sites in Kenya with over 220,000 patients registered and millions of encounters and observations logged.
      </p>
    </div>
  );
}

function Projects() {
  const projects: Project[] = [
    {
      title: "OpenMRS 3",
      url: "https://dev3.openmrs.org/openmrs/spa",
      description:
        "Building the new frontend for the world's most popular open-source electronic health records system.",
    },
    {
      title: "O3 Docs",
      url: "https://o3-docs.vercel.app",
      description: "Documentation site for O3, the frontend framework for OpenMRS.",
    },
    {
      title: "O3 Core Frontend",
      url: "https://github.com/openmrs/openmrs-esm-core",
      description: "Core frontend framework for O3.",
    },
    {
      title: "O3 Form Builder",
      url: "https://github.com/openmrs/openmrs-esm-form-builder",
      description: "Build, test and publish OpenMRS forms, without the tears.",
    },
    {
      title: "AMPATH Forms",
      url: "https://ampath-forms.vercel.app",
      description: "Documenting how to build, test and validate OpenMRS form schemas.",
    },
    {
      title: "React Weather",
      url: "https://react-weather.denniskigen.com",
      description: "Weather that's easy on the eyes.",
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-lg font-bold text-slate-900 dark:text-slate-200">Projects</h2>
      <section className="grid grid-cols-1 gap-x-8 gap-y-8 mt-8 md:grid-cols-3 md:gap-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
}

function Ethos() {
  return (
    <div className="mt-12">
      <h2 className="text-lg font-bold text-slate-900 dark:text-slate-200">Ethos</h2>
      <p className="mt-8">
        Focused on learning and building. I care about small details, durable UX, and interfaces that feel calm and
        intentional. I scale my impact through clear, welcoming documentation.
      </p>
      <p className="mt-4">
        I aim to ship work that helps teams move faster without sacrificing quality, and I protect focus so the craft
        stays sharp.
      </p>
    </div>
  );
}

function Current() {
  return (
    <div className="mt-12">
      <h2 className="text-lg font-bold dark:text-slate-200 text-slate-900">Now</h2>
      <p className="mt-8">
        Focused on making O3 more reliable and approachable for implementers, while mentoring contributors and refining
        documentation.
      </p>
      <p className="mt-8">
        Building fast, polished clinical software for O3—shipping new features, UI improvements, platform tooling, and
        documentation that help teams deliver patient-facing workflows at scale. I build with React and TypeScript, and
        I lean on Vitest, Playwright, and other modern development tools to keep releases stable and reliable.
      </p>
      <p className="mt-8">
        <Link
          className="underline underline-offset-[6px] font-medium decoration-slate-500 text-slate-900 dark:text-white"
          href="/bookshelf"
        >
          Reading
        </Link>{" "}
        and{" "}
        <Link
          className="underline underline-offset-[6px] font-medium decoration-slate-500 text-slate-900 dark:text-white"
          href="/bookmarks"
        >
          bookmarking
        </Link>{" "}
        timeless wisdom from Naval Ravikant, Paul Graham, Swyx, Kent C. Dodds, Krishnamurti, Nassim Taleb and more.
      </p>
      <p className="mt-8">
        Curious about how I work? Check out my{" "}
        <Link
          className="underline underline-offset-[6px] font-medium decoration-slate-500 text-slate-900 dark:text-white"
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
      <h2 className="text-lg font-bold dark:text-slate-200 text-slate-900">Connect</h2>
      <p className="mt-8">
        If you{"'"}re in Eldoret, let{"'"}s go for a walk.
      </p>
    </div>
  );
}
