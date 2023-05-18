export class CreateCommentDto {
  readonly user_id: number;

  readonly topic_id: number;

  readonly text: string;

  readonly created_at: string;
}
