import { Router } from 'express';
import { themeRouter } from './theme.route.js';
import { topicRouter } from './topic.route.js';
import { commentRouter } from './comment.route.js';

export const router = Router();

router.use('/themes', themeRouter);
router.use('/topics', topicRouter);
router.use('/comments', commentRouter);
