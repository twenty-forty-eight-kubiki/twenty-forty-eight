import { CreateCommentDto } from '../dto/comment/create-comment.dto.js';
import { GetCommentsDto } from '../dto/comment/get-comments.dto.js';
import { Comment } from '../models/comment.model.js';
import { DeleteCommentDto } from '../dto/comment/delete-comment.dto.js';

export class CommentService {
  static async getComments(dto: GetCommentsDto) {
    const { count, rows } = await Comment.findAndCountAll({
      where: { foreign_topic_id: dto.topic_id },
      limit: dto.limit,
      offset: dto.offset
    });

    return { total: count, items: rows };
  }

  static async createComment(dto: CreateCommentDto) {
    return await Comment.create({
      user_id: dto.user_id,
      topic_id: dto.topic_id,
      text: dto.text,
      created_at: dto.created_at
    });
  }

  static async deleteCommentDto(dto: DeleteCommentDto) {
    const deleteThemesCount = await Comment.destroy({
      where: { comment_id: dto.comment_id }
    });

    return Boolean(deleteThemesCount);
  }
}
