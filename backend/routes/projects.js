import express from 'express';
import {
  getAllProjects,
  getProjectsByCategory,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js';

const router = express.Router();

router.get('/', getAllProjects);
router.get('/category/:category', getProjectsByCategory);
router.get('/:id', getProjectById);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;
