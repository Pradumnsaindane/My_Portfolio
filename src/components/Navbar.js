import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-gray-800 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">MyPortfolio</h1>

        <div className="flex items-center gap-6">
          <div className="space-x-6 hidden md:flex">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-600 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>

          {/* 🌙 Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-lg text-sm transition"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}