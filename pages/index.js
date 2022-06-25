import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-grow flex-col items-start justify-center leading-[24px] text-[16.5px]">
        <div>
          <h3 className="font-semibold mb-6 text-lg">Dennis Kigen</h3>
          <h1 className="font-semibold">About me</h1>
          <p className="mt-8">
            I'm a Frontend Software Engineer based in Eldoret. I'm interested in
            designing and building polished interfaces, user/dev experience and
            documentation. I'm open to opportunities that would allow me to grow
            and scale my craft.
          </p>
          <p className="mt-8">
            I'm currently doing frontend at{" "}
            <ExternalLink href="https://www.ampathkenya.org/">
              AMPATH
            </ExternalLink>{" "}
            <svg
              className="mx-1 inline-flex mb-1"
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
            and <ExternalLink href="https://openmrs.org/">OpenMRS</ExternalLink>
            <svg
              className="mx-1 inline-flex mb-1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 48 48"
            >
              <path
                fill="#333333"
                fill-rule="evenodd"
                d="M24.0117 12.3538C20.792 12.3538 17.8772 13.6587 15.7684 15.7675L15.7593 8.08049C18.228 6.80848 21.0437 6 24.0117 6C26.9781 6 29.7788 6.71777 32.2463 7.98895L32.238 15.7517C30.1304 13.6524 27.2228 12.3538 24.0117 12.3538ZM23.9955 35.6463C27.2149 35.6463 30.1284 34.3419 32.2372 32.2327L32.2313 40.0108C29.7639 41.2824 26.9635 42.0001 23.9955 42.0001C21.0275 42.0001 18.228 41.2824 15.7593 40.0112L15.7676 32.2485C17.8764 34.3481 20.7841 35.6463 23.9955 35.6463ZM15.7671 32.2333C13.6583 30.1245 12.3534 27.2114 12.3534 23.9917C12.3534 20.7802 13.652 17.873 15.7517 15.7638L7.98853 15.7559C6.71777 18.2241 6 21.0237 6 23.9917C6 26.9593 6.71777 29.76 7.98936 32.2283L15.7671 32.2333ZM35.6466 23.9992C35.6466 20.7794 34.3421 17.8646 32.2329 15.7559L40.011 15.7617C41.2826 18.2304 42.0004 21.0311 42.0004 23.9992C42.0004 26.9655 41.2826 29.7663 40.0114 32.2337L32.2483 32.2254C34.3483 30.1183 35.6466 27.2102 35.6466 23.9992Z"
                clip-rule="evenodd"
                class="color333 svgShape"
              ></path>
            </svg>
            to help build open-source medical records software for the
            developing world.
          </p>
          <p className="mt-8"></p>
          <p className="mt-8">
            Focused on <em>learning</em> and <em>building</em>. Mindful of my
            time and attention so that I can produce quality work and feel
            productive.
          </p>
        </div>
        <div className="mt-12">
          <h1 className="font-semibold">Now</h1>
          <p className="mt-8">
            Building polished software for the web using modern features in
            JavaScript, HTML and CSS. Betting my future on React and Next.js for
            user interfaces. Setting my stall out on Tailwind and TypeScript.
            Experimenting with Vite for tooling and Zustand for state
            management. Loving Nextra for documentation and SWR for data
            fetching. Curious about Svelte and Prisma.
          </p>
          <p className="mt-8">
            Enjoying Chillhop when working, and Afrobeats whenever else. Reading
            timeless wisdom from Naval Ravikant, Paul Graham, Swyx, Kent C.
            Dodds, Krishnamurti, Nassim Taleb and more.
          </p>
        </div>
        <div className="mt-12">
          <h1 className="font-semibold">Connect</h1>
          <p className="mt-8">If you're in Eldoret, let's go for a walk.</p>
          <p className="mt-8">
            Catch me on Twitter @
            <ExternalLink href="https://twitter.com/denniskigen">
              denniskigen
            </ExternalLink>
            .
          </p>
        </div>
        {/* <div className="space-y-4">
          <h3 className="my-6 mt-8 text-xl font-bold tracking-tight text-black dark:text-white lg:text-3xl">
            Projects
          </h3>
          <p className="prose mb-8 text-slate-600">
            Things I've made that I'm proud of.
          </p>
          <div className="flex flex-col">
            <ProjectCard
              title="React Weather"
              description="Weather that's easy on the eyes. Get the weather forecast for any location in the world."
              href="https://react-weather-next.denniskigen.com/"
              icon="reactweather"
            />
            <ProjectCard
              title="AMPATH Forms"
              description="Documentation site for the AMPATH Forms solution. Build production-ready POC forms."
              href="https://ampath-forms.vercel.app/"
              icon="ampathforms"
            />
          </div>
        </div> */}
      </div>
    </Container>
  );
}
