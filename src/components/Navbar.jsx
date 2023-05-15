import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Navbar({ handleThemeSwitch, theme }) {
  const [scrollDirection, setScrollDirection] = useState(null);

  console.log(scrollDirection);

  useEffect(() => {
    let lastScrollY = scrollY;

    function updateScrollDirection() {
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    }

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return (
    <nav
      id='navbar'
      className={`sticky z-[200] transition-all duration-300 ease-in-out ${
        scrollDirection === "down" ? "top-[-75px]" : "top-0"
      }`}
    >
      <div className='flex items-center justify-between w-full navbar-padding container-width'>
        <a href='#hero'>
          <h1 className='text-3xl font-semibold text-accent lg:text-5xl'>
            MJ.
          </h1>
        </a>
        <ul className='flex items-center'>
          <li className='transition-all duration-300 ease-in-out text-lightText dark:text-darkText hover:text-accent dark:hover:text-accent'>
            <a href='#about'>About</a>
          </li>
          <li className='ml-3 transition-all duration-300 ease-in-out text-lightText dark:text-darkText hover:text-accent dark:hover:text-accent'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='ml-3 transition-all duration-300 ease-in-out text-lightText dark:text-darkText hover:text-accent dark:hover:text-accent'>
            <a href='#contact'>Contact</a>
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
      </div>
    </nav>
  );
}

export default Navbar;
