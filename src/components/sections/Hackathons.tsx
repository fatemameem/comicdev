import React, { useState, useEffect } from 'react';
import { Trophy, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { HACKATHONS } from '../../data/constants';
import type { HackathonItem } from '../../../types';
import { ComicPanel } from '../ui/ComicPanel';

// ── per-card component so each has its own slideshow state ──────────────────
const HackathonCard: React.FC<{ event: HackathonItem }> = ({ event }) => {
  const { t } = useTranslation();
  const shots = event.screenshots ?? [];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (shots.length <= 1) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shots.length);
    }, 3000);
    return () => clearInterval(id);
  }, [shots.length]);

  return (
    <ComicPanel className="transform hover:-rotate-1 transition-transform">
      {/* ── Top row: name + date badge (always side-by-side) ── */}
      <div className="flex items-start justify-between gap-2 mb-4">
        <span className="font-comic font-bold text-xl leading-tight">
          {t(event.hackathonName)}
        </span>
        <span className="shrink-0 inline-block bg-comic-black dark:bg-gray-800 text-white font-comic text-xs px-3 py-1 border border-white dark:border-gray-600 shadow-comic dark:shadow-comic-dark transform -rotate-2 whitespace-nowrap">
          {t(event.date)}
        </span>
      </div>

      {/* ── Body: text left, slideshow right ────────────────── */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Left column */}
        <div className="flex-1 min-w-0">
          {/* <p className="font-body text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
            {t('hackathons.projectLabel')}
          </p> */}
          <h3 className="font-comic font-bold text-3xl mb-4 leading-none">
            {t(event.projectName)}
          </h3>

          {/* Award badge */}
          {event.award && (
            <div className="flex items-center gap-2 bg-comic-yellow border-2 border-comic-black px-3 py-2 shadow-comic mb-5 w-fit">
              <Trophy size={14} className="shrink-0 text-comic-black" />
              <span className="font-comic font-bold text-xs text-comic-black">
                {t(event.award)}
              </span>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-2">
            <a
              href={event.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-comic font-bold text-xs border-2 border-comic-black dark:border-comic-gray px-3 py-1.5 bg-white dark:bg-comic-dark-bg dark:text-comic-dark-text shadow-comic dark:shadow-comic-dark hover:bg-comic-black hover:text-white dark:hover:bg-white dark:hover:text-comic-black transition-colors"
            >
              <ExternalLink size={12} />
              {t('hackathons.repoLink')}
            </a>
            <a
              href={event.links.devpost}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-comic font-bold text-xs border-2 border-comic-black dark:border-comic-gray px-3 py-1.5 bg-comic-yellow text-comic-black shadow-comic dark:shadow-comic-dark hover:bg-comic-black hover:text-white transition-colors"
            >
              <ExternalLink size={12} />
              {t('hackathons.devpostLink')}
            </a>
          </div>
        </div>

        {/* Right column: slideshow only */}
        {shots.length > 0 && (
          <div className="sm:shrink-0 w-full sm:w-36 flex flex-col gap-2 justify-end">
            {/* Slideshow */}
            <div className="relative w-full h-32 border-2 border-comic-black dark:border-comic-gray overflow-hidden rounded-sm">
              <img
                key={currentIndex}
                src={shots[currentIndex]}
                alt={`Screenshot ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {/* Dot indicators */}
              {shots.length > 1 && (
                <div className="absolute bottom-1.5 left-0 right-0 flex justify-center gap-1">
                  {shots.map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-full transition-all duration-300 ${
                        i === currentIndex
                          ? 'w-2 h-2 bg-white'
                          : 'w-1.5 h-1.5 bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </ComicPanel>
  );
};

// ── Section ──────────────────────────────────────────────────────────────────
export const Hackathons: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hackathons"
      className="py-16 px-4 md:px-8 text-comic-black dark:text-comic-dark-text bg-comic-paper dark:bg-comic-dark-bg"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-12 flex items-center gap-4">
          <div className="bg-comic-yellow p-3 border-2 border-comic-black dark:border-comic-gray shadow-comic dark:shadow-comic-dark rounded-full text-comic-black">
            <Trophy size={32} />
          </div>
          <h2 className="font-comic font-bold text-4xl">{t('hackathons.title')}</h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {HACKATHONS.map((event) => (
            <HackathonCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};



