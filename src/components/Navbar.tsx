import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { NavProps } from "../types/types";

function Navbar({ theme, setTheme }: NavProps) {
  function handleThemeSwitch() {
    const switchedTheme = theme === "dark" ? "light" : "dark";
    setTheme(switchedTheme);
    localStorage.setItem("theme", switchedTheme);
  }

  return (
    <nav className='flex justify-center items-center p-5'>
      <ul className='inline-flex gap-5 text-body dark:text-darkText'>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <DarkModeSwitch
            moonColor='#e5e7eb'
            sunColor='#000000'
            checked={theme === "dark" ? true : false}
            onChange={handleThemeSwitch}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
