interface Skill {
  name: string;
  level: number; // 0-100
}

export const frontendSkills: Skill[] = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 92 },
  { name: 'TypeScript', level: 88 },
  { name: 'React', level: 90 },
  { name: 'Vue.js', level: 85 },
  { name: 'Redux', level: 82 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'SASS/SCSS', level: 87 },
  { name: 'Responsive Design', level: 93 },
];

export const backendSkills: Skill[] = [
  { name: 'Node.js', level: 87 },
  { name: 'Express.js', level: 85 },
  { name: 'MongoDB', level: 83 },
  { name: 'PostgreSQL', level: 80 },
  { name: 'REST API', level: 89 },
  { name: 'GraphQL', level: 78 },
  { name: 'Firebase', level: 82 },
  { name: 'AWS Services', level: 75 },
  { name: 'Authentication/JWT', level: 85 },
];

export const toolsSkills: Skill[] = [
  { name: 'Git/GitHub', level: 90 },
  { name: 'Docker', level: 75 },
  { name: 'Webpack', level: 82 },
  { name: 'Vite', level: 85 },
  { name: 'Jest', level: 80 },
  { name: 'CI/CD', level: 78 },
  { name: 'Figma', level: 85 },
  { name: 'VS Code', level: 95 },
  { name: 'Agile/Scrum', level: 88 },
];