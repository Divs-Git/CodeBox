import util from 'util';
import {
  createProjectService,
  getProjectTreeService,
} from '../service/projectService.js';

export const createProjectController = async (req, res) => {
  const projectID = await createProjectService();

  return res.json({ message: 'Project Created', data: projectID });
};

export const getProjectTree = async (req, res) => {
  const tree = await getProjectTreeService(req.params.projectID);
  return res.status(200).json({
    data: tree,
    success: true,
    message: 'Successfully fetched the tree',
  });
};
