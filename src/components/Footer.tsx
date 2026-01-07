import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 py-12 text-white bg-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between mb-8 md:flex-row">
          <div className="mb-6 md:mb-0">
            <h3 className="mb-2 text-2xl font-bold text-white">Huynh Trung Hieu</h3>
            <p className="max-w-md text-gray-400">
              Web developer with a passion for creating impressive web experiences and comprehensive solutions.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="mb-2 text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-wrap gap-4">
              <a href="#hero" className="text-gray-400 transition-colors hover:text-white">
                Home
              </a>
              <a href="#about" className="text-gray-400 transition-colors hover:text-white">
                About
              </a>
              <a href="#projects" className="text-gray-400 transition-colors hover:text-white">
                Projects
              </a>
              <a href="#skills" className="text-gray-400 transition-colors hover:text-white">
                Skills
              </a>
              <a href="#contact" className="text-gray-400 transition-colors hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center pt-8 border-t border-gray-800">
          <div className="flex mb-6 space-x-6">
            <a
              href="https://github.com/hieuhuynh113"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-white"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/huỳnh-trung-hiếu-a530b7365"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:trunghieuhuynh520@gmail.com"
              className="text-gray-400 transition-colors hover:text-white"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <p className="flex items-center text-center text-gray-500">
            &copy; {currentYear} Huynh Trung Hieu. Made with{' '}
            <Heart className="inline w-4 h-4 mx-1 text-red-500" /> using React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;