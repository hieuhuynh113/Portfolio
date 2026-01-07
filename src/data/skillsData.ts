interface Skill {
  name: string;
  level: number; // 0-100
}

export const frontendSkills: Skill[] = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 92 },
  { name: 'TypeScript', level: 50 },
  { name: 'React', level: 70 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'SASS/SCSS', level: 70 },
  { name: 'Responsive Design', level: 93 },
];

export const backendSkills: Skill[] = [
  { name: 'Laravel', level: 50 },
  { name: 'PHP', level: 60 },
  { name: 'MySQL', level: 70 },
  { name: 'C#', level: 50 },
  { name: 'NodeJS', level: 70 },
];

export const toolsSkills: Skill[] = [
  { name: 'Git/GitHub', level: 90 },
  { name: 'Vite', level: 85 },
  { name: 'Figma', level: 85 },
  { name: 'VS Code', level: 95 },
  { name: 'XAMPP', level: 70 },
  
];