import { Card, Divider, Typography, Row, Col, Space } from "antd";
import type { IconCardProps } from "./IconCard.types";

const { Title, Text } = Typography;

export function IconCard({ title, subtext, icons }: IconCardProps) {
  return (
    <Card style={{ width: "100%", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
      <Title level={4} style={{ marginBottom: 4 }}>{title}</Title>
      {subtext && <Text type="secondary">{subtext}</Text>}
      <Divider style={{ margin: "8px 0 12px 0" }} />
      <Row gutter={[16, 16]}>
        {icons.map((i) => (
          <Col xs={24} sm={12} md={8} key={i.name}>
            <Space align="center" size={8}>
              {i.icon}
              <Text>{i.name}</Text>
            </Space>
          </Col>
        ))}
      </Row>
    </Card>
  );
}
