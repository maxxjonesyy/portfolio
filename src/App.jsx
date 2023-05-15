import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { setInitialTheme } from "./utils/theme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import ProjectPage from "./pages/ProjectPage";

function App() {
  const [theme, setTheme] = useState(localStorage.theme || "dark");

  useEffect(() => {
    setInitialTheme(theme);
  }, [theme]);

  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className='bg-lightBg dark:bg-darkBg'>
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home theme={theme} />} />
          <Route path='/project/' element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
