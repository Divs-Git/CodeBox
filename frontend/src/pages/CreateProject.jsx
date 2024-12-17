import { useNavigate } from "react-router-dom";
import { useCreateProject } from "../hooks/apis/mutations/useCreateProject";
import { Button, Layout, Space, Typography } from "antd";

const CreateProject = () => {
  const { createProjectMutation } = useCreateProject();
  const navigate = useNavigate();
  const { Content, Header } = Layout;
  const { Text, Title } = Typography;

  const layoutStyle = {
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
  };

  const headerStyle = {
    backgroundColor: "#001529",
    color: "#fff",
    textAlign: "center",
    // paddingLeft: "30px",
    paddingTop: "10px",
  };

  const contentStyle = {
    margin: "200px auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    textAlign: "center",
    maxHeight: "150px",
  };

  async function handleCreateProject() {
    console.log("going to trigger the api ");
    try {
      const response = await createProjectMutation();
      console.log("now we should redirect to editor");
      navigate(`/project/${response.data}`);
    } catch (error) {
      console.log(error);
      throw new error();
    }
  }

  return (
    <Layout style={layoutStyle}>
      {/* Header */}
      <Header style={headerStyle}>
        <Title level={2} style={{ color: "#fff" }}>
          Code Box
        </Title>
      </Header>

      {/* Content */}
      <Content style={contentStyle}>
        <Space direction="vertical" size="large" align="center">
          <Text type="secondary">
            Click the button below to start a new project.
          </Text>
          <Button
            type="primary"
            size="large"
            onClick={handleCreateProject}
            style={{ width: "200px" }}
          >
            Create Project
          </Button>
        </Space>
      </Content>
    </Layout>
  );
};

export default CreateProject;
