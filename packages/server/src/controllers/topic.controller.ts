import type { Request, Response } from 'express';
import { TopicService } from '../services/topic.service.js';

export class TopicController {
  static async getTopics(req: Request, res: Response) {
    const result = await TopicService.getTopics(req.body);

    return res.status(200).send(result);
  }

  static async createTopic(req: Request, res: Response) {
    const result = await TopicService.createTopic(req.body);

    return res.status(200).send(result);
  }

  static async deleteTopic(req: Request, res: Response) {
    const result = await TopicService.deleteTopic(req.body);

    return res.status(200).send(result);
  }
}
