import React from "react";

import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Home({ theme }) {
  return (
    <>
      <Hero />
      <About theme={theme} />
      <Projects />
      <Contact theme={theme} />
    </>
  );
}

export default Home;
