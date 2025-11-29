import { useTheme } from "./context/ThemeContext";
import NavBar from "./components/common/NavBar";
import Hero from "./components/sections/Hero";

function App() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      {/* Navbar */}
      <NavBar />

      {/* Main Content (with padding-top for fixed navbar) */}
      <main className="pt-16">
        {/* Hero Section*/}
        <Hero />

        {/* Placeholder Sections for Navigation Testing */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-light-surface dark:bg-dark-surface"
        >
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text">
            About Section
          </h2>
        </section>

        <section
          id="skills"
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text">
            Skills Section
          </h2>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center bg-light-surface dark:bg-dark-surface"
        >
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text">
            Projects Section
          </h2>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text">
            Contact Section
          </h2>
        </section>
      </main>
    </div>
  );
}

export default App;
