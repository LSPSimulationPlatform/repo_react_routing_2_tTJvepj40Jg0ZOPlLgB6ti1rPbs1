import { Typography, Row } from "antd";
import { BookOutlined } from "@ant-design/icons";
import { educationData } from "./education.data";
import { EducationCard } from "./EducationCard";

const { Title, Paragraph } = Typography;

export default function Education() {
  return (
    <>
      {/* Header with Icon */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <BookOutlined style={{ fontSize: 28, color: "#660191" }} />
        <Title level={2} style={{ margin: 0 }}>
          Education
        </Title>
      </div>

      {/* Subtext */}
      <Paragraph type="secondary">
        Academic background and key educational milestones.
      </Paragraph>

      {/* Education Cards */}
      <Row gutter={[0, 16]} style={{ marginTop: 24 }}>
        {educationData.map((item, index) => (
          <EducationCard item={item} key={index} />
        ))}
      </Row>
    </>
  );
}
