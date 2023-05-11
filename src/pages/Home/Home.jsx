import React from "react";

import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";

function Home({ theme }) {
  return (
    <>
      <Hero />
      <About theme={theme} />
      <Projects />
    </>
  );
}

export default Home;
