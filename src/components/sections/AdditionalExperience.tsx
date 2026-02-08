import React from 'react';
import { ADDITIONAL_EXPERIENCE } from '../../data/constants';
import { ComicPanel } from '../ui/ComicPanel';
import { Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const AdditionalExperience: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="additional" className="py-16 px-4 md:px-8 bg-white dark:bg-comic-dark-paper border-y-2 border-comic-black dark:border-comic-gray transition-colors duration-300 text-comic-black dark:text-comic-dark-text">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 flex items-center gap-4">
          <div className="bg-comic-yellow p-3 border-2 border-comic-black dark:border-comic-gray shadow-comic dark:shadow-comic-dark rounded-full text-comic-black">
            <Users size={32} />
          </div>
          <h2 className="font-comic font-bold text-4xl">{t('additionalExperience.title')}</h2>
        </div>

        <div className="space-y-8">
          {ADDITIONAL_EXPERIENCE.map((job) => (
            <div key={job.id} className="relative">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-1 bg-comic-black dark:bg-gray-600 transform -translate-x-1/2 -z-10 border-l-2 border-r-2 border-comic-black dark:border-gray-600 h-full"></div>

              <div className={`md:flex items-center justify-between gap-12 ${job.id % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Date Badge */}
                <div className="md:w-5/12 mb-4 md:mb-0 flex justify-center">
                  <div className="inline-block bg-comic-black dark:bg-gray-800 text-white font-comic text-xl px-4 py-2 border-2 border-white dark:border-gray-600 shadow-comic dark:shadow-comic-dark transform -rotate-2">
                    {t(job.period)}
                  </div>
                </div>

                {/* Connector Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-comic-yellow border-2 border-comic-black dark:border-comic-gray rounded-full z-10"></div>

                {/* Content Card */}
                <div className="md:w-5/12">
                  <ComicPanel title={t(job.company)} variant={job.id === 2 ? 'yellow' : 'white'}>
                    <h3 className="font-bold text-xl mb-2">{t(job.role)}</h3>
                    <p className="font-body text-sm mb-4 opacity-90">{t(job.description)}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map(skill => (
                        <span key={skill} className="text-xs font-bold font-comic border border-comic-black dark:border-comic-gray px-2 py-1 bg-white dark:bg-comic-dark-bg dark:text-comic-dark-text rounded-sm text-comic-black">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </ComicPanel>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};