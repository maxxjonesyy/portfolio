import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import heroAnimation from "../assets/hero-animation.json";

function Hero() {
  return (
    <div
      id='hero'
      className='flex flex-col items-center justify-center flex-1 w-screen h-screen pt-[25%] bg-lightBg dark:bg-darkBg container-padding container-width md:flex-row md:justify-between md:pt-0'
    >
      <div
        id='hero-animation'
        className='w-3/4 max-w-[500px] md:w-1/2 md:order-2 2xl:max-w-[550px]'
      >
        <Player
          src={heroAnimation}
          loop
          autoplay
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className='flex flex-col justify-center h-full mt-10'>
        <h1 className='text-xl text-lightText dark:text-darkText md:text-3xl xl:text-4xl'>
          Hello my name is
        </h1>
        <h1 className='text-4xl font-semibold text-accent md:text-4xl md:pt-1.5 xl:text-5xl'>
          Maxwell Jones,
        </h1>
        <h1 className='text-xl text-lightText dark:text-darkText md:text-3xl md:pt-1.5 xl:text-4xl'>
          I build cool things for the internet.
        </h1>
        <p className='mt-5 text-sm font-light md:mt-10 text-lightText dark:text-darkText md:text-base md:w-2/3 lg:text-lg '>
          I’m a self-taught Frontend Developer based in Sydney. Bringing
          conceptual ideas and designs to life.
        </p>
        <a
          href=''
          className='w-40 p-1.5 mt-10 text-lg text-center transition duration-300 ease-in-out border-2 rounded-md text-lightText dark:text-darkText border-accent text-textLight hover:bg-accent hover:text-white hover:scale-105'
        >
          Projects
        </a>
      </div>
    </div>
  );
}

export default Hero;
