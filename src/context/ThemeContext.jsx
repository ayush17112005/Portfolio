import {
  createContext,
  useContext,
  useState,
  useEffect,
  Children,
} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  //Effect: Runs once when app loads
  //Purpose: Check if user has a saved preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    //Check the system preference(does user's OS prefer dark mode?)
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    //Priority: SavedTheme > system preference > default to light
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
  }, []); //Empty array runs only once on mount

  //Effect: Runs whenever theme changes
  //Purpose: Update the HTML class and save preference to localStorage
  useEffect(() => {
    //Get the root <html> element
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(theme);

    //Save to the localStorage
    localStorage.setItem("theme", theme);
  }, [theme]); //Runs whenever 'theme' changes

  //Function to toggle the theme
  const toggleTheme = () => {
    //if it's light => change to dark,
    //if it's dark => change to light
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  //Render: Wrap children with context provider
  //value: data that all children can access
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//Custom Hook: useTheme
//Make it easy for components to access theme
//Usage: const {theme, toggleTheme} = useTheme();
export const useTheme = () => {
  const context = useContext(ThemeContext);
  console.log(context);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
