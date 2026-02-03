import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Footprints } from './ui/Doodles';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-comic-black dark:bg-[#050505] text-white py-12 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-6 relative z-10">
        {/* <Footprints className="text-gray-600 dark:text-comic-yellow opacity-20 justify-center mb-8" /> */}
        
        <p className="font-comic text-2xl">{t('footer.thanksForReading')}</p>
        <p className="font-body text-gray-400 dark:text-gray-500 text-sm">
          {t('footer.designedWith')}
        </p>
        <p className="font-body text-gray-500 text-xs mt-4">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>

        <button 
          onClick={scrollToTop}
          className="absolute right-4 bottom-4 md:right-8 md:bottom-8 bg-comic-yellow text-comic-black border-2 border-white dark:border-gray-800 p-2 rounded-full shadow-[2px_2px_0px_0px_white] dark:shadow-[2px_2px_0px_0px_#333] hover:scale-110 transition-transform"
          title={t('footer.backToTop')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      </div>
      
      {/* Background halftone pattern for footer */}
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-size-[10px_10px] opacity-20 pointer-events-none"></div>
    </footer>
  );
};