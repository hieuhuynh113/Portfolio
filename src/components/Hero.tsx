import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Mail, Linkedin } from 'lucide-react';
import avatarImage from '../assets/avatar.png';

interface HeroProps {
  onSetActive: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSetActive }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onSetActive();
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
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
      className="relative flex items-center justify-center min-h-screen pt-16 overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className={`w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-8">
          <img 
            src={avatarImage} 
            alt="Avatar" 
            className="object-cover w-40 h-40 border-4 border-blue-500 rounded-full shadow-lg"
          />
        </div>
        
        <h1 className="mb-6 text-5xl font-bold text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-300">
          Web Developer 
        </h1>
        
        <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-700 md:text-2xl dark:text-gray-300">
          Hello! I'm a full-stack web developer specializing in building impressive web experiences.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-6 py-3 font-medium text-white transition-all duration-300 transform bg-blue-600 rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 font-medium text-gray-900 transition-all duration-300 transform bg-white border border-gray-300 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 dark:text-gray-100 hover:shadow-lg hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
        
        <div className="flex justify-center mb-20 space-x-6">
          <a 
            href="https://github.com/hieuhuynh113" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>

          <a 
            href="https://www.linkedin.com/in/huỳnh-trung-hiếu-a530b7365" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          
          <a 
            href="mailto:trunghieuhuynh520@gmail.com" 
            className="text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          
        </div>
        
        <div className="absolute transform -translate-x-1/2 bottom-5 left-1/2 animate-bounce">
          <a 
            href="#about" 
            aria-label="Scroll down"
            className="text-gray-600 transition-colors dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;