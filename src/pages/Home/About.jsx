import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { checkMobileWidth } from "../../utils/windowWidth";

import Tile from "../../components/Tile";
import Links from "../../components/Links";

function About({ theme }) {
  const [shortBio, setShortBio] = useState(
    window.innerWidth < 768 ? true : false
  );

  function setBio() {
    if (checkMobileWidth() === true) {
      setShortBio(true);
    } else setShortBio(false);
  }

  window.addEventListener("resize", setBio);

  return (
    <div
      id='about'
      className='flex flex-col justify-center min-h-screen mt-20 md:mt-0 md:gap-20 container-padding container-width md:flex-row md:items-center'
    >
      <div className='max-w-[450px]'>
        <h2 className='pb-10 text-3xl font-bold underline drop-shadow-sm text-lightText dark:text-darkText lg:text-4xl'>
          About.
        </h2>
        <Tilt
          tiltReverse={true}
          trackOnWindow={true}
          tiltMaxAngleX={0}
          tiltMaxAngleY={8}
        >
          <img
            src='/portrait.jpg'
            alt='portrait'
            className='rounded-md shadow-md'
          />
        </Tilt>

        <div className='flex items-center justify-between pt-5'>
          <a
            href='/Resume.pdf'
            download
            className='p-2 text-sm text-white rounded-md shadow-md bg-accent hover:cursor-pointer'
          >
            Download Resume
          </a>
          <Links theme={theme} />
        </div>

        <h2 className='pt-10 text-lightText dark:text-darkText md:text-lg'>
          Languages, libraries & tools I use
        </h2>

        <div className='flex flex-wrap gap-3 pt-5'>
          <Tile skill={"HTML"} img={true} />
          <Tile skill={"CSS"} img={true} />
          <Tile skill={"Javascript"} img={true} />
          <Tile skill={"React"} img={true} />
          <Tile skill={"Sass"} img={true} />
          <Tile skill={"Tailwind"} img={true} />
          <Tile skill={"Git"} img={true} />
          <Tile skill={"Firebase"} img={true} />
          <Tile skill={"NodeJS"} img={true} />
        </div>
      </div>

      <div className='pt-16'>
        <h2 className='text-xl text-accent md:text-2xl lg:text-3xl'>
          A little bit about me...
        </h2>
        <p className='pt-5 text-sm font-light text-lightText dark:text-darkText lg:text-base '>
          I'm a self-taught Frontend Developer based in Sydney, passionate about
          bringing conceptual designs to life through code.
          <br />
          <br />
          Whilst working as a professional in the industry, I’ve put together a
          portfolio of work that demonstrates my skills and dedication, I'm
          committed to creating beautiful, user-friendly experiences that meet
          the needs of clients and users.
        </p>
        {shortBio ? null : (
          <p className='pt-5 text-sm font-light text-lightText dark:text-darkText lg:text-base'>
            Within my short duration in the industry, I've learned the
            importance of communication, collaboration, and attention to detail
            in delivering successful projects. I'm always eager to take on new
            challenges and upskill, I believe my passion and dedication is what
            sets me apart and fuels me to excel in this field.
            <br />
            <br />
            In my spare time you’d find me reading up on technology, expanding
            or creating new projects, often on the weekends I am tinkering with
            motorbikes and cars... After all, variety is the spice of life!
          </p>
        )}

        {window.innerWidth < 768 ? (
          <button
            onClick={() => {
              setShortBio(!shortBio);
            }}
            className='pt-2.5 text-accent transition-all duration-300 ease-in-out hover:text-lightText dark:hover:text-darkText'
          >
            {shortBio ? "Show more..." : "Show less..."}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default About;
