import React, { useState, useEffect } from 'react';
import type { ProjectItem } from '../../../types';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { Button } from './Button';
import { TechBadge } from './TechBadge';
import { ComicPanel } from './ComicPanel';
import { useTranslation } from 'react-i18next';

// Helper function to map category literals to translation keys
const getCategoryTranslationKey = (category: string): string => {
  switch (category) {
    case 'Developer': return 'category.developer';
    case 'Security': return 'category.security';
    case 'Academic Research': return 'category.academic';
    default: return category;
  }
};

interface ProjectModalProps {
  project: ProjectItem;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (project.screenshots.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentImageIndex((prev) => (prev === project.screenshots.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [project.screenshots.length, isPaused]);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev === project.screenshots.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev === 0 ? project.screenshots.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-comic-black/60 dark:bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        <ComicPanel className="bg-white dark:bg-comic-dark-paper border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(75,85,99,1)]">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-6 border-b-2 border-comic-black dark:border-comic-gray pb-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-comic-yellow text-comic-black font-comic font-bold px-2 py-0.5 text-sm border border-comic-black transform -rotate-1">
                  {project.issueNumber}
                </span>
                <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${t(getCategoryTranslationKey(project.category)) === t('category.security') ? 'bg-red-100 text-red-800 border-red-800' : 'bg-blue-100 text-blue-800 border-blue-800'}`}>
                  {t(getCategoryTranslationKey(project.category))}
                </span>
              </div>
              <h2 className="font-comic font-bold text-3xl md:text-4xl text-comic-black dark:text-white">
                {t(project.title)}
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-red-100 dark:hover:bg-red-900 rounded-full transition-colors group"
              title={t('projectModal.closeModal')}
            >
              <X size={32} className="group-hover:rotate-90 transition-transform text-comic-black dark:text-white" />
            </button>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left: Carousel */}
            <div className="lg:col-span-7 space-y-4">
              <div 
                className="relative aspect-video border-2 border-comic-black dark:border-comic-gray bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {project.screenshots.length > 0 ? (
                  <img 
                    src={project.screenshots[currentImageIndex]} 
                    alt={`Screenshot ${currentImageIndex + 1}`}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isAnimating ? 'opacity-80' : 'opacity-100'}`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">{t('projectModal.noPreview')}</div>
                )}
                
                {/* Carousel Controls */}
                {project.screenshots.length > 1 && (
                  <>
                    <button 
                      title={t('projectModal.previousImage')}
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-comic-black p-2 rounded-full border-2 border-comic-black opacity-0 group-hover:opacity-100 transition-all shadow-sm"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      title={t('projectModal.nextImage')}
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-comic-black p-2 rounded-full border-2 border-comic-black opacity-0 group-hover:opacity-100 transition-all shadow-sm"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
                
                {/* Progress Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.screenshots.map((_, idx) => (
                    <button 
                      title={t('projectModal.selectImage')}
                      key={idx}
                      onClick={() => {
                        setIsAnimating(true);
                        setCurrentImageIndex(idx);
                        setTimeout(() => setIsAnimating(false), 300);
                      }}
                      className={`w-2.5 h-2.5 rounded-full border border-comic-black shadow-sm transition-all duration-300 ${idx === currentImageIndex ? 'bg-comic-yellow scale-110' : 'bg-white hover:bg-gray-200'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Tech Stack Bubbles */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <div key={tech} className="bg-white dark:bg-gray-800 border border-comic-black dark:border-gray-600 px-3 py-1.5 rounded-full text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                    <TechBadge name={tech} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <div className="flex-1 space-y-6">
                
                {/* Story Arc */}
                <div className="space-y-4 font-body text-comic-black dark:text-gray-300">
                  <p className="text-lg leading-relaxed">
                    {project.longDescription ? t(project.longDescription) : t(project.solution)}
                  </p>
                  
                  {project.features && (
                    <div className="bg-comic-paper dark:bg-gray-800/50 p-4 border-l-4 border-comic-yellow">
                      <h4 className="font-comic font-bold text-lg mb-2 text-comic-black dark:text-white">{t('projectModal.keyFeatures')}</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        {project.features.map((feature, i) => (
                          <li key={i}>{t(feature)}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-4 pt-2">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded border border-blue-200 dark:border-blue-800">
                      <span className="font-bold text-xs uppercase text-blue-800 dark:text-blue-300 block mb-1">{t('projectModal.theChallenge')}</span>
                      <p className="text-sm">{t(project.problem)}</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-200 dark:border-green-800">
                      <span className="font-bold text-xs uppercase text-green-800 dark:text-green-300 block mb-1">{t('projectModal.theSolution')}</span>
                      <p className="text-sm">{t(project.solution)}</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Footer Actions */}
              <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-300 dark:border-gray-700">
                {project.links.demo && project.links.repo && project.links.demo.trim() !== '#' && project.links.repo.trim() !== '#' ? (
                  // Both links available - show both buttons
                  <div className="grid grid-cols-2 gap-4">
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="block">
                      <Button fullWidth className="flex justify-center items-center gap-2">
                        <ExternalLink size={20} /> {t('projectModal.liveDemo')}
                      </Button>
                    </a>
                    <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="secondary" fullWidth className="flex justify-center items-center gap-2">
                        <Github size={20} /> {t('projectModal.source')}
                      </Button>
                    </a>
                  </div>
                ) : (project.links.demo && project.links.demo.trim() !== '#') ? (
                  // Only demo link available
                  <div className="grid grid-cols-2 gap-4">
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="block">
                      <Button fullWidth className="flex justify-center items-center gap-2">
                        <ExternalLink size={20} /> {t('projectModal.liveDemo')}
                      </Button>
                    </a>
                    <Button 
                      variant="secondary" 
                      fullWidth 
                      className="flex justify-center items-center gap-2"
                      onClick={() => {
                        onClose();
                        setTimeout(() => {
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }, 300);
                      }}
                    >
                      <ExternalLink size={20} /> {t('projectModal.requestDemo')}
                    </Button>
                  </div>
                ) : (project.links.repo && project.links.repo.trim() !== '#') ? (
                  // Only repo link available
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      fullWidth 
                      className="flex justify-center items-center gap-2"
                      onClick={() => {
                        onClose();
                        setTimeout(() => {
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }, 300);
                      }}
                    >
                      <ExternalLink size={20} /> {t('projectModal.requestDemo')}
                    </Button>
                    <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="secondary" fullWidth className="flex justify-center items-center gap-2">
                        <Github size={20} /> {t('projectModal.source')}
                      </Button>
                    </a>
                  </div>
                ) : (
                  // No valid links - show only request demo button (centered)
                  <div className="flex justify-center">
                    <Button 
                      className="flex justify-center items-center gap-2 px-8"
                      onClick={() => {
                        onClose();
                        setTimeout(() => {
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }, 300);
                      }}
                    >
                      <ExternalLink size={20} /> {t('projectModal.requestDemo')}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ComicPanel>
      </div>
    </div>
  );
};