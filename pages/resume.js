import Link from "next/link";
import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";

export default function Resume() {
  return (
    <Container title="Dennis Kigen - Resume">
      <article className="flex flex-grow flex-col items-start justify-center">
        <h1>Resume</h1>
        <div className="mt-8 min-w-full">
          <h1 className="font-medium">Relevant Professional Experience</h1>
          <div className="mt-6">
            <div className="flex justify-between">
              <h1>Software Engineer</h1>
              <h1>2018 - Present</h1>
            </div>
            <h2 className="text-neutral-600 dark:text-neutral-400">
              <ExternalLink href="http://ampath-kenya.org">
                AMPATH Kenya
              </ExternalLink>
            </h2>
            <div className="mt-8 space-y-2">
              <ul className="flex-1 mx-4 list-disc">
                <li>Keywords</li>
                <span className="block mt-1.5">
                  Electronic medical records, React, OpenMRS, Angular,
                  JavaScript, TypeScript, AMPATH Point of Care, single-spa.
                </span>
              </ul>
            </div>
            <div className="mt-4">
              <ul className="mt-1 flex-1 mx-4 list-disc">
                <li>Project overviews</li>
                <ul className="mt-1 flex-1 mx-4 list-disc space-y-4">
                  <li>
                    <ExternalLink href="https://github.com/ampath/ng2-amrs">
                      AMPATH Point of Care
                    </ExternalLink>{" "}
                    is an open-source electronic medical records used at AMPATH
                    facilities. Medical providers use tablets and personal
                    computers to enter and view rich clinical information
                    including vital signs, lab reports, and important alerts
                    regarding care needs. It features an Angular frontend built
                    using Bootstrap, a Node.js backend that interfaces with a
                    replicated MySQL database. Additionally, it includes a{" "}
                    <ExternalLink href="https://ampath-forms.vercel.app/">
                      form builder
                    </ExternalLink>{" "}
                    that enables the construction of electronic forms of
                    arbitrary complexity for use in data collection. These forms
                    get rendered on the frontend by a dedicated{" "}
                    <ExternalLink href="https://github.com/ampath/ngx-openmrs-formentry">
                      form engine
                    </ExternalLink>
                    . AMPATH POC is built on top of OpenMRS 2.x. It communicates
                    with the OpenMRS backend via the OpenMRS{" "}
                    <ExternalLink href="https://rest.openmrs.org">
                      REST API
                    </ExternalLink>
                    .
                  </li>
                  <li>
                    <ExternalLink href="https://dev3.openmrs.org">
                      OpenMRS 3.x
                    </ExternalLink>{" "}
                    (O3) is a complete UI and UX redesign of OpenMRS, the
                    world's most popular open-source medical records system. Its
                    microfrontend architecture enables a plug and play framework
                    for collaborative development of rich clinical features. The
                    open-source community behind O3 includes 8 international
                    digital health organizations and the product is used at over
                    6000 sites spanning 40 countries.
                  </li>
                </ul>
              </ul>
            </div>
            <div className="mt-4">
              <ul className="mt-1 mx-4 list-disc">
                <li>Roles</li>
                <ul className="mt-1 mx-4 list-disc space-y-1">
                  <li>
                    Led the frontend development of O3 at AMPATH. That involved:
                  </li>
                  <ul className="mt-1 list-inside list-disc">
                    <li>
                      Shipping components built in React and designed using
                      Carbon in a collaborative effort with a global
                      multi-organizational team of engineers and designers.
                    </li>
                    <li>
                      Participating in weekly frontend squad calls, unblocking,
                      troubleshooting, and engaging with community members on
                      Slack, GitHub and our public forum.
                    </li>
                    <li>
                      Planning and executing architectural improvements to the
                      platform.
                    </li>
                    <li>
                      Contributing documentation, code reviews, tests, tutorials
                      and onboarding material.
                    </li>
                    <li>
                      Providing mentorship and technical guidance to developers
                      of all experience joining the community.
                    </li>
                  </ul>
                </ul>
                <ul className="mt-2 mx-4 list-disc space-y-1">
                  <li>
                    Served as the sole engineer supporting the{" "}
                    <ExternalLink href="https://globalhealth.iu.edu/impact-map/breast-cancer.html">
                      AMPATH Breast and Cervical Cancer Control Program
                    </ExternalLink>{" "}
                    (ABCCCP) grant, supporting 23 providers spread across 13
                    sites that serve over 179,000 clients. That involved:
                  </li>
                  <ul className="mt-1.5 list-disc list-inside">
                    <li>
                      Contributing code, tests, code reviews and documentation
                      to core AMPATH repositories.
                    </li>
                    <li>
                      Designing, building and maintaining monthly reports that
                      aggregate data from our electronic forms. I worked on
                      enhancing and automating the report generation processes
                      as well as adding new indicators over time per our donor
                      requirements.
                    </li>
                    <li>
                      Providing mentorship and technical guidance to junior
                      developers who joined AMPATH through the internship
                      program.
                    </li>
                  </ul>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 min-w-full">
          <h1 className="font-medium">Education</h1>
          <div className="flex justify-between mt-6">
            <div>
              <h1>Moi University</h1>
              <h1 className="text-neutral-600 dark:text-neutral-400">
                Bachelor of Science in Computer Science
              </h1>
              <h1 className="text-neutral-600 dark:text-neutral-400">
                Eldoret, Kenya
              </h1>
            </div>
            <h1>May 2015</h1>
          </div>
        </div>
        <div className="mt-8 min-w-full">
          <h1 className="font-medium">Tech Stack</h1>
          <section className="mt-6 min-w-full">
            <h3>Programming languages and frameworks</h3>
            <div className="flex space-x-10 mt-1.5">
              <ul className="mt-1 flex-1 mx-4 list-disc">
                <li>CSS</li>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </ul>
              <ul className="mt-1 flex-1 mx-4 list-disc">
                <li>Angular</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>React</li>
              </ul>
              <ul className="mt-1 flex-1 mx-4 list-disc">
                <li>Gatsby</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
          </section>
          <section className="mt-4 min-w-full">
            <h3>Testing tools</h3>
            <div className="flex space-x-10 mt-1.5">
              <ul className="mt-1 flex-1 mx-4 list-disc">
                <li>Jest</li>
                <li>Mock Service Worker</li>
                <li>React Testing Library</li>
              </ul>
            </div>
          </section>
          <section className="mt-4 min-w-full">
            <h3>Frontend tooling</h3>
            <div className="flex space-x-10 mt-1.5">
              <ul className="mt-1 flex-1 mx-4 list-disc">
                <li>Lerna</li>
                <li>Turborepo</li>
                <li>Vite</li>
                <li>Webpack</li>
              </ul>
              <ul className="mt-1 flex-1 mx-4 list-disc">
                <li>pnpm</li>
                <li>swc</li>
                <li>yarn</li>
              </ul>
            </div>
          </section>
          <section className="mt-4 min-w-full">
            <h3>Design systems and tools</h3>
            <div className="flex space-x-10 mt-1.5">
              <ul className="mt-1 flex-1 mx-4 list-disc">
                <li>Adobe Illustrator</li>
                <li>Affinity Designer</li>
                <li>Carbon Design</li>
                <li>Material UI</li>
              </ul>
              <ul className="mt-1 flex-1 mx-4 list-disc">
                <li>Figma</li>
              </ul>
            </div>
          </section>
          <section className="mt-4 min-w-full">
            <h3>Databases & CI/CD</h3>
            <div className="flex space-x-10 mt-1.5">
              <ul className="mt-1 flex-1 mx-4 list-disc">
                <li>GitHub Actions</li>
                <li>MySQL</li>
              </ul>
            </div>
          </section>
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
