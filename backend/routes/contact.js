import express from 'express';
import {
  getAllMessages,
  createMessage,
  updateMessageStatus,
  deleteMessage,
} from '../controllers/contactController.js';

const router = express.Router();

router.get('/', getAllMessages);
router.post('/', createMessage);
router.put('/:id', updateMessageStatus);
router.delete('/:id', deleteMessage);

export default router;
