import React from "react";
import { useParams } from "react-router-dom";
import EditorComponent from "../components/molecules/EditorComponent";

const ProjectPlayground = () => {
  const { projectId } = useParams();

  return (
    <React.Fragment>
      <div>project ID: {projectId}</div>
      <EditorComponent />
    </React.Fragment>
  );
};

export default ProjectPlayground;
