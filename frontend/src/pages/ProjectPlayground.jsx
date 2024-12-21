import React from 'react';
import { useParams } from 'react-router-dom';
import EditorComponent from '../components/molecules/EditorComponent';
import EditorButton from '../components/atoms/EditorButton/EditorButton';

const ProjectPlayground = () => {
  const { projectId } = useParams();

  return (
    <React.Fragment>
      <div>project ID: {projectId}</div>
      <EditorComponent />
      <EditorButton isActive={true} />
      <EditorButton isActive={false} />
    </React.Fragment>
  );
};

export default ProjectPlayground;
