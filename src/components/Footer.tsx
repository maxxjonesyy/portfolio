import Github from "../assets/icons/github.svg";
import GithubDark from "../assets/icons/github-dark.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import LinkedInDark from "../assets/icons/linkedin-dark.svg";
import isDarkTheme from "../utils/isDarkTheme";

function Footer() {
  const isDark = isDarkTheme();

  return (
    <footer className='w-full inline-flex items-center justify-between p-5 dark:text-darkText'>
      <p className='text-body'>Maxwell Jones</p>
      <ul className='inline-flex gap-3'>
        <li>
          <a href='https://github.com/maxxjonesyy' target='_blank'>
            <img
              className='w-[1.35rem] h-[1.35rem] md:w-[1.75rem] md:h-[1.75rem] transition-theme'
              src={isDark ? GithubDark : Github}
              alt='Github'
            />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/maxxjonesyy/' target='_blank'>
            <img
              className='w-[1.35rem] h-[1.35rem] md:w-[1.75rem] md:h-[1.75rem] transition-theme'
              src={isDark ? LinkedInDark : LinkedIn}
              alt='LinkedIn'
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
