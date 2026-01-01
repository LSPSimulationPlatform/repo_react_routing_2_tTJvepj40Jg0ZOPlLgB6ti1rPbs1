export interface SkillCardProps {
  title: string;
  icon?: React.ReactNode;
  skills: { name: string; percentage: number }[];
}
