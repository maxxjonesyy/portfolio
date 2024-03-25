import { LinkButton } from "../components";
import { transition } from "../utils";

function Home() {
  return (
    <div className='container flex flex-1 items-center justify-center dark:text-darkText'>
      <div>
        <h1 className='text-subheading'>Hello my name is</h1>
        <h1 className='text-heading'>Maxwell Jones</h1>
        <h1 className='text-subheading'>
          I build cool things for the internet.
        </h1>

        <p className='mt-5 w-full md:w-3/4 text-body'>
          Passionate Frontend Developer based in Sydney. Bringing conceptual web
          applications to life.
        </p>

        <div className='mt-5'>
          <LinkButton route='projects' external={false} text='View my work.' />
        </div>
      </div>
    </div>
  );
}

export default transition(Home);
