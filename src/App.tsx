import { useState, useEffect } from "react";
import { Routes as Router, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Home, About, Projects, Contact } from "./views/index";
import { Navbar, Footer } from "./components/index";

import setOverScroll from "./utils/setOverscroll";

function App() {
  const [theme, setTheme] = useState(localStorage.theme || "light");
  const location = useLocation();

  useEffect(() => {
    setOverScroll();
    document.body.className = theme;

    if (!localStorage.theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar theme={theme} setTheme={setTheme} />

      <AnimatePresence mode='wait'>
        <Router location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Router>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
