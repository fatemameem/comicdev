import React from 'react';

export const ScribbleDivider = ({ className = "" }: { className?: string }) => (
  <svg className={`w-full h-8 ${className}`} viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path d="M2 10C20 18 40 2 60 10C80 18 100 2 120 10C140 18 160 2 180 10C200 18 220 2 240 10C260 18 280 2 300 10C320 18 340 2 360 10C380 18 398 2 398 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Footprints = ({ className = "" }: { className?: string }) => (
  <div className={`flex gap-4 justify-center opacity-40 ${className}`}>
    {[1, 2, 3].map((i) => (
      <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ transform: `rotate(${i % 2 === 0 ? 15 : -15}deg) translateY(${i % 2 === 0 ? 5 : 0}px)` }}>
        <path d="M12 2C13 5 15 5 15 5C15 5 14 7 12 7C10 7 9 5 9 5C9 5 11 5 12 2ZM11 8C12 8 13 9 13 9L15 15L12 14L9 15L11 9C11 9 10 8 11 8Z" />
      </svg>
    ))}
  </div>
);

export const Starburst = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 2L23 14L38 10L28 20L38 30L23 26L20 38L17 26L2 30L12 20L2 10L17 14L20 2Z" />
  </svg>
);

export const SpeechBubbleTail = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none">
     <path d="M0 0 H30 L0 30 Z" className="stroke-comic-black dark:stroke-comic-gray" strokeWidth="2" />
     <path d="M2 0 H28 L2 26 Z" className="fill-white dark:fill-comic-dark-paper" stroke="none" /> 
  </svg>
);

export const PanelShimmer = () => (
    <div className="absolute inset-0 bg-halftone dark:bg-halftone-dark bg-[length:20px_20px] opacity-10 pointer-events-none" />
);