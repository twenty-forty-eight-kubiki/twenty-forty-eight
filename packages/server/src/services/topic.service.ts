import { DeleteTopicDto } from '../dto/topic/delete-topic.dto.js';
import { CreateTopicDto } from '../dto/topic/create-topic.dto.js';
import { GetTopicsDto } from '../dto/topic/get-topics.dto.js';
import { Topic } from '../models/topic.model.js';

export class TopicService {
  static async getTopics(dto: GetTopicsDto) {
    return await Topic.findAndCountAll({
      limit: dto.limit,
      offset: dto.offset
    });
  }

  static async createTopic(dto: CreateTopicDto) {
    return await Topic.create({
      author_id: dto.user_id,
      title: dto.title,
      description: dto.description
    });
  }

  static async DeleteTopicDto(dto: DeleteTopicDto) {
    const deleteThemesCount = await Topic.destroy({
      where: { topic_id: dto.topic_id }
    });

    return Boolean(deleteThemesCount);
  }
}
