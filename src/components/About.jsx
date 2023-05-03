import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

import Tile from "./Tile";

function About({ theme }) {
  const [shortBio, setShortBio] = useState(
    window.innerWidth < 768 ? true : false
  );

  function checkWindowWidth() {
    if (window.innerWidth < 768) {
      setShortBio(true);
    } else setShortBio(false);
  }

  window.addEventListener("resize", checkWindowWidth);

  return (
    <div className='container-padding container-width md:flex md:gap-20 md:justify-between'>
      <div className='max-w-[450px]'>
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
            className='p-1.5 text-sm border-2 rounded-md border-accent text-lightText dark:text-darkText shadow-sm transition duration-300 ease-in-out hover:bg-accent hover:cursor-pointer hover:text-white'
          >
            Download Resume
          </a>

          <div className='flex items-center gap-2'>
            <a href='https://github.com/maxxjonesyy' target='_blank'>
              <img
                src={
                  theme === "dark"
                    ? "/icons/github.svg"
                    : "/icons/github-light.svg"
                }
                alt='github icon'
                className='opacity-75 w-7 hover:cursor-pointer'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/max-jones-0a48b7144/'
              target='_blank'
            >
              <img
                src={
                  theme === "dark"
                    ? "/icons/linkedin.svg"
                    : "/icons/linkedin-light.svg"
                }
                alt='linkedin icon'
                className='opacity-75 w-7 hover:cursor-pointer'
              />
            </a>
            <a
              href='https://www.instagram.com/maxxjonesyy/?hl=en'
              target='_blank'
            >
              <img
                src={
                  theme === "dark"
                    ? "/icons/instagram.svg"
                    : "/icons/instagram-light.svg"
                }
                alt='instagram icon'
                className='w-6 opacity-75 hover:cursor-pointer'
              />
            </a>
          </div>
        </div>
        <h2 className='pt-10 text-lightText dark:text-darkText md:text-lg'>
          Languages, libraries & tools I use
        </h2>

        <div className='flex flex-wrap gap-3 pt-5'>
          <Tile skill={"HTML"} />
          <Tile skill={"CSS"} />
          <Tile skill={"Javascript"} />
          <Tile skill={"React"} />
          <Tile skill={"Sass"} />
          <Tile skill={"Tailwind"} />
          <Tile skill={"Git"} />
          <Tile skill={"Firebase"} />
          <Tile skill={"NodeJS"} />
        </div>
      </div>

      <div className='pt-10 md:pt-0'>
        <h2 className='text-xl text-accent md:text-2xl lg:text-3xl'>
          A little bit about me...
        </h2>
        <p className='pt-5 text-sm font-light text-lightText dark:text-darkText md:text-base xl:text-lg'>
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
          <p className='pt-5 font-light text-lightText dark:text-darkText'>
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
