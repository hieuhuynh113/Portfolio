import React, { useEffect, useRef, useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

interface ContactProps {
  onSetActive: () => void;
}

const Contact: React.FC<ContactProps> = ({ onSetActive }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | '';
  }>({ message: '', type: '' });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally this would be connected to a backend API
    console.log('Form submitted:', formState);
    
    // Just for demonstration
    setFormStatus({
      message: 'Tin nhắn đã được gửi thành công. Cảm ơn bạn!',
      type: 'success',
    });
    
    // Reset form
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    // Clear status after a few seconds
    setTimeout(() => {
      setFormStatus({ message: '', type: '' });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: 'Địa chỉ',
      details: 'Hà Nội, Việt Nam',
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: 'Điện thoại',
      details: '+84 123 456 789',
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: 'Email',
      details: 'nguyenvana@example.com',
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Liên hệ</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Hãy liên hệ với tôi nếu bạn có bất kỳ câu hỏi hoặc cơ hội hợp tác nào. Tôi sẽ phản hồi trong thời gian sớm nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md"
              >
                <div className="mr-4 mt-1">{info.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{info.details}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              {formStatus.message && (
                <div
                  className={`mb-6 p-4 rounded-md ${
                    formStatus.type === 'success'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Họ tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Tiêu đề
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Nội dung
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all shadow-md hover:shadow-lg"
              >
                <Send className="h-5 w-5 mr-2" />
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;