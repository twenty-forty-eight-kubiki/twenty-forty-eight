import { Router } from 'express';
import { CommetController } from '../controllers/comment.controller.js';

export const commentRouter = Router();

commentRouter.get('/', CommetController.getComments);
commentRouter.post('/', CommetController.createComment);
commentRouter.delete('/:id', CommetController.deleteComment);
