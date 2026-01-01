export type EducationItem = {
  university: string;
  degree: string;
  faculty: string;
  date: string;
  description: string;
  tags: string[];
};

export const educationData: EducationItem[] = [
  {
    university: "XYZ University",
    degree: "Bachelor's Degree",
    faculty: "Computer Science",
    date: "2019 – 2023",
    description:
      "Focused on software engineering, algorithms, and modern web development technologies.",
    tags: ["GPA 3.8", "Honors", "Full-time"],
  },
  {
    university: "ABC University",
    degree: "Master's Degree",
    faculty: "Software Engineering",
    date: "2023 – 2025",
    description:
      "Specialized in full-stack development and cloud computing, completing multiple advanced projects.",
    tags: ["GPA 4.0", "Research Assistant", "Scholarship"],
  },
  {
    university: "DEF High School",
    degree: "High School Diploma",
    faculty: "Science Major",
    date: "2015 – 2019",
    description:
      "Graduated with distinction, strong foundation in mathematics and physics.",
    tags: ["Top 5%", "Science Club President", "Full-time"],
  },
];
