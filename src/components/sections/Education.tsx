import React from 'react';
import { EDUCATION } from '../../data/constants';
import { ComicPanel } from '../ui/ComicPanel';
import { ScribbleDivider, Footprints } from '../ui/Doodles';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <div className="text-center space-y-4">
          <h2 className="font-comic font-bold text-4xl">Chapter 1: The Origin Story</h2>
          <ScribbleDivider className="w-48 mx-auto text-comic-yellow" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, index) => (
            <div key={edu.id} className={`${index % 2 === 1 ? 'md:mt-12' : ''}`}>
              <ComicPanel className="h-full hover:scale-[1.02] transition-transform">
                <div className="flex justify-between items-start mb-2 border-b-2 border-dashed border-gray-300 dark:border-gray-700 pb-2">
                  <h3 className="font-comic font-bold text-xl">{edu.school}</h3>
                  <span className="font-comic bg-black dark:bg-gray-700 text-white px-2 py-0.5 text-sm transform rotate-2">{edu.year}</span>
                </div>
                <h4 className="font-bold font-body text-lg mb-2">{edu.degree}</h4>
                {edu.details && <p className="font-body text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{edu.details}</p>}
              </ComicPanel>
            </div>
          ))}
        </div>
        
        <Footprints className="py-8 text-comic-black dark:text-comic-yellow" />
      </div>
    </section>
  );
};