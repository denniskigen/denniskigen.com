import Image from "next/image";
import NextLink from "next/link";
import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-grow flex-col items-start justify-center">
        <div className="space-y-4">
          <h3 className="my-6 text-xl font-bold tracking-tight text-black dark:text-white lg:text-5xl">
            Hey there 👋, I'm Dennis.
          </h3>
          <p className="prose text-slate-600 dark:text-slate-400">
            I'm a UI engineer, writer and{" "}
            <ExternalLink href="https://github.com/denniskigen">
              maker of cool things
            </ExternalLink>
            .
          </p>
          <p className="prose text-slate-600 dark:text-slate-400">
            I'm currently shipping open source healthcare software for the
            developing world at{" "}
            <ExternalLink href="https://www.ampathkenya.org/">
              AMPATH
            </ExternalLink>{" "}
            and <ExternalLink href="https://openmrs.org/">OpenMRS</ExternalLink>
            .
          </p>
          <p className="prose text-slate-600 dark:text-slate-400">
            I enjoy building interfaces that are fast, beautiful and delightful
            to use.
          </p>
          <p className="prose text-slate-600 dark:text-slate-400">
            Welcome to my digital garden where I'll be sharing what I build as I
            learn in public. Thanks for swinging by!
          </p>
          <p className="prose text-slate-600 dark:text-slate-400">
            Curious about how I work? Check out my{" "}
            <NextLink href="/uses">uses</NextLink> page for a full list of all
            the software, hardware and services I use every day.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="my-6 mt-8 text-xl font-bold tracking-tight text-black dark:text-white lg:text-3xl">
            Projects
          </h3>
          <p className="prose mb-8 text-slate-600 dark:text-slate-400">
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
        </div>
      </div>
    </Container>
  );
}
