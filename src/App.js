import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SectionDivider from "./components/SectionDivider";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />
      <SectionDivider />

      <About />
      <SectionDivider dark />

      <Skills />
      <SectionDivider />

      <Projects />
      <SectionDivider dark flip />

      <Contact />
    </div>
  );
}

export default App;