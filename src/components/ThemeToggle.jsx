import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border bg-gray-100 dark:bg-bgDark1 hover:bg-gray-200 dark:hover:bg-gray-700 dark:border-line/30 mr-1"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-bgDark2" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;