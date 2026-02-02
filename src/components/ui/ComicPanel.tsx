import React from 'react';
import { PanelShimmer } from './Doodles';

interface ComicPanelProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  variant?: 'white' | 'yellow';
}

export const ComicPanel: React.FC<ComicPanelProps> = ({ 
  children, 
  title, 
  className = "",
  variant = 'white'
}) => {
  const bgClass = variant === 'yellow' 
    ? 'bg-comic-yellow text-comic-black' 
    : 'bg-white dark:bg-comic-dark-paper dark:text-comic-dark-text';
  
  return (
    <div className={`relative border-2 border-comic-black dark:border-comic-gray shadow-comic dark:shadow-comic-dark rounded-sm overflow-hidden ${bgClass} ${className}`}>
      {variant === 'white' && <PanelShimmer />}
      
      {title && (
        <div className="border-b-2 border-comic-black dark:border-comic-gray bg-comic-yellow text-comic-black px-4 py-1 flex items-center justify-between">
          <span className="font-comic font-bold text-lg tracking-wide uppercase">{title}</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-comic-black"></div>
            <div className="w-2 h-2 rounded-full bg-comic-black opacity-50"></div>
            <div className="w-2 h-2 rounded-full bg-comic-black opacity-25"></div>
          </div>
        </div>
      )}
      
      <div className="p-6 relative z-10">
        {children}
      </div>
    </div>
  );
};