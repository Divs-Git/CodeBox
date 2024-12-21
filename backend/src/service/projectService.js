import uuid4 from 'uuid4';
import fs from 'fs/promises';
import { REACT_PROJECT_COMMAND } from '../config/serverConfig.js';
import { execPromisified } from '../utils/execUtility.js';
import directoryTree from 'directory-tree';
import path from 'path';

export const createProjectService = async () => {
  // Create a unique id and then inside the projects folder create a new folder with that id
  const projectID = uuid4();
  console.log('New project id is', projectID);

  await fs.mkdir(`./projects/${projectID}`);

  // After this call the npm create vite command in newly created project folder
  const response = await execPromisified(REACT_PROJECT_COMMAND, {
    cwd: `./projects/${projectID}`,
  });

  return projectID;
};

export const getProjectTreeService = (projectID) => {
  const projectPath = path.resolve(`./projects/${projectID}`);
  const tree = directoryTree(projectPath);
  return tree;
};
