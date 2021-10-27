import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col flex-grow justify-center items-start mb-auto">
        <h3 className="font-bold text-xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey there, I'm Dennis.
        </h3>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I love making user interfaces that are fast, beautiful and delightful
          to use. I work as a Programmer at{" "}
          <ExternalLink href="https://www.ampathkenya.org/">
            AMPATH
          </ExternalLink>{" "}
          &mdash; focusing on building open source health informatics software
          for the developing world. Welcome to my digital garden where I'll be
          sharing what I build as I{" "}
          <ExternalLink href="https://www.swyx.io/learn-in-public">
            learn in public
          </ExternalLink>
          . Thanks for swinging by! 👋
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <h4 className="prose text-gray-500 dark:text-gray-400 mb-8">
          Things I've made that I'm proud of.
        </h4>
        <ProjectCard
          title="React Weather Next"
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
    </Container>
  );
}
