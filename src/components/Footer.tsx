import { Github, GithubDark, LinkedIn, LinkedInDark } from "../assets/index";
import { isDarkTheme } from "../utils/index";

function Footer() {
  const isDark = isDarkTheme();

  return (
    <footer className='w-full inline-flex items-center justify-between p-5 dark:text-darkText'>
      <p className='text-body'>Maxwell Jones</p>
      <ul className='inline-flex gap-3'>
        <li>
          <a href='https://github.com/maxxjonesyy' target='_blank'>
            <img
              src={isDark ? GithubDark : Github}
              alt='Github icon'
              width={25}
              height={25}
            />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/maxxjonesyy/' target='_blank'>
            <img
              src={isDark ? LinkedInDark : LinkedIn}
              alt='LinkedIn icon'
              width={25}
              height={25}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
