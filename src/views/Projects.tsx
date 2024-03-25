import { useEffect, useState } from "react";
import projectData from "../data/projectData.json";
import { transition } from "../utils";
import { FeaturedCardType } from "../types/types";
import { LinkButton, ProjectCard } from "../components";

function Projects() {
  const [activeProject, setActiveProject] = useState<FeaturedCardType>();

  useEffect(() => {
    scrollTo(0, 0);
  }, [activeProject]);

  return (
    <div className='container flex flex-1 items-center justify-center'>
      <div className='w-full'>
        {!activeProject && <h1 className='text-heading mb-10'>Projects</h1>}

        {activeProject ? (
          <div className='md:max-w-[750px] mx-auto'>
            <button
              className='text-body px-5 py-2 transition-theme hover:px-7 background-glass'
              onClick={() => setActiveProject(undefined)}>
              <span className='pr-2'>&larr;</span>
              Back
            </button>

            <div className='flex flex-col gap-5 mt-10 text-body'>
              <h2 className='text-heading text-accentText flex gap-3 transition-theme'>
                {activeProject.heading}
              </h2>
              <img
                className='rounded-md shadow-xl'
                src={activeProject.image}
                alt='Featured project'
                width={600}
                height={600}
              />
              <ul className='flex flex-wrap gap-5 my-5'>
                {activeProject.technology.map((technology, index) => (
                  <li key={index} className='px-4 py-1.5 background-glass'>
                    {technology}
                  </li>
                ))}
              </ul>

              <div>
                <h4 className='font-semibold text-2xl'>About</h4>
                <p className='mt-3 mb-5'>{activeProject.description}</p>

                <h4 className='font-semibold text-2xl'>Challenges</h4>
                <p className='mt-3 mb-10'>{activeProject.challenges}</p>

                <LinkButton
                  external={true}
                  route={activeProject.website}
                  text='View Website'
                />

                <LinkButton
                  external={true}
                  route={activeProject.github}
                  text='View Code'
                />
              </div>
            </div>
          </div>
        ) : (
          <div className='grid grid-cols-1 gap-24 lg:gap-38'>
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                setActiveProject={
                  setActiveProject as React.Dispatch<
                    React.SetStateAction<Object>
                  >
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default transition(Projects);
