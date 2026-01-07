import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projectsData';
import AnimateOnScroll from './AnimateOnScroll';

interface ProjectsProps {
  onSetActive: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onSetActive }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onSetActive();
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [onSetActive]);

  return (
    <div
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
            <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Below are some of my featured projects. Each project demonstrates my skills and knowledge in different technologies.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Display projects in a 2x2 grid with overlay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <AnimateOnScroll key={index} delay={index * 100} className="h-full">
              <a
                href={project.liveUrl || project.githubUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 group h-[320px] hover:shadow-xl transition-all duration-500 hover:scale-[0.94] hover:border-blue-500/50"
              >
                {/* Background image with higher opacity */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70"
                />
                
                {/* Overlay and information - centered */}
                <div 
                  className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500
                  bg-gradient-to-t from-black/90 via-black/70 to-black/40
                  group-hover:from-blue-700/95 group-hover:via-blue-800/85 group-hover:to-blue-900/75"
                >
                  <div className="flex items-center mb-2 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                    <h3 className="text-base md:text-lg font-bold text-white drop-shadow-md">
                      {project.title}
                    </h3>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ml-2 text-white hover:text-blue-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Live demo"
                      >
                        <ExternalLink className="h-4 w-4 md:h-5 md:w-5 opacity-75 hover:opacity-100" />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-[17.6px] text-white mb-4 line-clamp-2 max-w-md drop-shadow transform transition-all duration-500 group-hover:translate-y-[-4px]">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 transform transition-all duration-500 group-hover:translate-y-[-4px]">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-600/60 text-white text-xs rounded-md shadow-sm group-hover:bg-blue-500/80 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-blue-600/60 text-white text-xs rounded-md shadow-sm group-hover:bg-blue-500/80 transition-all">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {project.githubUrl && (
                    <div className="mt-4 transform transition-all duration-500 group-hover:translate-y-[-4px]">
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-white bg-gray-800/70 hover:bg-gray-700/90 px-3 py-1.5 rounded-md transition-colors group-hover:shadow-md hover:shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-3.5 w-3.5 mr-1.5" />
                        View Source Code
                      </a>
                    </div>
                  )}
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;