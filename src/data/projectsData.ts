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
    shortDescription: "My personal portfolio!",
    
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design", "Dark Mode"],
    category: "Web",
    image: "portfolio_avatar_project.jpg",
    githubUrl: "https://github.com/hieuhuynh113/Portfolio",
    liveUrl: "https://portfolio-hieu-huynh.vercel.app/"
  },
  {
    title: "BARBER SHOP WEBSITE",
    shortDescription: "Online barber shop booking and appointment management system!",
    technologies: ["Laravel", "PHP", "MySQL", "XAMPP"],
    category: "Web",
    image: "project_2.png",
    githubUrl: "https://github.com/hieuhuynh113/laravel_barber_app",
    liveUrl: "https://ntu271.vpsttt.vn/"
  },
  {
    title: "JAPANESE LANGUAGE CENTER WEBSITE",
    shortDescription: "Comprehensive online platform for learning Japanese, study abroad consultation, and exploring Japanese culture!",
    technologies: ["React", "TypeScript", "JavaScript", "Material UI"],
    category: "Web",
    image: "project_3.png",
    githubUrl: "https://github.com/hieuhuynh113/Japanese-Language-Center",
    liveUrl: "https://japanese.ntu271.vpsttt.vn/"
  },
  {
    title: "RESTAURANT LANDING PAGE",
    shortDescription: "Luxurious restaurant website showcasing premium menu and elegant space!",
    technologies: ["React", "TypeScript", "Tailwind CSS ", "Vite"],
    category: "Web",
    image: "project_4.png",
    githubUrl: "https://github.com/hieuhuynh113/landing-page-restaurant",
    liveUrl: "https://landingpage.ntu271.vpsttt.vn/"
  }
];