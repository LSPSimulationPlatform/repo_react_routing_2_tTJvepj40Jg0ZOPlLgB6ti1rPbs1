import { Card, Divider, Typography } from "antd";

const { Title, Text } = Typography;

interface CertificateCardProps {
  title: string;
  subtext?: string;
  certificates: string[];
}

export function CertificateCard({ title, subtext, certificates }: CertificateCardProps) {
  return (
    <Card style={{ width: "100%", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
      <Title level={4} style={{ marginBottom: 4 }}>{title}</Title>
      {subtext && <Text type="secondary">{subtext}</Text>}
      <Divider style={{ margin: "8px 0 12px 0" }} />
      <ul>
        {certificates.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </Card>
  );
}
