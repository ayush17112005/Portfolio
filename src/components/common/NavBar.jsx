import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

import {
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

//Navigation Items
//Array of objects- easy to add/remove/modify links

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

//Navbar Component
const NavBar = () => {
  //state and context
  const { theme, toggleTheme } = useTheme(); //access theme
  const [isMenuOpen, setIsMenuOpen] = useState(false); //Mobile menu state

  //Handlers
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    //NavBar Container
    //fixed: stays at top, glass effect (blurs content behind)

    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-light-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* LOGO */}
            <a
              href="#home"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              {/* Opening bracket */}
              <span className="text-accent-blue font-mono text-xl">&lt;</span>

              {/* Your name in cursive - using inline style to test */}
              <span
                style={{ fontFamily: "'Dancing Script', cursive" }}
                className="text-2xl text-light-text dark:text-dark-text mx-1"
              >
                Ayushman
              </span>

              {/* Closing bracket */}
              <span className="text-accent-blue font-mono text-xl">/&gt;</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {/* Map through navItems to create links */}
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-light-textSecondary dark:text-dark-textSecondary hover:text-accent-blue dark:hover:text-accent-blue transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* RIGHT SIDE: Theme Toggle + Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle Button */}
              <ThemeToggle />

              {/* Mobile Menu Button (hidden on desktop) */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-full bg-light-surface dark:bg-dark-surface hover:bg-light-hover dark:hover:bg-dark-hover transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <HiOutlineX className="w-5 h-5 text-light-text dark:text-dark-text" />
                ) : (
                  <HiOutlineMenuAlt3 className="w-5 h-5 text-light-text dark:text-dark-text" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (only shows when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="md:hidden bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-md border-b border-light-border dark:border-dark-border">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu} // Close menu when link is clicked
                className="block py-3 px-4 rounded-lg text-light-text dark:text-dark-text hover:bg-light-hover dark:hover:bg-dark-hover transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
