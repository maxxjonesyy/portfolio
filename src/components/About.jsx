import React from "react";
import Tilt from "react-parallax-tilt";

import Tile from "./Tile";

function About() {
  return (
    <div className='container-padding container-width'>
      <div className='max-w-[500px]'>
        <Tilt
          tiltReverse={true}
          trackOnWindow={true}
          tiltMaxAngleX={8}
          tiltMaxAngleY={2}
        >
          <img
            src='/portrait.jpg'
            alt='portrait'
            className='rounded-md shadow-md'
          />
        </Tilt>

        <div className='flex items-center justify-between pt-3'>
          <button className='p-1.5 text-sm border-2 rounded-md border-accent text-lightText dark:text-darkText shadow-md'>
            Download Resume
          </button>

          <div className='flex items-center gap-2'>
            <img src='/icons/github.svg' alt='github icon' className='w-7' />
            <img
              src='/icons/linkedin.svg'
              alt='linkedin icon'
              className='w-7'
            />
            <img
              src='/icons/instagram.svg'
              alt='instagram icon'
              className='w-6'
            />
          </div>
        </div>

        <div className='pt-10'>
          <h2 className='text-2xl text-accent'>A little bit about me...</h2>
          <p className='pt-5 font-light text-lightText dark:text-darkText'>
            I am an enthusiastic, self-taught Frontend Developer from Sydney
            Australia. Whilst working as a professional in the industry I have
            put together a collection of work I feel portrays my skills in this
            field.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
