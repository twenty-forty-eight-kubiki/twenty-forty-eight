import type { Request, Response } from 'express';
import { CommentService } from '../services/comment.service.js';

export class CommetController {
  static async getComments(req: Request, res: Response) {
    const result = await CommentService.getComments(req.body);

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
