import React from 'react';
import Icon from '../../ui/Icon/Icon';
import './Topic.scss';

interface TopicProps {
  userId: number | null;
  id: number | null;
  title: string;
  body: string;
}

const Topic = (props: { topic: TopicProps }) => {
  return (
    <div className='topic'>
      <div className='topic__header'>
        <Icon img='' />
        <div className='topic__info'>
          <p className='topic__theme'>{props.topic.title}</p>
        </div>
      </div>
      <div className='topic__body'>{props.topic.body}</div>
    </div>
  );
};

export default Topic;
