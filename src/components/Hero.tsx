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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className={`w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-8">
          <img 
            src={avatarImage} 
            alt="Avatar" 
            className="h-40 w-40 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-300">
          Web Developer 
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Xin chào! Tôi là một nhà phát triển web toàn diện chuyên xây dựng trải nghiệm web ấn tượng.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300"
          >
            Xem dự án
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 text-gray-900 dark:text-gray-100 rounded-md font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300"
          >
            Liên hệ với tôi
          </a>
        </div>
        
        <div className="flex space-x-6 mb-20 justify-center">
          <a 
            href="https://github.com/hieuhuynh113" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>

          <a 
            href="https://www.linkedin.com/in/huỳnh-trung-hiếu-a530b7365" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          
          <a 
            href="mailto:trunghieuhuynh520@gmail.com" 
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          
        </div>
        
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            aria-label="Cuộn xuống"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;