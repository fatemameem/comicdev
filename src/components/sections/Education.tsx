import React from 'react';
import { EDUCATION } from '../../data/constants';
import { ComicPanel } from '../ui/ComicPanel';
import { ScribbleDivider } from '../ui/Doodles';
import { useTranslation } from 'react-i18next';

export const Education: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="education" className="py-16 px-4 md:px-8 bg-comic-paper dark:bg-comic-dark-bg relative">
      <div className="max-w-4xl mx-auto space-y-12 relative">
        <div className="text-center space-y-4">
          <h2 className="font-comic font-bold text-4xl text-comic-black dark:text-comic-dark-text">{t('education.title')}</h2>
          <ScribbleDivider className="w-48 mx-auto text-comic-yellow" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, index) => (
            <div key={edu.id} className={`${index % 2 === 1 ? 'md:mb-24' : 'md:mt-24'}`}>
              <ComicPanel className="h-full hover:scale-[1.02] transition-transform text-comic-black dark:text-comic-dark-text ">
                <div className="flex justify-between items-start mb-2 border-b-2 border-dashed border-gray-300 dark:border-gray-700 pb-2">
                  <h3 className="font-comic font-bold text-xl">{t(edu.school)}</h3>
                  <span className="font-comic dark:bg-black bg-comic-yellow px-2 py-0.5 text-sm transform rotate-2">{t(edu.year)}</span>
                </div>
                <h4 className="font-bold font-body text-lg mb-2">{t(edu.degree)}</h4>
                {edu.details && <p className="font-body text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t(edu.details)}</p>}
              </ComicPanel>
            </div>
          ))}
        </div>
        {/* <Footprints className="py-8 text-comic-black dark:text-comic-yellow" /> */}
        <img src="/snoopy/originn-bg.png"  alt="Snoopy Background" className="hidden md:block absolute w-52 h-40 -bottom-20 right-0 opacity-90 z-0" />
      </div>
    </section>
  );
};