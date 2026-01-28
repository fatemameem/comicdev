import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        p-2 rounded-lg 
        text-gray-800 dark:text-gray-200
        hover:bg-gray-300 dark:hover:bg-gray-700
        transition-colors duration-200
      "
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Sun className='text-yellow-400' size={24} /> : <Moon className='text-blue-400' size={24} />}
    </button>
  );
};