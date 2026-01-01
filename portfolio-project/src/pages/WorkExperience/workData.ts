export interface WorkItem {
  position: string;
  company: string;
  date: string;
  address: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const workData: WorkItem[] = [
  {
    position: "Frontend Developer",
    company: "Tech Corp",
    date: "2023 – Present",
    address: "San Francisco, CA",
    description:
      "Developing modern web applications using React and TypeScript, collaborating with design and backend teams.",
    highlights: [
      "Implemented reusable UI components with Ant Design",
      "Optimized application performance by 30%",
      "Led code reviews and mentoring junior developers",
    ],
    technologies: ["React", "TypeScript", "Ant Design", "Vite", "Redux"],
  },
  {
    position: "Junior Developer",
    company: "Startup Inc",
    date: "2022 – 2023",
    address: "New York, NY",
    description:
      "Worked on UI development, bug fixes, and feature enhancements in a fast-paced startup environment.",
    highlights: [
      "Built responsive dashboards",
      "Integrated REST APIs",
      "Collaborated closely with product team",
    ],
    technologies: ["React", "JavaScript", "CSS", "Ant Design"],
  },
  {
    position: "Intern Developer",
    company: "Web Solutions",
    date: "2021 – 2022",
    address: "Austin, TX",
    description:
      "Assisted senior developers in creating web apps and learning full-stack development practices.",
    highlights: [
      "Developed small UI components",
      "Wrote unit tests",
      "Participated in sprint planning",
    ],
    technologies: ["React", "HTML", "CSS", "Git"],
  },
];
