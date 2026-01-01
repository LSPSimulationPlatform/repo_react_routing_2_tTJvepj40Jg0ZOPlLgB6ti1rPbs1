import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Sidebar } from "./Sidebar";
import { useSidebar } from "../hooks/useSidebar";

const { Header, Content } = Layout;

type Props = {
    children: React.ReactNode;
};

export function AppLayout({ children }: Props) {
    const { collapsed, toggleSidebar } = useSidebar();

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sidebar collapsed={collapsed} />

            <Layout>
                <Header
                    style={{
                        background: "#fff",
                        padding: "0 16px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Button
                        type="text"
                        onClick={toggleSidebar}
                        icon={
                            collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                        }
                        style={{ fontSize: 18 }}
                    />
                </Header>

                <Content
                    style={{
                        margin: 24,
                        padding: 24,
                        background: "#fff",
                        borderRadius: 8,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}