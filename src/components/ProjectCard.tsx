import { ProjectCardType } from "../types/types";
import { LinkButton } from ".";
import { SetStateAction, useState } from "react";

function ProjectCard({ project, setActiveProject }: ProjectCardType) {
  const [hovered, setHovered] = useState<SetStateAction<boolean>>(false);

  return (
    <div
      className='grid grid-cols-1 md:grid-cols-2 items-center gap-5 text-body p-3 cursor-pointer'
      onClick={() => setActiveProject(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <img
        className='rounded-md shadow-xl'
        src={project.image}
        alt='Featured project'
        width={450}
        height={450}
      />
      <div>
      
        <div className={`p-5 transition-colors duration-300 ${hovered && 'background-glass'}`}>
        <h2
          className={`text-xl font-medium flex gap-3 ${
            hovered && "text-accentText"
          }`}>
          {project.heading}
          <span
            className={`-rotate-[130deg] transition-transform duration-300 ${
              hovered && "-translate-y-1 text-accentText"
            }`}>
            &#8595;
          </span>
        </h2>
        <p className='my-5'>{project.description}</p>
        

        <LinkButton
          download={false}
          external={true}
          route={project.website}
          text='View Website'
          textSize='text-sm'
        />

        <LinkButton
          external={true}
          route={project.github}
          text='View Code'
          textSize='text-sm'
        />
      </div>
      </div>
    </div>
  );
}

export default ProjectCard;
