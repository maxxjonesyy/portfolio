import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Tile from "../components/Tile";
import SplashAnimation from "../components/SplashAnimation";

function ProjectPage() {
  const [splash, setSplash] = useState(true);
  const project = useLocation().state.data;

  setTimeout(() => {
    setSplash(false);
  }, 1500);

  return splash ? (
    <SplashAnimation />
  ) : (
    <div className='flex flex-col items-center h-screen pt-10 lg:pt-0 lg:flex-row lg:justify-between lg:gap-20 container-width container-padding'>
      <div className='lg:w-1/2'>
        <h1 className='text-3xl font-semibold text-accent xl:text-4xl'>
          {project.heading}
        </h1>
        <p className='text-lg lg:text-xl text-lightText dark:text-darkText'>
          {project.subheading}
        </p>

        <a
          href={project.website}
          target='_blank'
          className='inline-flex items-center gap-2 p-1.5 text-xs rounded-md shadow-md text-darkText bg-accent mt-5'
        >
          <img src='/icons/project.svg' alt='website icon' className='w-6' />
          Live Website
        </a>

        <a
          href={project.github}
          target='_blank'
          className='inline-flex items-center gap-2 p-1.5 text-xs rounded-md shadow-md text-darkText bg-accent ml-3'
        >
          <img src='/icons/github.svg' alt='github icon' className='w-6' />
          Source Code
        </a>

        <div className='flex flex-wrap gap-3 pt-5 md:w-2/3'>
          {project.technology.map((skill, index) => {
            return <Tile key={index} skill={skill} img={false} />;
          })}
        </div>

        <img src={project.src} alt={project.alt} className='pt-5' />
      </div>

      <div className='lg:w-1/2'>
        <h2 className='pt-5 text-xl font-semibold text-accent lg:text-2xl lg:pt-0'>
          Summary
        </h2>
        <p className='pt-3 text-sm font-light text-lightText dark:text-darkText xl:text-base'>
          {project.description}
        </p>

        <h2 className='pt-5 text-xl font-semibold text-accent xl:text-2xl'>
          Challenges
        </h2>
        <p className='pt-3 text-sm font-light text-lightText dark:text-darkText xl:text-base'>
          {project.challenges}
        </p>
      </div>
    </div>
  );
}

export default ProjectPage;
