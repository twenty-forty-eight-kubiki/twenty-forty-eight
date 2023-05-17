import type { Request, Response } from 'express';
import { TopicService } from '../services/topic.service.js';

export class TopicController {
  static async getTopics(req: Request, res: Response) {
    const payload = {
      limit: Number(req.query.limit || 20),
      offset: Number(req.query.offset || 0)
    };

    if (isNaN(payload.limit) || isNaN(payload.offset)) {
      return res.status(400).send({
        message:
          'limit and/or offset queries must be convertable to numbers, because it is NaN in the backend'
      });
    }

    const result = await TopicService.getTopics(payload);

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
