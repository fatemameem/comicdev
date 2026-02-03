import React, { useState } from 'react';
import { PROJECTS } from '../../data/constants';
import type { ProjectItem } from '../../../types';
import { ComicPanel } from '../ui/ComicPanel';
import { TechBadge } from '../ui/TechBadge';
import { ProjectModal } from '../ui/ProjectModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  
  const allTech = Array.from(new Set(PROJECTS.flatMap(p => p.techStack)));
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.techStack.includes(filter));

  const developerProjects = filteredProjects.filter(p => p.category === 'Developer');
  const securityProjects = filteredProjects.filter(p => p.category === 'Security');

  const ProjectCard = ({ project }: { project: ProjectItem }) => (
    <div 
      onClick={() => setSelectedProject(project)}
      className="group cursor-pointer h-full"
    >
      <ComicPanel 
        title={`${project.issueNumber}: ${project.title}`}
        className="h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-comic-hover dark:hover:shadow-comic-dark-hover"
      >
        {/* Preview Image Thumbnail */}
        <div className="w-[calc(100%+3rem)] -mx-6 -mt-6 mb-4 h-48 overflow-hidden border-b-2 border-comic-black dark:border-comic-gray relative">
          <img 
            src={project.screenshots[0]} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-comic-yellow/0 group-hover:bg-comic-yellow/10 transition-colors flex items-center justify-center">
            <span className="bg-white dark:bg-black border-2 border-comic-black px-4 py-2 font-comic font-bold shadow-comic opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-comic-yellow group-hover:text-comic-black transition-all duration-300">
              Read Issue
            </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-3">
        {/* Quick Summary */}
        <div className="space-y-2 font-body text-sm">
            <p className="line-clamp-2 text-gray-600 dark:text-gray-300">
              <span className="font-bold text-comic-black dark:text-white">Plot: </span> 
              {project.problem}
            </p>
            <p className="line-clamp-2">
              <span className="font-bold text-comic-black dark:text-white">Climax: </span>
              {project.solution}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mt-auto pt-4 border-t-2 border-dashed border-gray-300 dark:border-gray-700">
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map(tech => (
                <span key={tech} className="text-xs font-bold border border-gray-300 dark:border-gray-600 rounded px-1.5 py-0.5 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="text-xs text-gray-400 self-center">+{project.techStack.length - 3}</span>
              )}
            </div>
          </div>
        </div>
      </ComicPanel>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-comic-paper dark:bg-comic-dark-bg bg-size-[24px_24px] text-comic-black dark:text-comic-dark-text">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-comic font-bold text-5xl mb-4 bg-white dark:bg-comic-dark-paper inline-block px-4 border-2 border-comic-black dark:border-comic-gray shadow-comic dark:shadow-comic-dark transform -rotate-1 text-comic-black dark:text-white">
            Featured Issues
          </h2>
          <p className="font-body mt-4 max-w-2xl mx-auto bg-white dark:bg-comic-dark-paper p-2 border border-comic-black dark:border-comic-gray rounded-lg text-comic-black dark:text-gray-300">
            Select an issue to read the full story.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button 
            onClick={() => setFilter('All')}
            className={`font-comic font-bold px-4 py-2 border-2 border-comic-black dark:border-comic-gray rounded-full transition-all text-comic-black  ${filter === 'All' ? 'bg-comic-yellow shadow-comic-sm text-comic-black dark:text-comic-black scale-105' : 'bg-white dark:bg-comic-dark-paper hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-comic-dark-text'}`}
          >
            All Issues
          </button>
          {allTech.map(tech => (
            <button 
              key={tech}
              onClick={() => setFilter(tech)}
              className={`flex items-center gap-2 font-comic text-sm font-bold px-3 py-1.5 border-2 border-comic-black dark:border-comic-gray rounded-full transition-all text-comic-black ${filter === tech ? 'bg-comic-yellow shadow-comic-sm text-comic-black dark:text-comic-black scale-105' : 'bg-white dark:bg-comic-dark-paper hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-comic-dark-text'}`}
            >
              <TechBadge name={tech} showLabel={false} className="opacity-80" />
              {tech}
            </button>
          ))}
        </div>

        {/* Developer Projects */}
        {developerProjects.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="font-comic font-bold text-3xl text-comic-black dark:text-white transform -rotate-1">
                Developer Chronicles
              </h3>
              <div className="flex-1 h-px bg-comic-black dark:bg-gray-600 border-b border-dashed border-gray-400"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developerProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Security Projects */}
        {securityProjects.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="font-comic font-bold text-3xl text-comic-black dark:text-white transform rotate-1">
                Security Files
              </h3>
              <div className="flex-1 h-px bg-comic-black dark:bg-gray-600 border-b border-dashed border-gray-400"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-comic-dark-paper border-2 border-dashed border-comic-black dark:border-comic-gray rounded-lg">
            <p className="font-comic text-2xl text-gray-500">No issues found in this archive.</p>
            <button onClick={() => setFilter('All')} className="mt-4 text-blue-500 underline font-bold">View All</button>
          </div>
        )}

      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};