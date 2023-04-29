import React, { useEffect, useState } from "react";

import { setInitialTheme } from "./utils/theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  const [theme, setTheme] = useState(localStorage.theme || "dark");

  useEffect(() => {
    setInitialTheme(theme);
  }, [theme]);

  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className='max-h-screen max-w-screen bg-lightBg dark:bg-darkBg'>
      <div className='fixed z-10 w-full'>
        <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      </div>
      <Hero />
      <About />
    </div>
  );
}

export default App;
