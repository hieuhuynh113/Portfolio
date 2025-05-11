import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projectsData';

interface ProjectsProps {
  onSetActive: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onSetActive }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [onSetActive]);

  const handlePrevProject = () => {
    setActiveProject((prev) => 
      prev === null || prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleNextProject = () => {
    setActiveProject((prev) => 
      prev === null || prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <div
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dự án</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Dưới đây là một số dự án tiêu biểu mà tôi đã thực hiện. Mỗi dự án thể hiện kỹ năng và kiến thức của tôi trong các công nghệ khác nhau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <button
                    onClick={() => setActiveProject(index)}
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Chi tiết
                  </button>
                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProject !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {projects[activeProject].title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[activeProject].technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="text-gray-700 dark:text-gray-300 space-y-4 mb-6">
                <p>{projects[activeProject].fullDescription}</p>
                
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Thách thức</h4>
                <p>{projects[activeProject].challenges}</p>
                
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Giải pháp</h4>
                <p>{projects[activeProject].solutions}</p>
              </div>
              
              <div className="flex space-x-4 mt-6">
                {projects[activeProject].githubUrl && (
                  <a
                    href={projects[activeProject].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-md font-medium transition-all hover:bg-gray-800 dark:hover:bg-gray-600"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Mã nguồn
                  </a>
                )}
                {projects[activeProject].liveUrl && (
                  <a
                    href={projects[activeProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Xem trực tiếp
                  </a>
                )}
              </div>
            </div>
            
            <div className="flex justify-between p-4 border-t border-gray-200 dark:border-gray-800">
              <button
                onClick={handlePrevProject}
                className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Dự án trước
              </button>
              <button
                onClick={handleNextProject}
                className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Dự án tiếp theo
                <ChevronRight className="h-5 w-5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;