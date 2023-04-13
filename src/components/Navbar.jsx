import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Navbar({ handleThemeSwitch, theme }) {
  return (
    <nav className='flex items-center justify-between w-full container-padding container-width'>
      <h1 className='text-3xl font-semibold text-accent md:text-4xl lg:text-5xl'>
        MJ.
      </h1>

      <ul className='flex items-center'>
        <li className='transition-all duration-300 ease-in-out text-lightText dark:text-darkText hover:text-accent md:text-lg dark:hover:text-accent'>
          <a href=''>Projects</a>
        </li>
        <li className='ml-3 transition-all duration-300 ease-in-out text-lightText dark:text-darkText hover:text-accent md:text-lg dark:hover:text-accent'>
          <a href=''>About</a>
        </li>
        <li className='ml-3 transition-all duration-300 ease-in-out text-lightText dark:text-darkText hover:text-accent md:text-lg dark:hover:text-accent'>
          <a href=''>Contact</a>
        </li>
        <li className='ml-5 md:ml-10'>
          <DarkModeSwitch
            moonColor='#EFECEC'
            sunColor='#545454'
            size={25}
            checked={theme === "dark" ? true : false}
            onClick={handleThemeSwitch}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
