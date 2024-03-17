import transition from "../utils/transition";
import portrait from "../assets/images/portrait.webp";
import Resume from "../assets/Maxwell Jones Resume.pdf";

import Skills from "../components/Skills";

import { LinkButton } from "../components";
import GitHubCalendar from "react-github-calendar";

function About() {
  return (
    <div className='container flex flex-1 items-center justify-evenly dark:text-darkText'>
      <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 my-10'>
        <div>
          <img
            className='w-full max-w-[350px] rounded-md mb-5'
            src={portrait}
            alt='portrait of myself'
            width={350}
            height={500}
            loading='eager'
          />

          <LinkButton
            download={true}
            route={Resume}
            external={true}
            text='Download Resume'
            textSize='text-sm'
          />

          <p className='mt-5'>Languages, libraries & tools I use</p>
          <div className='max-w-[400px] grid grid-cols-3 gap-2 mt-3'>
            <Skills />
          </div>

          <div className='mt-10 max-w-[400px]'>
            <p className='mb-5'>Github activity</p>
            <GitHubCalendar
              username='maxxjonesyy'
              hideMonthLabels={true}
              colorScheme='dark'
              theme={{
                dark: ["#84828f", "#4361ee"],
              }}
            />
          </div>
        </div>

        <div>
          <h1 className='text-heading mb-3'>About</h1>
          <p className='text-body leading-8'>
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
