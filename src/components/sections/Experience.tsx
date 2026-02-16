import React, { useState } from 'react';
import { EXPERIENCE } from '../../data/constants';
import type { ExperienceItem } from '../../../types';
import { ComicPanel } from '../ui/ComicPanel';
import { ExperienceModal } from '../ui/ExperienceModal';
import { Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Experience: React.FC = () => {
  const { t } = useTranslation();
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  return (
    <section id="experience" className="py-16 px-4 md:px-8 bg-white dark:bg-comic-dark-paper border-y-2 border-comic-black dark:border-comic-gray transition-colors duration-300 text-comic-black dark:text-comic-dark-text">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 flex items-center gap-4">
          <div className="bg-comic-yellow p-3 border-2 border-comic-black dark:border-comic-gray shadow-comic dark:shadow-comic-dark rounded-full text-comic-black">
            <Briefcase size={32} />
          </div>
          <h2 className="font-comic font-bold text-4xl">{t('experience.title')}</h2>
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((job) => (
            <div key={job.id} className="relative">
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-1 bg-comic-black dark:bg-gray-600 transform -translate-x-1/2 -z-10 border-l-2 border-r-2 border-comic-black dark:border-gray-600 h-full"></div>

              <div className={`md:flex items-center justify-between gap-12 ${job.id % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                <div className="md:w-5/12 mb-4 md:mb-0 flex justify-center">
                  <div className="inline-block bg-comic-black dark:bg-gray-800 text-white font-comic text-xl px-4 py-2 border-2 border-white dark:border-gray-600 shadow-comic dark:shadow-comic-dark transform -rotate-2">
                    {t(job.period)}
                  </div>
                </div>

                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-comic-yellow border-2 border-comic-black dark:border-comic-gray rounded-full z-10"></div>

                <div className="md:w-5/12 group cursor-pointer" onClick={() => setSelectedExperience(job)}>
                  <ComicPanel
                    title={t(job.company)}
                    variant={job.id === 1 ? 'yellow' : 'white'}
                    className="transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-comic-hover dark:group-hover:shadow-comic-dark-hover relative overflow-visible"
                  >
                    <h3 className="font-bold text-xl mb-2">{t(job.role)}</h3>
                    <p className="font-body text-sm mb-4 opacity-90 line-clamp-2">{t(job.description)}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.slice(0, 4).map(skill => (
                        <span key={skill} className="text-xs font-bold font-comic border border-comic-black dark:border-comic-gray px-2 py-1 bg-white dark:bg-comic-dark-bg dark:text-comic-dark-text rounded-sm text-comic-black">
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 4 && (
                        <span className="text-xs text-gray-400 self-center">+{job.skills.length - 4}</span>
                      )}
                    </div>

                    <div className="absolute inset-0 bg-comic-yellow/0 group-hover:bg-comic-yellow/10 transition-colors flex items-center justify-center pointer-events-none">
                      <span className="bg-white dark:bg-black border-2 border-comic-black px-4 py-2 font-comic font-bold shadow-comic opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-comic-yellow group-hover:text-comic-black transition-all duration-300">
                        {t('experience.readMore')}
                      </span>
                    </div>
                  </ComicPanel>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedExperience && (
        <ExperienceModal
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </section>
  );
};