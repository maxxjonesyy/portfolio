import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { setInitialTheme } from "./utils/theme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import ProjectPage from "./pages/ProjectPage";
import Loader from "./components/Loader";

function App() {
  const [theme, setTheme] = useState(localStorage.theme || "dark");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInitialTheme(theme);
  }, [theme]);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return loading ? (
    <Loader />
  ) : (
    <div className='bg-lightBg dark:bg-darkBg animate-fade-in'>
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
