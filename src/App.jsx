import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

import { setInitialTheme } from "./utils/theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tile from "./components/Tile";

function App() {
  const [theme, setTheme] = useState(localStorage.theme || "dark");

  useEffect(() => {
    setInitialTheme(theme);
  }, [theme]);

  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className='max-h-screen max-w-screen bg-lightBg dark:bg-darkBg'>
      <div className='fixed z-10 w-full'>
        <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      </div>

      <Hero />

      <div
        id='about'
        className='w-full h-screen container-padding container-width'
      >
        <Tilt
          tiltReverse={true}
          trackOnWindow={true}
          tiltMaxAngleX={6}
          tiltMaxAngleY={6}
        >
          <img
            src='/portrait.jpg'
            alt='portrait'
            className='rounded-lg shadow-lg'
          />
        </Tilt>

        <h1 className='pt-10 text-2xl font-medium text-accent'>
          A little bit about me...
        </h1>
        <p className='pt-5 font-light text-lightText dark:text-darkText'>
          I am an enthusiastic, self-taught Frontend Developer from Sydney
          Australia. Whilst working as a professional in the industry I have put
          together a collection of work I feel portrays my skills in this field.
          <br />
          <br />
          The languages I speak:
        </p>
        <div className='flex justify-between pt-5'>
          <Tile skill='HTML' />
          <Tile skill='CSS' />
          <Tile skill='Javascript' />
        </div>

        <p className='pt-5 font-light text-lightText dark:text-darkText'>
          Other libraries and tools I use:
        </p>

        <div className='flex flex-wrap justify-between w-full gap-3 pt-5'>
          <Tile skill='React' />
          <Tile skill='Git' />
          <Tile skill='Tailwind' />
          <Tile skill='Sass' />
          <Tile skill='Firebase' />
          <Tile skill='NodeJS' />
        </div>
      </div>
    </div>
  );
}

export default App;
