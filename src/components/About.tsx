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
      title: 'Phát triển web',
      description: 'Chuyên về xây dựng ứng dụng web hiện đại với React, JavaScript và các công nghệ mới nhất.',
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
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Giới thiệu về tôi</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll animation="fade-right" delay={200}>
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Xin chào! Tôi là <span className="text-blue-600 dark:text-blue-400">Huỳnh Trung Hiếu,</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Tôi là sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học Nha Trang, đam mê phát triển web và UX/UI. Thành thạo HTML, CSS, JavaScript, TailwindCSS cùng ReactJS ở Front-end và làm việc với Laravel PHP, MySQL ở Back-end.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Qua các dự án thực tế như website bán quần áo và website đặt lịch cắt tóc tôi luôn hướng đến việc tạo ra sản phẩm có giao diện trực quan, thân thiện với người dùng và hiệu suất ổn định. Với sự tò mò không ngừng tôi luôn hướng đến việc mở rộng kiến thức và kỹ năng của mình, đặc biệt trong lĩnh vực an ninh mạng, như đã được chứng nhận qua khóa học Cyber Security cơ bản.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Với tinh thần học hỏi không ngừng và niềm đam mê giải quyết vấn đề, tôi mong muốn được đóng góp những giải pháp sáng tạo và hiệu quả cho các dự án công nghệ, đồng thời phát triển bản thân trở thành một lập trình viên chuyên nghiệp trong tương lai.
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