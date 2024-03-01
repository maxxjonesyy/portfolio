import { useState, useEffect } from "react";
import { Routes as Router, Route } from "react-router-dom";

import { Home, About, Projects, Contact } from "./views/index";
import { Navbar, Footer } from "./components/index";

function App() {
  const [theme, setTheme] = useState(localStorage.theme || "dark");

  useEffect(() => {
    document.body.className = theme;

    if (!localStorage.theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <div className='min-h-screen bg-gray-200 dark:bg-gray-800'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
