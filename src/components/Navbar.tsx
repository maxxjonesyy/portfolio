import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import Github from "../assets/icons/github.svg";
import LinkedIn from "../assets/icons/linkedin.svg";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.theme || "dark");

  useEffect(() => {
    if (!localStorage.theme) {
      localStorage.setItem("theme", theme);
    }
  }, []);

  function handleThemeSwitch() {
    const switchedTheme = theme === "dark" ? "light" : "dark";
    setTheme(switchedTheme);
    localStorage.setItem("theme", switchedTheme);
  }

  return (
    <nav className='flex justify-between items-center p-3'>
      <ul className='inline-flex items-center gap-3'>
        <li className='w-6'>
          <a href='https://github.com/maxxjonesyy' target='_blank'>
            <img src={Github} alt='Github link' />
          </a>
        </li>
        <li className='w-8'>
          <a href='https://www.linkedin.com/in/maxxjonesyy/' target='_blank'>
            <img src={LinkedIn} alt='LinkedIn link' />
          </a>
        </li>
      </ul>

      <ul className='inline-flex gap-5'>
        <li>
          <Link to='/about' className='dark:text-orange-400'>
            About
          </Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>

      <DarkModeSwitch
        moonColor='#000000'
        sunColor='#000000'
        checked={theme === "dark" ? true : false}
        onChange={handleThemeSwitch}
      />
    </nav>
  );
}

export default Navbar;
