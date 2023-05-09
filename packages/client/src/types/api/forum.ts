import { Topic } from '../topic';
import { Comment } from '../comment';

export type GetTopicsRequest = {
  limit: string;
  offset: string;
};

export type GetTopicsResponse = {
  total: number;
  items: Topic[];
};

export type CreateTopicRequest = {
  user_id: number;
  title: string;
  description: string;
};

export type DeleteTopicRequest = {
  topic_id: number;
};

export type GetCommentsRequest = {
  topic_id: string;
  limit: string;
  offset: string;
};

export type GetCommentsResponse = {
  total: number;
  items: Comment[];
};

export type CreateCommentRequest = {
  user_id: number;
  topic_id: number;
  text: string;
  created_at: string;
};

export type DeleteCommentRequest = {
  comment_id: number;
};
