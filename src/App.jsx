import { useTheme } from "./context/ThemeContext";
import NavBar from "./components/common/NavBar";

function App() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      {/* Navbar */}
      <NavBar />

      {/* Main Content (with padding-top for fixed navbar) */}
      <main className="pt-16">
        {/* Temporary Hero Section for Testing */}
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-light-text dark:text-dark-text text-center">
            Hi, I'm <span className="text-gradient">Ayushman</span>
          </h1>
          <p className="mt-4 text-xl text-light-textSecondary dark:text-dark-textSecondary text-center">
            Crafting Code, Building Experiences
          </p>
        </section>

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
