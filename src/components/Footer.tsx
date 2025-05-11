import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">DevPortfolio</h3>
            <p className="text-gray-400 max-w-md">
              Web developer với đam mê tạo ra các trải nghiệm web ấn tượng và giải pháp toàn diện.
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="text-lg font-semibold mb-2">Liên kết nhanh</h4>
            <div className="flex flex-wrap gap-4">
              <a href="#hero" className="text-gray-400 hover:text-white transition-colors">
                Trang chủ
              </a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                Giới thiệu
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                Dự án
              </a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                Kỹ năng
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Liên hệ
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center border-t border-gray-800 pt-8">
          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:email@example.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <p className="text-gray-500 text-center flex items-center">
            &copy; {currentYear} DevPortfolio. Tạo với{' '}
            <Heart className="h-4 w-4 text-red-500 mx-1 inline" /> bằng React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;