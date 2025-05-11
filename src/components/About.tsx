import React, { useEffect, useRef } from 'react';
import { Code2, BookOpen, Coffee } from 'lucide-react';

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [onSetActive]);

  const cards = [
    {
      icon: <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: 'Phát triển web',
      description: 'Chuyên về xây dựng ứng dụng web hiện đại với React, TypeScript và các công nghệ mới nhất.',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: 'Học tập liên tục',
      description: 'Luôn cập nhật với các xu hướng và công nghệ mới trong lĩnh vực phát triển web.',
    },
    {
      icon: <Coffee className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
      title: 'Đam mê',
      description: 'Yêu thích việc giải quyết các thách thức phức tạp và tạo ra trải nghiệm người dùng tuyệt vời.',
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Giới thiệu về tôi</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Xin chào, tôi là <span className="text-blue-600 dark:text-blue-400">Nguyễn Văn A</span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Tôi là một nhà phát triển web toàn diện với hơn 5 năm kinh nghiệm, chuyên về xây dựng các ứng dụng web hiện đại và đáp ứng. Tôi đam mê tạo ra các giao diện người dùng đẹp mắt và trải nghiệm người dùng mượt mà.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Tốt nghiệp ngành Khoa học Máy tính tại Đại học Bách Khoa Hà Nội, tôi đã có cơ hội làm việc với nhiều công ty khác nhau từ các startup nhỏ đến các tập đoàn lớn, giúp tôi phát triển kỹ năng đa dạng và thích nghi với nhiều môi trường làm việc khác nhau.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Ngoài công việc, tôi thích đọc sách về công nghệ, tham gia các hội thảo, và đóng góp cho cộng đồng mã nguồn mở. Tôi luôn tìm kiếm cơ hội để học hỏi và phát triển bản thân.
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300"
              >
                Liên hệ ngay
              </a>
            </div>
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default About;