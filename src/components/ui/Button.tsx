import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = "",
  ...props 
}) => {
  const baseStyles = "font-comic font-bold text-lg px-6 py-2 border-2 border-comic-black dark:border-comic-gray transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none";
  
  const variants = {
    primary: "bg-comic-yellow text-comic-black shadow-comic dark:shadow-comic-dark hover:-translate-y-1 hover:shadow-comic-hover dark:hover:shadow-comic-dark-hover",
    secondary: "bg-white dark:bg-comic-dark-paper text-comic-black dark:text-comic-dark-text shadow-comic dark:shadow-comic-dark hover:-translate-y-1 hover:shadow-comic-hover dark:hover:shadow-comic-dark-hover",
    outline: "bg-transparent border-dashed text-comic-black dark:text-comic-dark-text hover:bg-comic-yellow/20"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};