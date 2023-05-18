import { Router } from 'express';
import { TopicController } from '../controllers/topic.controller.js';

export const topicRouter = Router();

topicRouter.get('/', TopicController.getTopics);
topicRouter.post('/', TopicController.createTopic);
topicRouter.delete('/:id', TopicController.deleteTopic);
