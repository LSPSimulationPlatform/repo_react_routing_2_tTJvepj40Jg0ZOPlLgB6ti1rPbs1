import { Card, Typography, Progress, Divider } from "antd";
import type { SkillCardProps } from "./SkillCard.types";

const { Title } = Typography;

export function SkillCard({ title, icon, skills }: SkillCardProps) {
  return (
    <Card
      style={{ width: "100%", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        {icon}
        <Title level={4} style={{ margin: 0 }}>
          {title}
        </Title>
      </div>
      <Divider style={{ margin: "8px 0" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {skills.map((s) => (
          <div key={s.name}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{s.name}</span>
            </div>
            <Progress percent={s.percentage} size="small" />
          </div>
        ))}
      </div>
    </Card>
  );
}
