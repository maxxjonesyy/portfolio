import { useState, useEffect } from "react";

import { Home, About, Projects, Contact } from "./views/index";

function App() {
  const [theme, setTheme] = useState(localStorage.theme || "dark");

  useEffect(() => {
    document.body.className = theme;

    if (!localStorage.theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
