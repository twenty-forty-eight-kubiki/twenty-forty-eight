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
import { SERVER_URL } from '../constants';
import { API } from './api';

export const ForumApi = {
  async getTopics(data: GetTopicsRequest): Promise<GetTopicsResponse> {
    return API.get<GetTopicsResponse>(`${SERVER_URL}/topics`, data);
  },

  async createTopic(data: CreateTopicRequest): Promise<Topic> {
    return API.post<CreateTopicRequest, Topic>(`${SERVER_URL}/topics`, data);
  },

  async deleteTopic(data: DeleteTopicRequest): Promise<boolean> {
    return API.delete<DeleteTopicRequest, boolean>(
      `${SERVER_URL}/topics/:id`,
      data
    );
  },

  async getComments(data: GetCommentsRequest): Promise<GetCommentsResponse> {
    return API.get<GetCommentsResponse>(`${SERVER_URL}/comments`, data);
  },

  async createComment(data: CreateCommentRequest): Promise<Comment> {
    return API.post<CreateCommentRequest, Comment>(
      `${SERVER_URL}/comments`,
      data
    );
  },

  async deleteComment(data: DeleteCommentRequest): Promise<boolean> {
    return API.delete<DeleteCommentRequest, boolean>(
      `${SERVER_URL}/comments/:id`,
      data
    );
  }
};
