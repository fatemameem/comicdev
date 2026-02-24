import React, { useEffect } from 'react';
import type { ExperienceItem } from '../../../types';
import { X, ExternalLink, Star } from 'lucide-react';
import { Button } from './Button';
import { TechBadge } from './TechBadge';
import { ComicPanel } from './ComicPanel';
import { useTranslation } from 'react-i18next';

interface ExperienceModalProps {
  experience: ExperienceItem;
  onClose: () => void;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({ experience, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-comic-black/60 dark:bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        <ComicPanel className="bg-white dark:bg-comic-dark-paper border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(75,85,99,1)]">

          <div className="flex justify-between items-start mb-6 border-b-2 border-comic-black dark:border-comic-gray pb-4">
            <div className="flex-1">
              <h2 className="font-comic font-bold text-3xl md:text-4xl text-comic-black dark:text-white mb-2">
                {t(experience.role)}
              </h2>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <p className="font-body text-xl text-gray-600 dark:text-gray-400">
                  @ {t(experience.company)}
                </p>
                <span className="bg-comic-yellow text-comic-black font-comic font-bold px-3 py-1 text-sm border-2 border-comic-black transform -rotate-1 w-fit">
                  {t(experience.period)}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-red-100 dark:hover:bg-red-900 rounded-full transition-colors group ml-4"
              title={t('experienceModal.closeModal')}
            >
              <X size={32} className="group-hover:rotate-90 transition-transform text-comic-black dark:text-white" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="font-body text-lg text-comic-black dark:text-gray-300">
              <p className="leading-relaxed">{t(experience.description)}</p>
            </div>

            {experience.responsibilities && experience.responsibilities.length > 0 && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 border-l-4 border-blue-500 dark:border-blue-400 rounded">
                <h3 className="font-comic font-bold text-xl mb-3 text-comic-black dark:text-white">
                  {t('experienceModal.responsibilities')}
                </h3>
                <ul className="space-y-2 font-body text-comic-black dark:text-gray-300">
                  {experience.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-500 dark:text-blue-400 mt-1">▸</span>
                      <span>{t(resp)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {experience.achievements && experience.achievements.length > 0 && (
              <div className="bg-green-50 dark:bg-green-900/20 p-4 border-l-4 border-green-500 dark:border-green-400 rounded">
                <h3 className="font-comic font-bold text-xl mb-3 text-comic-black dark:text-white">
                  {t('experienceModal.achievements')}
                </h3>
                <ul className="space-y-2 font-body text-comic-black dark:text-gray-300">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Star className="text-green-500 dark:text-green-400 fill-current mt-1" size={16} />
                      <span>{t(achievement)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-comic-paper dark:bg-gray-800/50 p-4 rounded">
              <h3 className="font-comic font-bold text-xl mb-3 text-comic-black dark:text-white">
                {t('experienceModal.techStack')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map(tech => (
                  <div key={tech} className="bg-white dark:bg-gray-800 border border-comic-black dark:border-gray-600 px-3 py-1.5 rounded-full text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                    <TechBadge name={tech} />
                  </div>
                ))}
              </div>
            </div>

            {experience.projectLinks && experience.projectLinks.length > 0 && (
              <div>
                <h3 className="font-comic font-bold text-xl mb-3 text-comic-black dark:text-white">
                  {t('experienceModal.relatedProjects')}
                </h3>
                <div className="space-y-2">
                  {experience.projectLinks.map((project, idx) => (
                    <a
                      key={idx}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 border-2 border-comic-black dark:border-gray-600 rounded hover:bg-comic-yellow hover:border-comic-black dark:hover:bg-comic-yellow dark:hover:border-comic-black transition-colors group"
                    >
                      <ExternalLink size={18} className="text-gray-600 group-hover:text-comic-black" />
                      <span className="font-body font-medium text-comic-black dark:text-gray-300 group-hover:text-comic-black">
                        {t(project.title)}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-300 dark:border-gray-700">
            <Button onClick={onClose} fullWidth className="flex justify-center items-center gap-2">
              {t('experienceModal.close')}
            </Button>
          </div>
        </ComicPanel>
      </div>
    </div>
  );
};
