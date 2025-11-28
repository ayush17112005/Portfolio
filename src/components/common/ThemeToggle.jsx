// ═══════════════════════════════════════════════════════════════
// THEME TOGGLE COMPONENT
// A clean toggle switch - icon inside the moving circle
// ═══════════════════════════════════════════════════════════════

import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-14 h-8 rounded-full
        transition-colors duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2
        ${isDark ? "bg-slate-700" : "bg-gray-300"}
      `}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* ─────────────────────────────────────────────────────────── */}
      {/* TOGGLE CIRCLE with icon inside */}
      {/* ─────────────────────────────────────────────────────────── */}
      <span
        className={`
          absolute top-1 w-6 h-6 rounded-full
          bg-white shadow-md
          flex items-center justify-center
          transition-all duration-300 ease-in-out
          ${isDark ? "left-7" : "left-1"}
        `}
      >
        {/* Show sun OR moon - not both */}
        {isDark ? (
          <span className="text-sm">🌙</span>
        ) : (
          <span className="text-sm">☀️</span>
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
