import type { Request, Response } from 'express';
import { CommentService } from '../services/comment.service.js';

export class CommetController {
  static async getComments(req: Request, res: Response) {
    const payload = {
      limit: Number(req.query.limit || 20),
      offset: Number(req.query.offset || 0),
      topic_id: Number(req.query.topic_id)
    };

    if (!payload.topic_id || isNaN(payload.topic_id)) {
      return res.status(400).send({
        message: 'Wrong key of the topic!'
      });
    }

    if (isNaN(payload.limit) || isNaN(payload.offset)) {
      return res.status(400).send({
        message:
          'limit and/or offset queries must be convertable to numbers, because it is NaN in the backend'
      });
    }

    const result = await CommentService.getComments(payload);

    return res.status(200).send(result);
  }

  static async createComment(req: Request, res: Response) {
    const result = await CommentService.createComment(req.body);

    return res.status(200).send(result);
  }

  static async deleteComment(req: Request, res: Response) {
    const result = await CommentService.deleteComment(req.body);

    return res.status(200).send(result);
  }
}
