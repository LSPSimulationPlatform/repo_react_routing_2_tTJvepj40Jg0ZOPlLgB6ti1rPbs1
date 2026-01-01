import { Card, Typography, Tag, Space, Divider } from "antd";
import type { EducationItem } from "./education.data";

const { Title, Text, Paragraph } = Typography;

type Props = {
  item: EducationItem;
};

export function EducationCard({ item }: Props) {
  return (
    <Card style={{ width: "100%", marginBottom: 16 }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 12,
        }}
      >
        <Title level={4} style={{ margin: 0 }}>
          {item.university}
        </Title>
        <Text type="secondary">{item.date}</Text>
      </div>

      {/* Degree & Faculty */}
      <Text strong>
        {item.degree} — {item.faculty}
      </Text>

      {/* Divider */}
      <Divider style={{ margin: "12px 0", borderTop: "1px solid #d9d9d9" }} />

      {/* Description */}
      <Paragraph style={{ marginBottom: 12 }}>{item.description}</Paragraph>

      {/* Tags */}
      <Space wrap>
        {item.tags.map((tag) => (
          <Tag color="purple" key={tag}>
            {tag}
          </Tag>
        ))}
      </Space>
    </Card>
  );
}
