import { 
  Code, Database, Server, Smartphone, Brain,
  Palette, Globe, Settings, Zap,
  FileCode, Monitor, Layers, Cpu
} from 'lucide-react';
export const skillCategories = [
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "JavaScript", icon: "🟨" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "Tailwind CSS", icon: "💨" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "⚡" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🐬" },
      { name: "Firebase", icon: "🔥" },
    ],
  },
  {
    title: "Mobile & Tools",
    icon: Smartphone,
    skills: [
      
      { name: "Git", icon: "🌿" },
      { name: "VS Code", icon: "💻" },
    ],
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: [
      
      { name: "NLP", icon: "🧠" },
      { name: "Tensorflow", icon: "🤖" }
    ],
  },
];
