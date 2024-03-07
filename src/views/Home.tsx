import { LinkButton } from "../components";

function Home() {
  return (
    <div className='relative -top-10 flex flex-grow items-center justify-center dark:text-darkText'>
      <div className='container-padding'>
        <h2 className='text-subheading'>Hello my name is</h2>
        <h1 className='text-heading'>Maxwell Jones</h1>
        <h3 className='text-subheading'>
          I build cool things for the internet.
        </h3>

        <p className='text-body mt-5 w-3/4'>
          Passionate Frontend Developer based in Sydney. Bringing conceptual web
          applications to life.
        </p>

        <div className='mt-5'>
          <LinkButton internalRoute='projects' text='View my work.' />
        </div>
      </div>
    </div>
  );
}

export default Home;
