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
      icon: <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: 'Web Development',
      description: 'Specialized in building modern web applications with React, JavaScript and the latest technologies.',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: 'Continuous Learning',
      description: 'Always staying updated with new trends and technologies in web development.',
    },
    {
      icon: <Coffee className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
      title: 'Passion',
      description: 'Love solving complex challenges and creating great user experiences.',
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll animation="fade-right" delay={200}>
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Hello! I'm <span className="text-blue-600 dark:text-blue-400">Huynh Trung Hieu,</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a final-year Software Engineering student at Nha Trang University, passionate about web development and UX/UI. Proficient in HTML, CSS, JavaScript, TailwindCSS, and ReactJS on the Front-end, and working with Laravel PHP and MySQL on the Back-end.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Through practical projects such as a clothing e-commerce website and a barber shop booking website, I always aim to create products with intuitive interfaces, user-friendly experiences, and stable performance. With endless curiosity, I constantly seek to expand my knowledge and skills, especially in cybersecurity, as certified through a basic Cyber Security course.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              With a continuous learning mindset and a passion for problem-solving, I aspire to contribute creative and effective solutions to technology projects while developing myself into a professional programmer in the future.
              </p>
              

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300"
                >
                  Contact Now
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" delay={400}>
            <div className="order-1 md:order-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-600 dark:border-blue-400"
                >
                  <div className="mb-4">{card.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
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