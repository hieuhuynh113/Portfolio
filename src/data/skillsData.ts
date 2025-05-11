interface Skill {
  name: string;
  level: number; // 0-100
}

export const frontendSkills: Skill[] = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 92 },
  { name: 'TypeScript', level: 88 },
  { name: 'React', level: 70 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'SASS/SCSS', level: 70 },
  { name: 'Responsive Design', level: 93 },
];

export const backendSkills: Skill[] = [
  { name: 'Laravel', level: 60 },
  { name: 'PHP', level: 60 },
  { name: 'MySQL', level: 60 },
  { name: 'C#', level: 60 },
];

export const toolsSkills: Skill[] = [
  { name: 'Git/GitHub', level: 90 },
  { name: 'Docker', level: 75 },
  { name: 'Vite', level: 85 },
  { name: 'Figma', level: 85 },
  { name: 'VS Code', level: 95 },
  { name: 'XAMPP', level: 70 },
  
];