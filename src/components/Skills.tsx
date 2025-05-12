import React, { useEffect, useRef } from 'react';
import { frontendSkills, backendSkills, toolsSkills } from '../data/skillsData';
import AnimateOnScroll from './AnimateOnScroll';

interface SkillsProps {
  onSetActive: () => void;
}

const Skills: React.FC<SkillsProps> = ({ onSetActive }) => {
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

  const SkillBar = ({ name, level }: { name: string; level: number }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-gray-800 dark:text-gray-200 font-medium">{name}</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-500 dark:to-emerald-400 h-2.5 rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kỹ năng</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
            <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Dưới đây là các kỹ năng và công nghệ mà tôi thành thạo. Tôi luôn học hỏi và cập nhật các công nghệ mới để nâng cao kỹ năng của mình.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <AnimateOnScroll delay={100} animation="fade-up">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-6 text-center border-b border-gray-200 dark:border-gray-700 pb-3">
                Frontend
              </h3>
              <div className="space-y-6">
                {frontendSkills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300} animation="fade-up">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-6 text-center border-b border-gray-200 dark:border-gray-700 pb-3">
                Backend
              </h3>
              <div className="space-y-6">
                {backendSkills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={500} animation="fade-up">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-6 text-center border-b border-gray-200 dark:border-gray-700 pb-3">
                Công cụ & Khác
              </h3>
              <div className="space-y-6">
                {toolsSkills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Skills;