import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";

export default function Resume() {
  return (
    <Container
      title="Dennis Kigen - Resume"
      description="Professional experience, education, and tech stack."
    >
      <article className="flex flex-col justify-center items-start grow">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-200">Resume</h1>
        <div className="mt-8 min-w-full">
          <h2 className="text-lg font-bold">Relevant Professional Experience</h2>
          <div className="mt-6">
            <div className="flex justify-between text-base font-medium">
              <h3>Software Engineer</h3>
              <span>2018 - Present</span>
            </div>
            <p className="text-neutral-600 dark:text-slate-200">
              <ExternalLink href="http://ampath-kenya.org">AMPATH Kenya</ExternalLink>
            </p>
            <div className="mt-8">
              <ul className="flex-1 mx-4 list-disc">
                <li className="space-y-2">
                  <span>Keywords</span>
                  <span className="block mt-1.5">
                    Electronic medical records, React, OpenMRS, Angular, JavaScript, TypeScript, AMPATH Point of Care,
                    single-spa.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <ul className="flex-1 mx-4 mt-1 list-disc">
                <li className="space-y-2">
                  <span>Project overviews</span>
                  <ul className="mt-1 space-y-4 list-disc list-inside">
                    <li>
                      <ExternalLink href="https://github.com/ampath/ng2-amrs">AMPATH Point of Care</ExternalLink> is an
                      open-source electronic medical records system used at AMPATH facilities. Medical providers use
                      tablets and personal computers to enter and view rich clinical information including vital signs,
                      lab reports, and important alerts regarding care needs. It features an Angular frontend built
                      using Bootstrap, a Node.js backend that interfaces with a replicated MySQL database. Additionally,
                      it includes a <ExternalLink href="https://ampath-forms.vercel.app/">form builder</ExternalLink>{" "}
                      that enables the construction of electronic forms of arbitrary complexity for use in data
                      collection. These forms get rendered on the frontend by a dedicated{" "}
                      <ExternalLink href="https://github.com/ampath/ngx-openmrs-formentry">form engine</ExternalLink>.
                      AMPATH POC is built on top of OpenMRS 2.x. It communicates with the OpenMRS backend via the OpenMRS{" "}
                      <ExternalLink href="https://rest.openmrs.org">REST API</ExternalLink>.
                    </li>
                    <li>
                      <ExternalLink href="https://dev3.openmrs.org">OpenMRS 3.x</ExternalLink> (O3) is a complete UI and
                      UX redesign of OpenMRS, the world{"'"}s most popular open-source medical records system. Its
                      microfrontend architecture enables a plug and play framework for collaborative development of
                      rich clinical features. The open-source community behind O3 includes 8 international digital
                      health organizations and the product is used at over 6000 sites spanning 40 countries.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <ul className="mx-4 mt-1 list-disc">
                <li className="space-y-2">
                  <span>Roles</span>
                  <ul className="mt-1 space-y-2 list-disc list-inside">
                    <li>
                      Led the frontend development of O3 at AMPATH. That involved:
                      <ul className="mt-1 list-disc list-inside">
                        <li>
                          Shipping components built in React and designed using Carbon in a collaborative effort with a
                          global multi-organizational team of engineers and designers.
                        </li>
                        <li>
                          Participating in weekly frontend squad calls, unblocking, troubleshooting, and engaging with
                          community members on Slack, GitHub and our public forum.
                        </li>
                        <li>Planning and executing architectural improvements to the platform.</li>
                        <li>Contributing documentation, code reviews, tests, tutorials and onboarding material.</li>
                        <li>
                          Providing mentorship and technical guidance to developers of all experience joining the
                          community.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Served as the sole engineer supporting the{" "}
                      <ExternalLink href="https://globalhealth.iu.edu/impact-map/breast-cancer.html">
                        AMPATH Breast and Cervical Cancer Control Program
                      </ExternalLink>{" "}
                      (ABCCCP) grant, supporting 23 providers spread across 13 sites that serve over 179,000 clients.
                      That involved:
                      <ul className="mt-1.5 list-disc list-inside">
                        <li>Contributing code, tests, code reviews and documentation to core AMPATH repositories.</li>
                        <li>
                          Designing, building and maintaining monthly reports that aggregate data from our electronic
                          forms. I worked on enhancing and automating the report generation processes as well as adding
                          new indicators over time per our donor requirements.
                        </li>
                        <li>
                          Providing mentorship and technical guidance to junior developers who joined AMPATH through the
                          internship program.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 min-w-full">
          <h2 className="text-lg font-bold">Education</h2>
          <div className="flex justify-between mt-6">
            <div>
              <h3 className="text-base font-medium">Moi University</h3>
              <p className="text-neutral-600 dark:text-slate-200">Bachelor of Science in Computer Science</p>
              <p className="text-neutral-600 dark:text-slate-200">Eldoret, Kenya</p>
            </div>
            <span className="text-base font-medium">May 2015</span>
          </div>
        </div>
        <div className="mt-8 min-w-full">
          <h2 className="text-lg font-bold">Tech Stack</h2>
          <section className="mt-6 min-w-full">
            <h3 className="text-base font-semibold">Programming languages and frameworks</h3>
            <div className="flex space-x-10 mt-1.5">
              <ul className="flex-1 mx-4 mt-1 list-disc">
                <li>CSS</li>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </ul>
              <ul className="flex-1 mx-4 mt-1 list-disc">
                <li>Angular</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>React</li>
              </ul>
              <ul className="flex-1 mx-4 mt-1 list-disc">
                <li>Gatsby</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
          </section>
          <section className="mt-4 min-w-full">
            <h3 className="text-base font-semibold">Testing tools</h3>
            <div className="flex space-x-10 mt-1.5">
              <ul className="flex-1 mx-4 mt-1 list-disc">
                <li>Jest</li>
                <li>Mock Service Worker</li>
                <li>React Testing Library</li>
              </ul>
            </div>
          </section>
          <section className="mt-4 min-w-full">
            <h3 className="text-base font-semibold">Frontend tooling</h3>
            <div className="flex space-x-10 mt-1.5">
              <ul className="flex-1 mx-4 mt-1 list-disc">
                <li>Lerna</li>
                <li>Turborepo</li>
                <li>Vite</li>
                <li>Webpack</li>
              </ul>
              <ul className="flex-1 mx-4 mt-1 list-disc">
                <li>pnpm</li>
                <li>swc</li>
                <li>yarn</li>
              </ul>
            </div>
          </section>
          <section className="mt-4 min-w-full">
            <h3 className="text-base font-semibold">Design systems and tools</h3>
            <div className="flex space-x-10 mt-1.5">
              <ul className="flex-1 mx-4 mt-1 list-disc">
                <li>Adobe Illustrator</li>
                <li>Affinity Designer</li>
                <li>Carbon Design</li>
                <li>Material UI</li>
              </ul>
              <ul className="flex-1 mx-4 mt-1 list-disc">
                <li>Figma</li>
              </ul>
            </div>
          </section>
          <section className="mt-4 min-w-full">
            <h3 className="text-base font-semibold">Databases & CI/CD</h3>
            <div className="flex space-x-10 mt-1.5">
              <ul className="flex-1 mx-4 mt-1 list-disc">
                <li>GitHub Actions</li>
                <li>MySQL</li>
              </ul>
            </div>
          </section>
        </div>
      </article>
    </Container>
  );
}
