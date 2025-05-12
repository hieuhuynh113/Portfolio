import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dự án</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
            <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Dưới đây là một số dự án tiêu biểu mà tôi đã thực hiện. Mỗi dự án thể hiện kỹ năng và kiến thức của tôi trong các công nghệ khác nhau.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Hiển thị dự án dạng lưới 2x2 với overlay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <AnimateOnScroll key={index} delay={index * 100} className="h-full">
              <a
                href={project.liveUrl || project.githubUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 group h-[320px] hover:shadow-xl transition-all duration-300"
              >
                {/* Hình ảnh nền với độ mờ cao hơn */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-75"
                />
                
                {/* Overlay và thông tin - căn giữa */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/30 opacity-90 flex flex-col justify-end p-6 transition-all duration-300 group-hover:bg-blue-900/90">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xs font-bold text-white drop-shadow-md">
                      {project.title}
                    </h3>
                    {(project.liveUrl || project.githubUrl) && (
                      <ExternalLink className="h-3 w-3 text-white ml-2 opacity-75 hover:opacity-100" />
                    )}
                  </div>
                  
                  <p className="text-[17.6px] text-white mb-4 line-clamp-2 max-w-md drop-shadow">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-600/60 text-white text-xs rounded-md shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-blue-600/60 text-white text-xs rounded-md shadow-sm">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
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