import {
  GetTopicsRequest,
  GetTopicsResponse,
  CreateTopicRequest,
  DeleteTopicRequest,
  GetCommentsRequest,
  GetCommentsResponse,
  CreateCommentRequest,
  DeleteCommentRequest
} from '../types/api/forum';
import { Topic } from '../types/topic';
import { Comment } from '../types/comment';
import { API } from './api';

export const ForumApi = {
  async getTopics(data: GetTopicsRequest): Promise<GetTopicsResponse> {
    return API.get<GetTopicsResponse>('topics', data);
  },

  async createTopic(data: CreateTopicRequest): Promise<Topic> {
    return API.post<CreateTopicRequest, Topic>('topics', data);
  },

  async deleteTopic(data: DeleteTopicRequest): Promise<boolean> {
    return API.delete<DeleteTopicRequest, boolean>('topics/:id', data);
  },

  async getComments(data: GetCommentsRequest): Promise<GetCommentsResponse> {
    return API.get<GetCommentsResponse>('comments', data);
  },

  async createComment(data: CreateCommentRequest): Promise<Comment> {
    return API.post<CreateCommentRequest, Comment>('comments', data);
  },

  async deleteComment(data: DeleteCommentRequest): Promise<boolean> {
    return API.delete<DeleteCommentRequest, boolean>('comments/:id', data);
  }
};
