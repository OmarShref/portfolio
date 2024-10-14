import { projects } from "../lib/data/projects";

const Projects = () => {
  return (
    <>
      {projects?.map((project) => {
        return (
          <section
            id="projects"
            className="grid h-screen w-screen place-items-center bg-[url('/src/assets/2.png')] bg-cover bg-fixed bg-no-repeat pb-14 md:bg-[url('/src/assets/4.jpg')] md:pb-0 md:pl-36"
          >
            <div className="max-w-xs rounded-xl bg-black/80 p-4 text-white backdrop-blur-2xl md:max-w-md md:p-8 lg:max-w-xl lg:p-10">
              <a href={project?.projectLink} target="_blank">
                <video
                  src={project?.vedio}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="pointer-events-none"
                ></video>
                <div className="mt-4 block text-2xl lg:text-3xl xl:text-4xl">
                  <span style={{ color: project?.identityColors?.at(0) }}>
                    {project?.name?.split(" ")?.at(0)}
                  </span>{" "}
                  <span style={{ color: project?.identityColors?.at(1) }}>
                    {project?.name?.split(" ")?.at(1)}
                  </span>
                </div>
                <p className="mt-4 lg:text-lg">{project?.description}</p>
              </a>

              {project?.githubLink?.length > 0 && (
                <p className="mt-2 lg:text-lg">
                  github :{" "}
                  <a href={project?.githubLink} target="_blank">
                    <i className="fa-brands fa-github rounded-xl px-2 text-2xl transition active:scale-95 md:hover:bg-white md:hover:text-black lg:text-3xl"></i>
                  </a>
                </p>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Projects;
