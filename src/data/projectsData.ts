export interface Project {
  title: string;
  shortDescription: string;
  technologies: string[];
  category: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "PORTFOLIO",
    shortDescription: "Portfolio cá nhân của tôi!",
    
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design", "Dark Mode"],
    category: "Web",
    image: "portfolio_avatar_project.jpg",
    githubUrl: "https://github.com/hieuhuynh113/Portfolio",
    liveUrl: "https://portfolio-seven-psi-33.vercel.app/"
  },
  {
    title: "WEBSITE BARBER SHOP",
    shortDescription: "Đặt lịch cắt tóc online và quản lý lịch cắt tóc!",
    technologies: ["Laravel", "PHP", "MySQL", "XAMPP"],
    category: "Web",
    image: "project_2.png",
    githubUrl: "https://github.com/hieuhuynh113/laravel_barber_app",
    liveUrl: "https://ntu271.vpsttt.vn/"
  },
  {
    title: "WEBSITE TRUNG TÂM TIẾNG NHẬT",
    shortDescription: "Nền tảng trực tuyến toàn diện cho việc học tiếng Nhật, tư vấn du học và khám phá văn hóa Nhật Bản!",
    technologies: ["React", "TypeScript", "JavaScript", "Material UI"],
    category: "Web",
    image: "project_3.png",
    githubUrl: "https://github.com/hieuhuynh113/Japanese-Language-Center",
    liveUrl: "https://japanese.ntu271.vpsttt.vn/"
  },
  {
    title: "LANDING PAGE NHÀ HÀNG",
    shortDescription: "Website nhà hàng sang trọng, trưng bày thực đơn cao cấp, không gian đẳng cấp!",
    technologies: ["React", "TypeScript", "Tailwind CSS ", "Vite"],
    category: "Web",
    image: "project_4.png",
    githubUrl: "https://github.com/hieuhuynh113/landing-page-restaurant",
    liveUrl: "https://landingpage.ntu271.vpsttt.vn/"
  }
];