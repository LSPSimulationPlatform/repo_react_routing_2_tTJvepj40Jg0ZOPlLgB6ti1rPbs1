// src/components/TimelineCard/TimelineCard.tsx
import { Card, Col, Row, Typography, Space, Tag, Divider } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import type { TimelineCardProps } from "./TimelineCard.types"; // ✅ note `import type`

const { Title, Text, Paragraph } = Typography;

export function TimelineCard({
  title,
  subtitle,
  date,
  address,
  description,
  highlights = [],
  technologies = [],
}: TimelineCardProps) {
  return (
    <Card
      style={{
        width: "100%",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <Row justify="space-between" align="top">
        {/* Left side: title + subtitle */}
        <Col>
          <Title level={4} style={{ margin: 0 }}>
            {title}
          </Title>
          {subtitle && <Text type="secondary">{subtitle}</Text>}
        </Col>

        {/* Right side: date and address stacked */}
        <Col style={{ textAlign: "right", display: "flex", flexDirection: "column" }}>
          <Text type="secondary">{date}</Text>
          {address && (
            <Text type="secondary" style={{ marginTop: 4 }}>
              <EnvironmentOutlined /> {address}
            </Text>
          )}
        </Col>
      </Row>

      <Divider style={{ margin: "8px 0" }} />

      <Paragraph style={{ marginTop: 12 }}>{description}</Paragraph>

      {highlights.length > 0 && (
        <>
          <Text strong>Key Highlights:</Text>
          <ul style={{ marginTop: 4, marginBottom: 12 }}>
            {highlights.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </>
      )}

      {technologies.length > 0 && (
        <>
          <Text strong style={{ display: "block", marginBottom: 4 }}>Technologies:</Text>
          <Space wrap style={{ marginTop: 4 }}>
            {technologies.map((tech) => (
              <Tag color="purple" key={tech}>{tech}</Tag>
            ))}
          </Space>
        </>
      )}
    </Card>
  );
}
