import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

import { transition, isDarkTheme, isMobile } from "../utils";
import { Arrow, ArrowDark, Portrait } from "../assets/index";
import { Skills } from "../components";

function About() {
  const [toggled, setToggled] = useState(isMobile());

  const handleResize = () => {
    setToggled(isMobile());
  };

  useEffect(() => {
    window.addEventListener("resize", () => handleResize);

    return () => {
      window.removeEventListener("resize", () => handleResize);
    };
  }, []);

  function handleToggle(): void {
    setToggled(!toggled);
  }

  return (
    <div className='container flex flex-1 items-center justify-center dark:text-darkText'>
      <div className='grid gap-10 md:gap-5 grid-cols-1 md:grid-cols-2'>
        <div>
          <img
            className='w-full max-w-[350px] rounded-md mb-5'
            src={Portrait}
            alt='Portrait of myself'
            width={350}
            height={350}
            loading='eager'
          />

          {/* <LinkButton
            download={true}
            route={Resume}
            external={true}
            text='Download Resume'
            textSize='text-sm'
          /> */}

          <p className='mt-5'>Languages, libraries & tools I use</p>
          <div className='max-w-[400px] grid grid-cols-3 gap-2 mt-3'>
            <Skills />
          </div>

          <div className='relative mt-10 max-w-[400px]'>
            <button
              className='mb-5 inline-flex items-center justify-between w-1/2 px-5 py-2 background-glass'
              onClick={handleToggle}>
              <p>Github activity</p>

              <img
                className={`${
                  toggled
                    ? "transition-theme rotate-90"
                    : "transition-theme rotate-0"
                }`}
                src={isDarkTheme() ? ArrowDark : Arrow}
                alt='Collapsible arrow'
                width={15}
                height={15}
              />
            </button>

            <div className='overflow-hidden'>
              <div
                className={`relative ${
                  toggled
                    ? "transition-theme -translate-y-0 h-auto"
                    : "transition-theme -translate-y-[100%] h-0"
                }`}>
                <GitHubCalendar
                  username='maxxjonesyy'
                  hideMonthLabels={true}
                  colorScheme='dark'
                  theme={{
                    dark: ["#AAB6E9", "#2E50EB"],
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className='text-heading mb-5'>About</h1>
          <p className='text-body'>
            I'm a Sydney-based Frontend Developer, passionate about bringing
            conceptual web applications to life through code and continuously
            improving my craft.
            <br />
            <br />
            My portfolio consists of React/Typescript projects, utilising
            industry-standard tooling such as Git, Tailwind, SASS, and various
            databases (SQL & NoSQL). I have professional experience working
            extensively with PHP, and I am always open to learning new
            technologies if a project demands it.
            <br />
            <br />
            In my spare time, you'd find me engrossed in technology articles,
            expanding or creating new projects. On weekends, I'm often tinkering
            with motorbikes and cars—after all, variety is the spice of life!
          </p>
        </div>
      </div>
    </div>
  );
}

export default transition(About);
