import { Layout, Menu } from "antd";
import {
  BookOutlined,
  SolutionOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

type Props = {
  collapsed: boolean;
};

export function Sidebar({ collapsed }: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sider
      collapsed={collapsed}
      trigger={null}
      style={{ background: "#660191" }}
    >
      <div
        style={{
          height: 64,
          color: "#fff",
          fontSize: 18,
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Portfolio
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        style={{ background: "#660191" }}
        onClick={({ key }) => navigate(key)}
        items={[
          {
            key: "/education",
            icon: <BookOutlined />,
            label: "Education",
          },
          {
            key: "/work-experience",
            icon: <SolutionOutlined />,
            label: "Work Experience",
          },
          {
            key: "/skills",
            icon: <ToolOutlined />,
            label: "Skills",
          },
        ]}
      />
    </Sider>
  );
}
