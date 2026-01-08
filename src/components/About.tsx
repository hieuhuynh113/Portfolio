import React, { useEffect, useRef } from 'react';
import { Code2, BookOpen, Coffee } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

interface AboutProps {
  onSetActive: () => void;
}

const About: React.FC<AboutProps> = ({ onSetActive }) => {
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

  const cards = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: 'Web Development',
      description: 'Specialized in building modern web applications with React, JavaScript and the latest technologies.',
    },
    {
      icon: <BookOpen className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
      title: 'Continuous Learning',
      description: 'Always staying updated with new trends and technologies in web development.',
    },
    {
      icon: <Coffee className="w-8 h-8 text-amber-600 dark:text-amber-400" />,
      title: 'Passion',
      description: 'Love solving complex challenges and creating great user experiences.',
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="px-4 py-20 bg-white sm:px-6 lg:px-8 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">About Me</h2>
            <div className="w-20 h-1 mx-auto bg-blue-600 dark:bg-blue-400"></div>
          </div>
        </AnimateOnScroll>

        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <AnimateOnScroll animation="fade-right" delay={200}>
            <div className="order-2 md:order-1">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Hello! I'm <span className="text-blue-600 dark:text-blue-400">Huynh Trung Hieu,</span>
              </h3>
              <p className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
              I'm a Software Engineer with over 1 year of hands-on experience in full-stack web development and UX/UI design. I specialize in building modern, scalable web applications using React, TypeScript, and Tailwind CSS on the frontend, while leveraging Laravel, PHP, and MySQL for robust backend solutions.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
              Throughout my career, I've successfully delivered multiple production-ready projects including e-commerce platforms and booking management systems. My approach focuses on creating intuitive user interfaces, optimizing performance, and ensuring code quality through best practices. I'm also expanding my expertise in cybersecurity, having completed foundational training in the field.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
              Driven by a passion for continuous improvement and problem-solving, I thrive on tackling complex technical challenges and delivering solutions that make a real impact. I'm committed to staying at the forefront of technology trends and contributing to innovative projects that push the boundaries of what's possible.
              </p>
              

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 font-medium text-white transition-all duration-300 transform bg-blue-600 rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
                >
                  Contact Now
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" delay={400}>
            <div className="grid order-1 grid-cols-1 gap-6 md:order-2 sm:grid-cols-2 md:grid-cols-1">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="p-6 transition-all duration-300 border-l-4 border-blue-600 rounded-lg shadow-md bg-gray-50 dark:bg-gray-800 hover:shadow-lg dark:border-blue-400"
                >
                  <div className="mb-4">{card.icon}</div>
                  <h4 className="mb-2 text-xl font-semibold">{card.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default About;