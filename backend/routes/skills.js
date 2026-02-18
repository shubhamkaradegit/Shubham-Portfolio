import express from 'express';
import {
  getAllSkills,
  getSkillsByCategory,
  createSkills,
  updateSkills,
  deleteSkills,
} from '../controllers/skillController.js';

const router = express.Router();

router.get('/', getAllSkills);
router.get('/:category', getSkillsByCategory);
router.post('/', createSkills);
router.put('/:id', updateSkills);
router.delete('/:id', deleteSkills);

export default router;
