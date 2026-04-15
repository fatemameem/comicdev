import React from 'react';
import { Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { HACKATHONS } from '../../data/constants';
import { HackathonCard } from '../ui/HackathonCard';

// ── per-card component so each has its own slideshow state ──────────────────


// ── Section ──────────────────────────────────────────────────────────────────
export const Hackathons: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hackathons"
      className=" px-4 md:px-8 text-comic-black dark:text-comic-dark-text bg-comic-paper dark:bg-comic-dark-bg dark:border-comic-gray"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12 flex items-center gap-4">
          <div className="bg-comic-yellow p-3 border-2 border-comic-black dark:border-comic-gray shadow-comic dark:shadow-comic-dark rounded-full text-comic-black">
            <Trophy size={30} />
          </div>
          <h2 className="font-comic font-bold text-3xl text-comic-black dark:text-white transform -rotate-1">{t('hackathons.title')}</h2>
          <div className="flex-1 h-px bg-comic-black dark:bg-gray-600 border-b border-dashed border-gray-400"></div>
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



