import React, { memo } from 'react';
import './ForumTopic.scss';

interface ForumTopicProps {
  theme: string;
  header: string;
  postId: number;
  onClick: () => void;
}

const ForumTopic = memo(
  ({ header, theme, postId, onClick }: ForumTopicProps) => {
    return (
      <div className='forum-topic' data-post={postId} onClick={onClick}>
        <h3 className='forum-topic__header'>{header}</h3>
        <p className='forum-topic__theme'>{theme}</p>
      </div>
    );
  }
);

export default ForumTopic;
