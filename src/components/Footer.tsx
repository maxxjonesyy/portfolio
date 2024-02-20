import Github from "../assets/icons/github.svg";
import GithubDark from "../assets/icons/github-dark.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import LinkedInDark from "../assets/icons/linkedin-dark.svg";

function Footer() {
  const isDark = localStorage.theme === "dark" ? true : false;

  return (
    <footer className='w-full absolute inline-flex items-center justify-between bottom-0 p-5 dark:text-darkText'>
      <p>Maxwell Jones</p>
      <ul className='inline-flex gap-3'>
        <li className='w-[1.75rem]'>
          <a href='https://github.com/maxxjonesyy' target='_blank'>
            <img src={isDark ? GithubDark : Github} alt='Github' />
          </a>
        </li>
        <li className='w-[1.75rem]'>
          <a href='https://www.linkedin.com/in/maxxjonesyy/' target='_blank'>
            <img src={isDark ? LinkedInDark : LinkedIn} alt='LinkedIn' />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
