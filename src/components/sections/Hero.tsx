import React from 'react';
import { ComicPanel } from '../ui/ComicPanel';
import { Button } from '../ui/Button';
import { ArrowRight, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if(el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };
  
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if(el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-screen pt-28 pb-16 px-4 md:px-8 flex flex-col justify-center bg-comic-paper dark:bg-comic-dark-bg">
      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-8 items-center">
        {/* Left: Text Panel */}
        <div className="md:col-span-7 space-y-8">
           {/* Speech Bubble Intro */}
            <div className="relative inline-block mb-4 animate-bounce duration-3000">
              <div className="bg-white dark:bg-comic-dark-paper border-2 border-comic-black dark:border-comic-gray rounded-xl p-4 shadow-comic dark:shadow-comic-dark text-comic-black dark:text-comic-dark-text font-comic text-lg">
                {t('hero.welcomeMessage')}
                <div className="absolute -bottom-3 left-8 w-4 h-4 bg-white dark:bg-comic-dark-paper border-b-2 border-r-2 border-comic-black dark:border-comic-gray transform rotate-45"></div>
              </div>
            </div>

            <div className="space-y-4">
            <h1 className="font-comic font-bold text-5xl md:text-7xl leading-tight dark:text-comic-paper text-comic-black">
              {t('hero.mainTitle')} <span className="relative inline-block dark:text-comic-paper text-comic-black">
                <span className="relative z-10 text-comic-yellow dark:text-comic-paper">{t('hero.websites')}</span>
                <svg className="absolute bottom-1 left-0 w-full h-3 text-comic-black dark:text-comic-yellow z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="15" fill="none"/></svg>
              </span> {t('hero.tellStories')}
            </h1>
            <p className="font-body text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-lg">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap items-end gap-4 pt-4">
            <Button onClick={scrollToProjects} className="flex items-center gap-2 cursor-pointer">
              {t('hero.viewProjects')} <ArrowRight size={20} />
            </Button>
            <Button variant="secondary" onClick={scrollToContact} className="flex items-center gap-2 cursor-pointer">
              {t('hero.letsTalk')}
            </Button>
            <a title='projects' href="#" className="hidden md:block">
              <Button variant="outline" className="flex items-center gap-2 cursor-pointer" title="Download Resume">
                <Download size={20} />
              </Button>
            </a>
          </div>
        </div>

        {/* Right: Visual Panel */}
        <div className="md:col-span-5 relative">
          <ComicPanel title={t('hero.protagonist')} className="transform rotate-2 hover:rotate-0 transition-transform duration-300 z-20">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 border-2 border-comic-black dark:border-comic-gray border-dashed flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://picsum.photos/600/600?grayscale" 
                  alt="Developer Portrait" 
                  className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal dark:opacity-70 opacity-80 hover:opacity-100 transition-opacity"
                />
                <div className="absolute bottom-4 right-4 bg-comic-yellow border-2 border-comic-black px-3 py-1 font-comic font-bold text-sm transform -rotate-6 shadow-sm text-comic-black">
                  {t('hero.frontendWizard')}
                </div>
            </div>
            <div className="mt-4 font-body text-sm space-y-2 text-comic-black dark:text-comic-paper">
              <p><strong>{t('hero.name')}</strong> {t('hero.nameValue')}</p>
              <p><strong>{t('hero.level')}</strong> {t('hero.levelValue')}</p>
              <p><strong>{t('hero.superpower')}</strong> {t('hero.superpowerValue')}</p>
            </div>
          </ComicPanel>
          
          {/* Decorative Doodles behind */}
          {/* <svg className="absolute -top-10 -right-10 w-24 h-24 text-comic-yellow opacity-50 z-10 animate-spin-slow" viewBox="0 0 50 50">
            <path d="M25 0 L30 20 L50 25 L30 30 L25 50 L20 30 L0 25 L20 20 Z" fill="currentColor" />
          </svg> */}
        </div>

      </div>
      {/* <img src="/snoopy/snoopy-bg.png"  alt="Snoopy Background" className="hidden md:block absolute min-h-screen top-10 left-0 opacity-5 dark:opacity-5 z-0" /> */}
    </section>
  );
};