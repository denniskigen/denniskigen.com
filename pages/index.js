import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col flex-grow justify-center items-start max-w-2xl mx-auto mb-auto">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I'm Dennis Kigen
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I’m a programmer living in Eldoret, Kenya. I'm currently helping build
          open source health informatics software for the developing world in my
          day job at{" "}
          <a
            className="text-gray-500 hover:text-gray-600 transition"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AMPATH"
          >
            AMPATH
          </a>
          . When I'm not working on work stuff, I'll be building cool little web
          doodads on here. Thanks for swinging by!
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="React Weather"
          description="Weather that's easy on the eyes. Get the weather forecast for any location in the world."
          href="https://react-weather.denniskigen.com/"
          icon="reactweather"
        />
      </div>
    </Container>
  );
}
