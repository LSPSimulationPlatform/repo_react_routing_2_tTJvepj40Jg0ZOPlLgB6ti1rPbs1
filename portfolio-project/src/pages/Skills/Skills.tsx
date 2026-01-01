import { Row, Col, Typography } from "antd";
import { DesktopOutlined, ApiOutlined, CloudOutlined, ToolOutlined } from "@ant-design/icons";
import { SkillCard } from "../../components/SkillCard/SkillCard";
import { IconCard } from "../../components/IconCard/IconCard";
import { CertificateCard } from "../../components/CertificateCard/CertificateCard";

const { Title, Text } = Typography;

export default function Skills() {
  const mainSkills = [
    {
      title: "Frontend Development",
      icon: <DesktopOutlined style={{ fontSize: 24, color: "#660191" }} />,
      skills: [
        { name: "React", percentage: 90 },
        { name: "TypeScript", percentage: 85 },
        { name: "Ant Design", percentage: 80 },
      ],
    },
    {
      title: "Backend Development",
      icon: <ApiOutlined style={{ fontSize: 24, color: "#660191" }} />,
      skills: [
        { name: "Node.js", percentage: 80 },
        { name: "Express", percentage: 75 },
        { name: "MongoDB", percentage: 70 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <CloudOutlined style={{ fontSize: 24, color: "#660191" }} />,
      skills: [
        { name: "Docker", percentage: 75 },
        { name: "Git", percentage: 90 },
        { name: "CI/CD", percentage: 70 },
      ],
    },
  ];

  const softSkills = [
    { icon: <DesktopOutlined style={{ fontSize: 24, color: "#660191" }} />, name: "Communication" },
    { icon: <DesktopOutlined style={{ fontSize: 24, color: "#660191" }} />, name: "Teamwork" },
    { icon: <DesktopOutlined style={{ fontSize: 24, color: "#660191" }} />, name: "Problem Solving" },
    { icon: <DesktopOutlined style={{ fontSize: 24, color: "#660191" }} />, name: "Creativity" },
    { icon: <DesktopOutlined style={{ fontSize: 24, color: "#660191" }} />, name: "Adaptability" },
    { icon: <DesktopOutlined style={{ fontSize: 24, color: "#660191" }} />, name: "Leadership" },
  ];

  const certificates = ["AWS Certified Developer", "React Professional", "Scrum Master"];

  return (
    <>

 <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <ToolOutlined style={{ fontSize: 28, color: "#660191" }} />
        <Title level={2} style={{ margin: 0 }}>
         Skills
        </Title>
      </div>

      <Text type="secondary" style={{ display: "block", marginBottom: 24 }}>
        Positions I have held, responsibilities, and technologies used at each company.
      </Text>

      {/* Main Skills */}
      <Row gutter={[16, 16]}>
        {mainSkills.map((s) => (
          <Col xs={24} sm={24} md={8} key={s.title}>
            <SkillCard title={s.title} icon={s.icon} skills={s.skills} />
          </Col>
        ))}
      </Row>

      {/* Soft Skills */}
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24}>
          <IconCard title="Soft Skills" subtext="Personal and interpersonal abilities" icons={softSkills} />
        </Col>
      </Row>

      {/* Certificates */}
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24}>
          <CertificateCard title="Certifications" subtext="Professional Certificates" certificates={certificates} />
        </Col>
      </Row>
    </>
  );
}
