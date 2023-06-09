import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function Hero() {
  return (
    <div
      id='hero'
      className='flex flex-col items-center justify-center mt-[5rem] bg-transparent md:mt-0 md:h-screen container-padding container-width md:flex-row md:justify-between'
    >
      <div
        id='hero-animation'
        className='w-3/4 max-w-[500px] md:w-1/2 md:order-2 2xl:max-w-[550px]'
      >
        <Player
          src='../hero-animation.json'
          loop
          autoplay
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className='flex flex-col justify-center mt-5 md:mt-0'>
        <h1 className='text-xl text-lightText dark:text-darkText md:text-3xl 2xl:text-4xl'>
          Hello my name is
        </h1>
        <h1 className='text-4xl font-semibold text-accent md:text-4xl md:pt-1.5 xl:text-5xl'>
          Maxwell Jones,
        </h1>
        <h1 className='text-xl text-lightText dark:text-darkText md:text-3xl md:pt-1.5 xl:text-4xl'>
          I build cool things for the internet.
        </h1>
        <p className='mt-5 text-sm font-light lg:text-base xl:text-lg md:mt-10 md:w-2/3 text-lightText dark:text-darkText'>
          I’m a self-taught Frontend Developer based in Sydney. Bringing
          conceptual ideas and designs to life.
        </p>
        <a
          href='#projects'
          className='w-40 p-1.5 mt-10 text-center text-base lg:text-lg transition duration-300 ease-in-out rounded-md text-white bg-accent shadow-md '
        >
          Projects
        </a>
      </div>
    </div>
  );
}

export default Hero;
