import React, { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Navbar({ handleThemeSwitch, theme }) {
  const [prevScrollY, setPrevScrollY] = useState(0);

  function handleScroll() {
    if (scrollY > prevScrollY) {
      document.getElementById("navbar").style.top = "-75px";
    } else {
      document.getElementById("navbar").style.top = "0px";
    }
    setPrevScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id='navbar'
      className='relative transition-all duration-300 ease-in-out'
    >
      <div className='flex items-center justify-between w-full navbar-padding container-width'>
        <h1 className='text-3xl font-semibold text-accent md:text-4xl lg:text-5xl'>
          MJ.
        </h1>

        <ul className='flex items-center'>
          <li className='transition-all duration-300 ease-in-out text-lightText dark:text-darkText hover:text-accent md:text-lg dark:hover:text-accent'>
            <a href=''>About</a>
          </li>
          <li className='ml-3 transition-all duration-300 ease-in-out text-lightText dark:text-darkText hover:text-accent md:text-lg dark:hover:text-accent'>
            <a href=''>Projects</a>
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
      </div>
    </nav>
  );
}

export default Navbar;
