import React from 'react';
import Icon from '../../ui/Icon/Icon';
import './Comments.scss';

interface CommentsProps {
  postId: number | null;
  userId: number | null;
  name: string;
  email: string;
  body: string;
}

const Comments = (props: { comments: CommentsProps[] }) => {
  return (
    <div className='comments'>
      <h4>Comments</h4>
      {props.comments.map(comment => {
        return (
          <div style={{ marginBottom: 30 }} key={comment.userId}>
            <div className='comments__header'>
              <Icon img='' />
              <div className='comments__info'>
                <div className='comments__title'>{comment.name}</div>
              </div>
            </div>
            <div className='comments__body'>{comment.body}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
