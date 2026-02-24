import React from 'react';
import { VOLUNTARY } from '../../data/constants';
import { ComicPanel } from '../ui/ComicPanel';
import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Voluntary: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="voluntary" className="py-16 px-4 md:px-8 text-comic-black dark:text-comic-dark-text bg-comic-paper dark:bg-comic-dark-bg">
        
        {/* Voluntary Column */}
        <div className="space-y-6">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Heart className="text-red-500 fill-current" size={28} />
            <h3 className="font-comic font-bold text-3xl">{t('volunteer.sideQuests')}</h3>
          </div>
          
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {VOLUNTARY.map((vol) => (
            <ComicPanel key={vol.id} className="transform hover:-rotate-1 transition-transform">
              <h4 className="font-comic font-bold text-xl">{t(vol.role)}</h4>
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-2">@ {t(vol.organization)}</p>
              <p className="font-body text-sm">{t(vol.description)}</p>
            </ComicPanel>
          ))}
        </div>

        {/* Additional Column */}
        {/* <div id="additional" className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Star className="text-comic-yellow fill-current stroke-black dark:stroke-gray-500" size={28} />
            <h3 className="font-comic font-bold text-3xl">{t('volunteer.bonusContent')}</h3>
          </div>

          <div className="bg-white dark:bg-comic-dark-paper border-2 border-comic-black dark:border-comic-gray p-6 shadow-comic dark:shadow-comic-dark relative">
            <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-evenly">
              {[1,2,3,4].map(i => <div key={i} className="w-4 h-4 rounded-full bg-comic-paper dark:bg-comic-dark-bg border border-gray-300 dark:border-gray-600"></div>)}
            </div>
            
            <ul className="pl-12 space-y-4">
              {ADDITIONAL.map((item, i) => (
                <li key={i} className="font-comic text-xl list-disc marker:text-comic-yellow">
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
};