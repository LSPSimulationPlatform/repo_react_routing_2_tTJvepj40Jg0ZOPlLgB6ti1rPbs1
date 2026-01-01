import { Timeline, Typography } from "antd";
import { SolutionOutlined } from "@ant-design/icons";
import { TimelineCard } from "../../components/TimelineCard/TimelineCard";
import { workData } from "./workData";

const { Title, Text } = Typography;

export default function WorkExperience() {
  return (
    <>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <SolutionOutlined style={{ fontSize: 28, color: "#660191" }} />
        <Title level={2} style={{ margin: 0 }}>
          Work Experience
        </Title>
      </div>

      <Text type="secondary" style={{ display: "block", marginBottom: 24 }}>
        Positions I have held, responsibilities, and technologies used at each company.
      </Text>

      {/* Timeline using new AntD items */}
      <Timeline
        mode="start"
        items={workData.map((item) => ({
          icon: (
            <div
              style={{
                width: 12,
                minWidth: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#660191",
              }}
            />
          ),
          content: (
            <TimelineCard
              title={item.position}
              subtitle={item.company}
              date={item.date}
              address={item.address}
              description={item.description}
              highlights={item.highlights}
              technologies={item.technologies}
            />
          ),
        }))}
      />
    </>
  );
}
